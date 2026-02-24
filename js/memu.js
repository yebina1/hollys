document.addEventListener("DOMContentLoaded", () => {
  // 상세 데이터
  const $memuData = [
    {
      id: "americano",
      name: "아메리카노",
      eName: "Caffe Americano",
      info: "진한 에스프레소의 맛과 향을 부드럽게 즐길 수 있는 아메리칸 스타일의 커피",
      allergy: null,
      sizes: [
        { size: "Regular (354ml)", price: 4700, serve: ["hot", "ice"] },
        { size: "Grande (472ml)", price: 5400, serve: ["hot", "ice"] },
        { size: "Venti (591ml)", price: 6100, serve: ["ice-only"] },
      ],
      nutrition: {
        rows: [
          { label: "칼로리", hot: "12kcal", ice: "12kcal" },
          { label: "단백질", hot: "1g(2%)", ice: "1g (2%)" },
          { label: "포화지방", hot: "0.1g (0%)", ice: "0.1g (0%)" },
          { label: "카페인", hot: "114mg", ice: "114mg" },
          { label: "나트륨", hot: "0mg (0%)", ice: "0mg (0%)" },
          { label: "당류", hot: "0g (0%)", ice: "0g (0%)" },
        ],
      },
    },
  ];

  /* info_card */
  // 상세 모달 렌더
  function renderInfo(data) {
    const $infoCard = document.querySelector(".info_card#infocard");
    if (!$infoCard) return;

    $infoCard.querySelector(".tit h4").textContent = data.name || "";
    $infoCard.querySelector(".tit p").textContent = data.eName || "";
    $infoCard.querySelector(".memu_info").textContent = data.info || "";

    const $allergy = $infoCard.querySelector(".allergy");
    if ($allergy) {
      if (!data.allergy) {
        $allergy.style.display = "none";
        $allergy.textContent = "";
      } else {
        $allergy.style.display = "block";
        $allergy.textContent = `알레르기 유발: ${data.allergy}`;
      }
    }

    const $sizes = $infoCard.querySelector(".sizes");
    if ($sizes) {
      const $sizesArr = Array.isArray(data.sizes) ? data.sizes : [];
      if ($sizesArr.length === 0) {
        $sizes.style.display = "none";
        $sizes.innerHTML = "";
      } else {
        $sizes.style.display = "block";
        $sizes.innerHTML = $sizesArr
          .map((s) => {
            const $priceText = `₩${Number(s.price || 0).toLocaleString("ko-KR")}`;
            const $serve = Array.isArray(s.serve) ? s.serve : [];

            let $chips = "";
            if ($serve.includes("ice-only")) {
              $chips = `<span class="chip only">ICE ONLY</span>`;
            } else {
              $chips = ["hot", "ice"]
                .filter((t) => $serve.includes(t))
                .map((t) => `<span class="chip">${t.toUpperCase()}</span>`)
                .join("");
            }

            return `
              <div class="size_row">
                <div class="size_name">${s.size || ""}</div>
                <div class="size_price">${$priceText}</div>
                <div class="size_serve">${$chips}</div>
              </div>
            `;
          })
          .join("");
      }
    }

    const $nutrition = $infoCard.querySelector(".nutrition");
    if ($nutrition) {
      const $rows = data.nutrition?.rows || [];
      if (!$rows.length) {
        $nutrition.style.display = "none";
        $nutrition.innerHTML = "";
      } else {
        $nutrition.style.display = "block";
        $nutrition.innerHTML = `
          <table class="info_table">
            <thead>
              <tr>
                <th>구분</th>
                <th>HOT</th>
                <th>ICE</th>
              </tr>
            </thead>
            <tbody>
              ${$rows
                .map(
                  (r) => `
                    <tr>
                      <td>${r.label || ""}</td>
                      <td>${r.hot ?? "-"}</td>
                      <td>${r.ice ?? "-"}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        `;
      }
    }

    $infoCard.classList.add("on");
    $infoCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // 메뉴 클릭, 상세 오픈
  document.addEventListener("click", (e) => {
    const $menuItem = e.target.closest(".menu_item");
    if (!$menuItem) return;

    const $link = e.target.closest(".menu_item a");
    if ($link) e.preventDefault();

    const $id = $menuItem.dataset.id;
    if (!$id) return;

    const $data = $memuData.find((m) => m.id === $id);
    if ($data) renderInfo($data);
  });

  /* .main_tab */
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
            const $diff = (getStatus(b) === "best") - (getStatus(a) === "best");
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

    // 리스트 렌더, 페이지 렌더
    function render() {
      const $perPage = 20;

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
    // 페이지 버튼, 화살표
    const $pager = $section.querySelector(".pagenation");
    const $numWrap = $pager ? $pager.querySelector(".num_page") : null;
    const $btnFirst = $pager ? $pager.querySelector(".left button:nth-child(1)") : null;
    const $btnPrev = $pager ? $pager.querySelector(".left button:nth-child(2)") : null;
    const $btnNext = $pager ? $pager.querySelector(".right button:nth-child(1)") : null;
    const $btnLast = $pager ? $pager.querySelector(".right button:nth-child(2)") : null;

    // 페이지 렌더
    function renderPaging($totalPages) {
      if (!$pager || !$numWrap) return;

      $numWrap.innerHTML = "";
      for (let $i = 1; $i <= $totalPages; $i++) {
        const $b = document.createElement("button");
        $b.type = "button";
        $b.textContent = String($i);
        if ($i === $current) $b.classList.add("on");

        $b.addEventListener("click", () => {
          if ($i === $current) return;
          $current = $i;
          render();
        });

        $numWrap.appendChild($b);
      }

      if ($btnFirst) $btnFirst.disabled = $totalPages <= 5 || $current === 1;
      if ($btnLast) $btnLast.disabled = $totalPages <= 5 || $current === $totalPages;
      if ($btnPrev) $btnPrev.disabled = $current === 1;
      if ($btnNext) $btnNext.disabled = $current === $totalPages;
    }

    // 페이지 클릭 이벤트
    function bindPaging() {
      if (!$pager) return;

      if ($btnFirst) {
        $btnFirst.addEventListener("click", () => {
          $current = 1;
          render();
        });
      }

      if ($btnPrev) {
        $btnPrev.addEventListener("click", () => {
          if ($current > 1) $current -= 1;
          render();
        });
      }

      if ($btnNext) {
        $btnNext.addEventListener("click", () => {
          $current += 1;
          render();
        });
      }

      if ($btnLast) {
        $btnLast.addEventListener("click", () => {
          const $perPage = 20;
          const $totalPages = Math.max(
            1,
            Math.ceil(applySort(getFilteredItems()).length / $perPage)
          );
          $current = $totalPages;
          render();
        });
      }
    }

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