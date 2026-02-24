document.addEventListener("DOMContentLoaded", () => {
  /* .main_tab */
  // 메인탭 버튼/섹션 활성화 및 컨테이너 상단 스크롤 처리
  const $tabBtns = document.querySelectorAll(".top .main_tab .tab_btn");
  const $sections = document.querySelectorAll("section[id^='memu_']");
  const $header = document.getElementById("site_header");

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  // header 높이
  function getHeaderHeight() {
    return $header ? $header.offsetHeight : 0;
  }

  // container 상단 스크롤
  function scrollToContainerTop() {
    const $target = document.querySelector(".container");
    if (!$target) return;

    const $headerH = getHeaderHeight();
    const $top =
      window.pageYOffset + $target.getBoundingClientRect().top - $headerH;

    window.scrollTo({ top: $top, behavior: "smooth" });
  }

  // container 상단 스크롤 지연
  function scrollToContainerTopDeferred() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToContainerTop());
    });
  }

  // 섹션 id 반환
  function getSectionIdFromHash() {
    const $hash = window.location.hash.replace("#", "");
    if (!$hash) return "memu_drink";

    const $el = document.getElementById($hash);
    if ($el && $el.matches("section[id^='memu_']")) return $hash;

    return "memu_drink";
  }

  // 섹션 활성화
  function setActiveSectionById(id) {
    if (!id) return;

    $tabBtns.forEach(($btn) => $btn.classList.remove("on"));
    $sections.forEach(($s) => $s.classList.remove("menu_active"));

    const $activeSection = document.getElementById(id);
    if ($activeSection) $activeSection.classList.add("menu_active");

    const $activeBtn = Array.from($tabBtns).find(
      ($btn) => $btn.dataset.tab === id
    );
    if ($activeBtn) $activeBtn.classList.add("on");

    if ($activeSection && typeof $activeSection._resetMenu === "function") {
      $activeSection._resetMenu();
    }
  }

  // 최초 진입 처리
  function initMainTab() {
    const $id = getSectionIdFromHash();
    setActiveSectionById($id);
    scrollToContainerTopDeferred();
  }

  // 해시 변경 처리
  window.addEventListener("hashchange", () => {
    const $id = getSectionIdFromHash();
    setActiveSectionById($id);
    scrollToContainerTopDeferred();
  });

  // 탭 클릭 처리
  $tabBtns.forEach(($btn) => {
    $btn.addEventListener("click", () => {
      const $id = $btn.dataset.tab;
      if (!$id) return;

      history.replaceState(null, "", "#" + $id);
      setActiveSectionById($id);
      scrollToContainerTopDeferred();
    });
  });

  // 외부 페이지에서 해시로 진입 시 앵커 점프 보정
  window.addEventListener("load", () => {
    scrollToContainerTopDeferred();
  });

  if ($tabBtns.length) initMainTab();

  /* section */
  // 섹션별로 필터/정렬/페이지네이션 상태를 관리하고 렌더링
  document.querySelectorAll("section[id^='memu_']").forEach(($section) => {
    /* common */
    // 공통 상태값, 유틸, render
    const $list = $section.querySelector(".memu_con .menu_list");
    if (!$list) return;

    const $itemsAll = Array.from($list.querySelectorAll(".menu_item"));
    $itemsAll.forEach(($it, $i) => {
      $it.dataset.baseIndex = String($i);
    });

    let $activeCat = "all";
    let $sortType = "new";
    let $current = 1;

    // 현재 레이아웃 열 수 계산
    function getColumnCount(listEl) {
      const $style = getComputedStyle(listEl);
      const $gtc = $style.gridTemplateColumns;
      if ($gtc && $gtc !== "none") {
        return Math.max(1, $gtc.split(" ").filter(Boolean).length);
      }
      return 1;
    }

    // 열 수에 따른 페이지당 개수
    function getPerPageByCols(cols) {
      if (cols >= 4) return 20;
      if (cols === 3) return 18;
      if (cols === 2) return 16;
      return 12;
    }

    // 현재 섹션의 perPage
    function getPerPage() {
      const $cols = getColumnCount($list);
      return getPerPageByCols($cols);
    }

    // 필터 결과 목록
    function getFilteredItems() {
      if ($activeCat === "all") return [...$itemsAll];
      return $itemsAll.filter(
        ($it) => String($it.dataset.cat || "").toLowerCase() === $activeCat
      );
    }

    // 가격 값
    function getPrice($it) {
      const $v = String($it.dataset.price || "").replace(/[^\d]/g, "");
      return $v ? Number($v) : 0;
    }

    // 상태 값
    function getStatus($it) {
      return String($it.dataset.status || "").toLowerCase();
    }

    // 기본 순서
    function getBaseIndex($it) {
      const $v = String($it.dataset.baseIndex || "").replace(/[^\d]/g, "");
      return $v ? Number($v) : 0;
    }

    // 정렬 결과 목록
    function applySort(items) {
      const $copy = [...items];

      switch ($sortType) {
        case "new":
          return $copy.sort((a, b) => {
            const $diff = (getStatus(b) === "new") - (getStatus(a) === "new");
            if ($diff !== 0) return $diff;
            return getBaseIndex(a) - getBaseIndex(b);
          });

        case "best":
          return $copy.sort((a, b) => {
            const $diff =
              (getStatus(b) === "best") - (getStatus(a) === "best");
            if ($diff !== 0) return $diff;
            return getBaseIndex(a) - getBaseIndex(b);
          });

        case "row_price":
          return $copy.sort((a, b) => getPrice(a) - getPrice(b));

        case "high_price":
          return $copy.sort((a, b) => getPrice(b) - getPrice(a));

        default:
          return $copy;
      }
    }

    // 결과 카운트
    function setCount(n) {
      const $countEl = $section.querySelector(".filter .result em");
      if ($countEl) $countEl.textContent = String(n);
    }

    // path 라벨
    function setPathLabel(text) {
      const $pathLastEl = $section.querySelector(".filter .path p:last-child");
      if ($pathLastEl) $pathLastEl.textContent = String(text || "").trim();
    }

    /* .pagenation */
    // 페이지 버튼, 화살표
    const $pager = $section.querySelector(".pagenation");
    const $numWrap = $pager ? $pager.querySelector(".num_page") : null;
    const $btnFirst = $pager
      ? $pager.querySelector(".left button:nth-child(1)")
      : null;
    const $btnPrev = $pager
      ? $pager.querySelector(".left button:nth-child(2)")
      : null;
    const $btnNext = $pager
      ? $pager.querySelector(".right button:nth-child(1)")
      : null;
    const $btnLast = $pager
      ? $pager.querySelector(".right button:nth-child(2)")
      : null;

    // 페이지 숫자 렌더
    function renderPaging(totalPages) {
      if (!$pager || !$numWrap) return;

      $numWrap.innerHTML = "";
      for (let $i = 1; $i <= totalPages; $i++) {
        const $b = document.createElement("button");
        $b.type = "button";
        $b.textContent = String($i);
        if ($i === $current) $b.classList.add("on");

        $b.addEventListener("click", () => {
          if ($i === $current) return;
          $current = $i;
          render();
          scrollToContainerTopDeferred();
        });

        $numWrap.appendChild($b);
      }

      if ($btnFirst) $btnFirst.disabled = totalPages <= 5 || $current === 1;
      if ($btnLast) $btnLast.disabled = totalPages <= 5 || $current === totalPages;
      if ($btnPrev) $btnPrev.disabled = $current === 1;
      if ($btnNext) $btnNext.disabled = $current === totalPages;
    }

    // 리스트 렌더, 페이지 렌더
    function render() {
      const $perPage = getPerPage();

      const $filtered = getFilteredItems();
      const $sorted = applySort($filtered);

      const $totalItems = $sorted.length;
      const $totalPages = Math.max(1, Math.ceil($totalItems / $perPage));
      if ($current > $totalPages) $current = $totalPages;

      const $start = ($current - 1) * $perPage;
      const $end = $start + $perPage;

      $list.innerHTML = "";
      $sorted.slice($start, $end).forEach(($it) => {
        $it.style.display = "";
        $list.appendChild($it);
      });

      setCount($totalItems);
      renderPaging($totalPages);
    }

    /* .sub_tab */
    // 카테고리 초기화, 클릭
    const $subTab = $section.querySelector(".sub_tab");
    const $subBtns = $subTab ? $subTab.querySelectorAll("button") : [];

    // 카테고리 기본값
    function initSubTab() {
      if (!$subTab) {
        $activeCat = "all";
        return;
      }

      const $allBtn = $subTab.querySelector("button.all") || $subBtns[0];
      if ($allBtn) {
        $subBtns.forEach(($b) => $b.classList.remove("on"));
        $allBtn.classList.add("on");
        $activeCat = "all";
        setPathLabel($allBtn.textContent);
      }
    }

    // 카테고리 클릭 이벤트
    function bindSubTab() {
      if (!$subTab) return;

      $subTab.addEventListener("click", (e) => {
        const $btn = e.target.closest("button");
        if (!$btn) return;

        $subBtns.forEach(($b) => $b.classList.remove("on"));
        $btn.classList.add("on");

        setPathLabel($btn.textContent);
        $activeCat = String($btn.classList[0] || "all").toLowerCase();
        $current = 1;

        render();
      });
    }

    /* .sorting */
    // 정렬 초기화, 클릭
    const $sorting = $section.querySelector(".sorting");
    const $sortingBtns = $sorting ? $sorting.querySelectorAll("button") : [];

    // 정렬 기본값
    function initSorting() {
      if (!$sorting) {
        $sortType = "new";
        return;
      }

      const $newBtn = $sorting.querySelector("button.new") || $sortingBtns[0];
      if ($newBtn) {
        $sortingBtns.forEach(($b) => $b.classList.remove("on"));
        $newBtn.classList.add("on");
        $sortType = "new";
      }
    }

    // 정렬 클릭 이벤트
    function bindSorting() {
      if (!$sorting) return;

      $sorting.addEventListener("click", (e) => {
        e.preventDefault();

        const $btn = e.target.closest("button");
        if (!$btn) return;

        $sortingBtns.forEach(($b) => $b.classList.remove("on"));
        $btn.classList.add("on");

        $sortType = String($btn.classList[0] || "new").toLowerCase();
        $current = 1;

        render();
      });
    }

    /* .pagenation */
    // 페이지 클릭 이벤트
    function bindPaging() {
      if (!$pager) return;

      if ($btnFirst) {
        $btnFirst.addEventListener("click", () => {
          $current = 1;
          render();
          scrollToContainerTopDeferred();
        });
      }

      if ($btnPrev) {
        $btnPrev.addEventListener("click", () => {
          if ($current > 1) $current -= 1;
          render();
          scrollToContainerTopDeferred();
        });
      }

      if ($btnNext) {
        $btnNext.addEventListener("click", () => {
          const $perPage = getPerPage();
          const $totalPages = Math.max(
            1,
            Math.ceil(applySort(getFilteredItems()).length / $perPage)
          );

          if ($current < $totalPages) $current += 1;
          render();
          scrollToContainerTopDeferred();
        });
      }

      if ($btnLast) {
        $btnLast.addEventListener("click", () => {
          const $perPage = getPerPage();
          const $totalPages = Math.max(
            1,
            Math.ceil(applySort(getFilteredItems()).length / $perPage)
          );
          $current = $totalPages;
          render();
          scrollToContainerTopDeferred();
        });
      }
    }

    // 리사이즈 시 열 수 바뀌면 페이지 계산 다시
    const $onResize = (() => {
      let $t = null;
      return () => {
        clearTimeout($t);
        $t = setTimeout(() => {
          $current = 1;
          render();
        }, 120);
      };
    })();

    window.addEventListener("resize", $onResize);

    /* init */
    // 섹션 초기 상태 세팅, 렌더
    function resetSectionUi() {
      initSubTab();
      initSorting();
      $current = 1;
      render();
    }

    bindSubTab();
    bindSorting();
    bindPaging();

    $section._resetMenu = resetSectionUi;
    resetSectionUi();
  });
});