document.addEventListener("DOMContentLoaded", () => {
  const $header = document.getElementById("site_header");
  if (!$header) return;

  let $lastScrollY = window.scrollY;
  const $DELTA = 4;

  const $gnb = $header.querySelector(".gnb");

  // 헤더가 숨겨진 상태면 드롭다운 열지 않기
  const canOpenDropdown = () => !$header.classList.contains("on");

  const openDropdown = () => {
    if (!$gnb) return;
    if (!canOpenDropdown()) return;

    // 서브메뉴 보이기
    $gnb.classList.add("is-hover");

    // 헤더 드롭다운 영역(200px) 확장
    $header.classList.add("dropdown-open");

    // 맨 위(0)에서는 hover 동안만 scrolled 켜기
    if (window.scrollY === 0) $header.classList.add("scrolled");
  };

  const closeDropdown = () => {
    if ($gnb) $gnb.classList.remove("is-hover");

    $header.classList.remove("dropdown-open");

    // 맨 위(0)에서는 hover 끝나면 scrolled 끄기
    if (window.scrollY === 0) $header.classList.remove("scrolled");
  };

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;

      // 스크롤하는 순간엔 드롭다운 무조건 닫기
      closeDropdown();

      // scrolled: 스크롤 있을 때는 항상 유지
      if (y > 0) $header.classList.add("scrolled");
      else $header.classList.remove("scrolled");

      if (y === 0) {
        $header.classList.remove("on");
        $lastScrollY = 0;
        return;
      }

      if (y > $lastScrollY + $DELTA) {
        $header.classList.add("on");
      } else if (y < $lastScrollY - $DELTA) {
        $header.classList.remove("on");
      }

      $lastScrollY = y;
    },
    { passive: true }
  );

  // hover는 gnb에 거는 게 가장 안정적
  $gnb?.addEventListener("mouseenter", openDropdown);
  $gnb?.addEventListener("mouseleave", closeDropdown);



  // ham 클릭시 모바일 nav(m_menu) 
  const $menu = document.getElementById("m_menu");
  const $ham = document.querySelector("button.ham");
  const $overlay = $menu?.querySelector(".m_menu__overlay") || null;
  const $close = $menu?.querySelector(".m_menu__close") || null;
  const $items = $menu?.querySelectorAll(".m_gnb > li") || [];

  if (!$menu || !$ham) return;

  function openMenu() {
    $menu.classList.add("on");
    document.body.classList.add("open");
    $menu.setAttribute("aria-hidden", "false");
    $ham.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    $menu.classList.remove("on");
    document.body.classList.remove("open");
    $menu.setAttribute("aria-hidden", "true");
    $ham.setAttribute("aria-expanded", "false");
  }

  $ham.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu();
  });

  $overlay?.addEventListener("click", closeMenu);
  $close?.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  $items.forEach(($li) => {
    const $btn = $li.querySelector(".m_link");
    const $sub = $li.querySelector(".m_sub");
    if (!$btn || !$sub) return;

    $btn.addEventListener("click", () => {
      const $isOpen = $li.classList.contains("on");

      $items.forEach(($other) => $other.classList.remove("on"));

      if (!$isOpen) $li.classList.add("on");
    });
  });

  $menu.querySelectorAll("a").forEach(($a) => {
    $a.addEventListener("click", () => {
      closeMenu();
    });
  });

  // header language 클릭 상황
  const $langContainers = document.querySelectorAll(".lang_container");

  $langContainers.forEach(($container) => {
    const $btn = $container.querySelector(".lang_btn");
    if (!$btn) return;

    $btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const $isActive = $container.classList.contains("on");

      $langContainers.forEach(($other) => $other.classList.remove("on"));

      if (!$isActive) $container.classList.add("on");
    });
  });

  document.addEventListener("click", () => {
    $langContainers.forEach(($container) => $container.classList.remove("on"));
  });

  // m_lang_btn (모바일 nav language 클릭 상황)
  const $m_langBtn = document.querySelector(".m_lang_btn");
  const $m_langContainer = document.querySelector(".m_lang_container");

  if ($m_langBtn && $m_langContainer) {
    $m_langBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isActive = $m_langContainer.classList.toggle("on");

      if (isActive) {
        $m_langBtn.style.borderBottomLeftRadius = "0";
        $m_langBtn.style.borderBottomRightRadius = "0";
      } else {
        $m_langBtn.style.borderBottomLeftRadius = "8px";
        $m_langBtn.style.borderBottomRightRadius = "8px";
      }
    });
  }
});
