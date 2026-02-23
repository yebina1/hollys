document.addEventListener("DOMContentLoaded", () => {
  // 상세 데이터
  const memuData = [
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

  // 상세 모달 렌더
  function renderInfo(data) {
    const $infoCard = document.querySelector(".info_card#infocard");
    if (!$infoCard) return;

    // 기본 텍스트
    $infoCard.querySelector(".tit h4").textContent = data.name || "";
    $infoCard.querySelector(".tit p").textContent = data.eName || "";
    $infoCard.querySelector(".memu_info").textContent = data.info || "";

    // 알레르기
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

    // 사이즈
    const $sizes = $infoCard.querySelector(".sizes");
    if ($sizes) {
      const sizes = Array.isArray(data.sizes) ? data.sizes : [];

      if (sizes.length === 0) {
        $sizes.style.display = "none";
        $sizes.innerHTML = "";
      } else {
        $sizes.style.display = "block";
        $sizes.innerHTML = sizes
          .map((s) => {
            const priceText = `₩${Number(s.price || 0).toLocaleString("ko-KR")}`;
            const serve = Array.isArray(s.serve) ? s.serve : [];

            let chips = "";
            if (serve.includes("ice-only")) {
              chips = `<span class="chip only">ICE ONLY</span>`;
            } else {
              chips = ["hot", "ice"]
                .filter((t) => serve.includes(t))
                .map((t) => `<span class="chip">${t.toUpperCase()}</span>`)
                .join("");
            }

            return `
              <div class="size_row">
                <div class="size_name">${s.size || ""}</div>
                <div class="size_price">${priceText}</div>
                <div class="size_serve">${chips}</div>
              </div>
            `;
          })
          .join("");
      }
    }

    // 영양정보
    const $nutrition = $infoCard.querySelector(".nutrition");
    if ($nutrition) {
      const rows = data.nutrition?.rows || [];

      if (!rows.length) {
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
              ${rows
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

    // 오픈
    $infoCard.classList.add("on");

    // 모달이 main 아래에 있어서 안 보일 수 있으니 자동 스크롤(확인용)
    $infoCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // 메뉴 클릭시 상세정보
  document.addEventListener("click", (e) => {
    const $menuItem = e.target.closest(".menu_item");
    if (!$menuItem) return;

    // a 기본 동작(해시 이동) 방지
    const $link = e.target.closest(".menu_item a");
    if ($link) e.preventDefault();

    const id = $menuItem.dataset.id;
    if (!id) return; // data-id 없는 메뉴는 아직 데이터 매핑 안 된 상태

    const data = memuData.find((m) => m.id === id);
    if (data) renderInfo(data);
  });

  // main_tab 전환
  const $tabBtns = document.querySelectorAll(".tab_btn");
  const $mainSections = [
    document.getElementById("memu_drink"),
    document.getElementById("memu_food"),
    document.getElementById("memu_md"),
  ];

  function scrollToMainTab() {
    const $target = document.querySelector(".main_tab");
    if (!$target) return;
    window.scrollTo({ top: $target.offsetTop, behavior: "smooth" });
  }

  function setMainActive(idx) {
    $tabBtns.forEach((b) => b.classList.remove("on"));
    $mainSections.forEach((sec) => sec && sec.classList.remove("menu_active"));

    if ($tabBtns[idx]) $tabBtns[idx].classList.add("on");
    if ($mainSections[idx]) $mainSections[idx].classList.add("menu_active");

    const $activeSection = $mainSections[idx];
    if ($activeSection && typeof $activeSection._resetMenu === "function") {
      $activeSection._resetMenu();
    }
  }

  $tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      setMainActive(index);
      scrollToMainTab();
    });
  });

  // 섹션별 기능 초기화 (필터/정렬/페이지네이션)
  document.querySelectorAll("section[id^='memu_']").forEach(($section) => {
    const $subTab = $section.querySelector(".sub_tab");
    const $subBtns = $subTab ? $subTab.querySelectorAll("button") : [];

    const $sorting = $section.querySelector(".sorting");
    const $sortingBtns = $sorting ? $sorting.querySelectorAll("button") : [];

    const $countEl = $section.querySelector(".filter .result em");
    const $pathLastEl = $section.querySelector(".filter .path p:last-child");

    const $list = $section.querySelector(".memu_con .menu_list");
    const $pager = $section.querySelector(".pagenation");
    if (!$list || !$pager) return;

    const $itemsAll = Array.from($list.querySelectorAll(".menu_item"));
    $itemsAll.forEach((it, i) => {
      it.dataset.baseIndex = String(i);
    });

    const $numWrap = $pager.querySelector(".num_page");
    const $btnFirst = $pager.querySelector(".left button:nth-child(1)");
    const $btnPrev = $pager.querySelector(".left button:nth-child(2)");
    const $btnNext = $pager.querySelector(".right button:nth-child(1)");
    const $btnLast = $pager.querySelector(".right button:nth-child(2)");

    let $activeCat = "all";
    let $sortType = "new";
    let $current = 1;

    function scrollToSubTab() {
      const $target = document.querySelector(".top .main_tab");
      if (!$target) return;

      const $top = $target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: $top - 100, behavior: "smooth" });
    }

    function setCount(n) {
      if ($countEl) $countEl.textContent = String(n);
    }

    function setPathLabel(text) {
      if ($pathLastEl) $pathLastEl.textContent = String(text || "").trim();
    }

    function getFiltered() {
      if ($activeCat === "all") return [...$itemsAll];
      return $itemsAll.filter(
        (it) => String(it.dataset.cat || "").toLowerCase() === $activeCat
      );
    }

    function getPrice(it) {
      const $v = String(it.dataset.price || "").replace(/[^\d]/g, "");
      return $v ? Number($v) : 0;
    }

    function getStatus(it) {
      return String(it.dataset.status || "").toLowerCase();
    }

    function getBaseIndex(it) {
      const $v = String(it.dataset.baseIndex || "").replace(/[^\d]/g, "");
      return $v ? Number($v) : 0;
    }

    function applySort(items) {
      const $itemsCopy = [...items];

      switch ($sortType) {
        case "new":
          return $itemsCopy.sort((a, b) => {
            const $diff = (getStatus(b) === "new") - (getStatus(a) === "new");
            if ($diff !== 0) return $diff;
            return getBaseIndex(a) - getBaseIndex(b);
          });

        case "best":
          return $itemsCopy.sort((a, b) => {
            const $diff = (getStatus(b) === "best") - (getStatus(a) === "best");
            if ($diff !== 0) return $diff;
            return getBaseIndex(a) - getBaseIndex(b);
          });

        case "row_price":
          return $itemsCopy.sort((a, b) => getPrice(a) - getPrice(b));

        case "high_price":
          return $itemsCopy.sort((a, b) => getPrice(b) - getPrice(a));

        default:
          return $itemsCopy;
      }
    }

    function resetSectionUi() {
      // sub_tab: 전체
      if ($subTab) {
        const $allBtn = $subTab.querySelector("button.all") || $subBtns[0];
        if ($allBtn) {
          $subBtns.forEach((b) => b.classList.remove("on"));
          $allBtn.classList.add("on");
          $activeCat = "all";
          setPathLabel($allBtn.textContent);
        }
      } else {
        $activeCat = "all";
      }

      // sorting: 신메뉴순
      if ($sorting) {
        const $newBtn = $sorting.querySelector("button.new") || $sortingBtns[0];
        if ($newBtn) {
          $sortingBtns.forEach((b) => b.classList.remove("on"));
          $newBtn.classList.add("on");
          $sortType = "new";
        }
      } else {
        $sortType = "new";
      }

      $current = 1;
      render();
    }

    // sub_tab 클릭
    if ($subTab) {
      $subTab.addEventListener("click", (e) => {
        const $btn = e.target.closest("button");
        if (!$btn) return;

        $subBtns.forEach((b) => b.classList.remove("on"));
        $btn.classList.add("on");
        setPathLabel($btn.textContent);

        $activeCat = String($btn.classList[0] || "all").toLowerCase();
        $current = 1;

        render();
        scrollToSubTab();
      });

      const $initSub = $subTab.querySelector("button.all") || $subBtns[0];
      if ($initSub) {
        $subBtns.forEach((b) => b.classList.remove("on"));
        $initSub.classList.add("on");
        $activeCat = String($initSub.classList[0] || "all").toLowerCase();
        setPathLabel($initSub.textContent);
      }
    }

    // sorting 클릭
    if ($sorting) {
      $sorting.addEventListener("click", (e) => {
        e.preventDefault();

        const $btn = e.target.closest("button");
        if (!$btn) return;

        $sortingBtns.forEach((b) => b.classList.remove("on"));
        $btn.classList.add("on");

        $sortType = String($btn.classList[0] || "new").toLowerCase();
        $current = 1;

        render();
        requestAnimationFrame(() => scrollToSubTab());
      });

      const $initSort = $sorting.querySelector("button.new");
      if ($initSort) {
        $sortingBtns.forEach((b) => b.classList.remove("on"));
        $initSort.classList.add("on");
        $sortType = "new";
      }
    }

    // 페이지네이션
    function setChevronsDisabled(totalPages) {
      const $disableChevrons = totalPages <= 5;

      if ($btnFirst) $btnFirst.disabled = $disableChevrons || $current === 1;
      if ($btnLast)
        $btnLast.disabled = $disableChevrons || $current === totalPages;

      if ($btnPrev) $btnPrev.disabled = $current === 1;
      if ($btnNext) $btnNext.disabled = $current === totalPages;
    }

    function renderNums(totalPages) {
      if (!$numWrap) return;

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
          scrollToSubTab();
        });

        $numWrap.appendChild($b);
      }
    }

    function render() {
      const $perPage = 20;

      const $filtered = getFiltered();
      const $sorted = applySort($filtered);

      const $totalItems = $sorted.length;
      const $totalPages = Math.max(1, Math.ceil($totalItems / $perPage));
      if ($current > $totalPages) $current = $totalPages;

      const $start = ($current - 1) * $perPage;
      const $end = $start + $perPage;

      $list.innerHTML = "";
      $sorted.slice($start, $end).forEach((it) => {
        it.style.display = "";
        $list.appendChild(it);
      });

      setCount($totalItems);
      renderNums($totalPages);
      setChevronsDisabled($totalPages);
    }

    if ($btnFirst)
      $btnFirst.addEventListener("click", () => {
        $current = 1;
        render();
        scrollToSubTab();
      });

    if ($btnPrev)
      $btnPrev.addEventListener("click", () => {
        if ($current > 1) $current -= 1;
        render();
        scrollToSubTab();
      });

    if ($btnNext)
      $btnNext.addEventListener("click", () => {
        $current += 1;
        render();
        scrollToSubTab();
      });

    if ($btnLast)
      $btnLast.addEventListener("click", () => {
        const $perPage = 20;
        const $totalPages = Math.max(
          1,
          Math.ceil(applySort(getFiltered()).length / $perPage)
        );
        $current = $totalPages;
        render();
        scrollToSubTab();
      });

    $section._resetMenu = resetSectionUi;
    resetSectionUi();
  });

  /* 최초 탭 활성화 */
  if ($tabBtns.length && $mainSections.length) setMainActive(0);
});