document.addEventListener("DOMContentLoaded", () => {
  const $aosMobile = window.innerWidth <= 750;

  if (!$aosMobile) {
    AOS.init({
      disable: false,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99
    });
    return;
  }

  const $items = Array.from(document.querySelectorAll('[data-aos]'));
  const $scrollEl = document.scrollingElement || document.documentElement;

  let $goingDown = true;
  let $lastTop = $scrollEl.scrollTop;

  function updateDirection() {
    const $top = $scrollEl.scrollTop;
    $goingDown = $top > $lastTop;
    $lastTop = $top;
  }

  window.addEventListener('scroll', updateDirection, { passive: true });

  $items.forEach(function (el) {
    el.classList.add('aos-init');
    el.classList.remove('aos-animate');
  });

  function isInView(el) {
    const $r = el.getBoundingClientRect();
    const $vh = window.innerHeight || document.documentElement.clientHeight;
    return $r.top < $vh * 0.9 && $r.bottom > $vh * 0.1;
  }

  const $observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

      const $el = entry.target;

      if (!entry.isIntersecting) {
        $el.classList.remove('aos-animate');
        return;
      }

      if ($goingDown) {
        $el.classList.add('aos-animate');
        return;
      }

      const $prevTransition = $el.style.transition;
      $el.style.transition = 'none';
      $el.classList.add('aos-animate');
      void $el.offsetHeight;
      $el.style.transition = $prevTransition;

    });

  }, { threshold: 0.15 });

  $items.forEach(function (el) {
    $observer.observe(el);
  });

  updateDirection();

  requestAnimationFrame(function () {
    $items.forEach(function (el) {
      if (isInView(el)) {
        el.classList.add('aos-animate');
      }
    });
  });


  /* play 아이콘 클릭 */
  function syncToggleIcon($icon, $playing) {
    if (!$icon) return;
    if ($playing) {
      $icon.classList.remove("bx-play");
      $icon.classList.add("bx-parallel");
    } else {
      $icon.classList.remove("bx-parallel");
      $icon.classList.add("bx-play");
    }
  }

  /* main_visual */
  const $slidesData = [
    { $h2: "HOLLYS<br>시그니처 음료", $p: "가장 많이 선택받은 할리스 대표 3종" },
    { $h2: "기다림 없이<br>주문부터 적립까지", $p: "스마트오더로 간편하게 매장 이용" },
    { $h2: "DUBAI<br>메뉴 2종 출시", $p: "두바이 스타일의 한정 메뉴 공개" },
    { $h2: "HOLLYS<br>서비스 모아보기", $p: "할리스콘, 할리스카드, 스마트스토어까지<br>할리스의 다양한 서비스" },
  ];

  const $mainVisual = document.querySelector(".main_visual");
  if (!$mainVisual) return;

  const $num = $mainVisual.querySelector(".main_visual .txt_area .slide_control .control_con .num");
  const $totalEl = $mainVisual.querySelector(".main_visual .txt_area .slide_control .control_con .total");
  const $h2 = $mainVisual.querySelector(".main_visual .txt_area .title h2");
  const $p = $mainVisual.querySelector(".main_visual .txt_area .title p");
  const $bar = $mainVisual.querySelector(".main_visual .txt_area .control_con .control_bar p");
  const $txtBox = $mainVisual.querySelector(".main_visual .txt_area .title");

  if (!$num || !$totalEl || !$h2 || !$p || !$bar || !$txtBox) {
    console.error("메인 비주얼 요소를 못 찾았어", { $num, $totalEl, $h2, $p, $bar, $txtBox });
    return;
  }

  const pad2 = (n) => String(n).padStart(2, "0");
  const total = $slidesData.length;
  $totalEl.textContent = pad2(total);

  function animateTextSwap() {
    $txtBox.classList.remove("change");
    void $txtBox.offsetWidth;
    $txtBox.classList.add("change");
  }

  function setTextByIndex(i) {
    const d = $slidesData[i];
    if (!d) return;
    $h2.innerHTML = d.$h2;
    $p.innerHTML = d.$p;
    $num.textContent = pad2(i + 1);
    animateTextSwap();
  }

  function setProgress(i) {
    const percent = ((i + 1) / total) * 100;
    $bar.style.width = `${percent}%`;
  }

  const $mainSlide = new Swiper(".main_visual .visual_swiper", {
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: false },
    navigation: {
      nextEl: ".main_visual .txt_area .slide_control .btn_box .right",
      prevEl: ".main_visual .txt_area .slide_control .btn_box .left",
    },
    on: {
      init(swiper) {
        const i = swiper.realIndex;
        setTextByIndex(i);
        setProgress(i);
      },
      slideChange(swiper) {
        const i = swiper.realIndex;
        setTextByIndex(i);
        setProgress(i);
      },
    },
  });

  /* bestmemu */
  const $bestmemu = document.querySelector(".bestmemu");
  if (!$bestmemu) return;

  const $tabWrap = $bestmemu.querySelector(".tit .tab");
  const $tabDrink = $tabWrap?.querySelectorAll("p")?.[0] || null;
  const $tabFood = $tabWrap?.querySelectorAll("p")?.[1] || null;

  const $drinkEl = $bestmemu.querySelector(".swiper.drink");
  const $foodEl = $bestmemu.querySelector(".swiper.food");

  const $prevBtn = $bestmemu.querySelector(".btn_con .btn_prev");
  const $nextBtn = $bestmemu.querySelector(".btn_con .btn_next");
  const $toggleBtn = $bestmemu.querySelector(".btn_con .btn_toggle");
  const $toggleIcon = $toggleBtn?.querySelector("i") || null;

  if (!$tabDrink || !$tabFood || !$drinkEl || !$foodEl || !$prevBtn || !$nextBtn || !$toggleBtn) {
    console.error("bestmemu 요소를 못 찾았어", {
      $tabDrink, $tabFood, $drinkEl, $foodEl, $prevBtn, $nextBtn, $toggleBtn
    });
    return;
  }

  if (typeof Swiper === "undefined") {
    console.error("Swiper 로드 안됨");
    return;
  }

  $foodEl.style.display = "none";

  const $drinkSwiper = new Swiper($drinkEl, {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: { delay: 4000, disableOnInteraction: false },
  });

  const $foodSwiper = new Swiper($foodEl, {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: { delay: 4000, disableOnInteraction: false },
  });

  let $activeSwiper = $drinkSwiper;
  let $isPlaying = true;

  function setActiveTab($type) {
    const $isDrink = $type === "drink";

    $tabDrink.classList.toggle("on", $isDrink);
    $tabFood.classList.toggle("on", !$isDrink);

    $drinkEl.style.display = $isDrink ? "" : "none";
    $foodEl.style.display = $isDrink ? "none" : "";

    $activeSwiper = $isDrink ? $drinkSwiper : $foodSwiper;

    $activeSwiper.update();

    if ($isPlaying) {
      $activeSwiper.autoplay.start();
      ($isDrink ? $foodSwiper : $drinkSwiper).autoplay.stop();
    } else {
      $drinkSwiper.autoplay.stop();
      $foodSwiper.autoplay.stop();
    }

    syncToggleIcon($toggleIcon, $isPlaying);
  }

  // 초기
  setActiveTab("drink");
  syncToggleIcon($toggleIcon, $isPlaying);

  // 탭 이벤트
  $tabDrink.addEventListener("click", () => setActiveTab("drink"));
  $tabFood.addEventListener("click", () => setActiveTab("food"));

  // 버튼 이벤트
  $prevBtn.addEventListener("click", () => {
    if ($activeSwiper.isBeginning) $activeSwiper.slideTo($activeSwiper.slides.length - 1);
    else $activeSwiper.slidePrev();
  });

  $nextBtn.addEventListener("click", () => {
    if ($activeSwiper.isEnd) $activeSwiper.slideTo(0);
    else $activeSwiper.slideNext();
  });

  $toggleBtn.addEventListener("click", () => {
    $isPlaying = !$isPlaying;
    if ($isPlaying) $activeSwiper.autoplay.start();
    else $activeSwiper.autoplay.stop();
    syncToggleIcon($toggleIcon, $isPlaying);
  });

  /* service */
  const $cards = document.querySelectorAll(".service_card ul > li");

  function closeAll() {
    $cards.forEach(($li) => $li.classList.remove("on"));
  }

  function openCard($targetLi) {
    closeAll();
    $targetLi.classList.add("on");
  }

  const $init = document.querySelector(".service_card ul > li.on") || $cards[0];
  if ($init) openCard($init);

  $cards.forEach(($li) => {
    $li.addEventListener("click", (e) => {
      if (e.target.closest(".more_btn")) return;
      openCard($li);
    });
  });

  /* event */
  const $event = document.querySelector(".event");
  if (!$event) return;

  const $eventSwiperEl = $event.querySelector(".event_con");
  const $eventPrev = $event.querySelector(".btn_prev");
  const $eventNext = $event.querySelector(".btn_next");
  const $eventToggle = $event.querySelector(".btn_toggle");
  const $eventToggleIcon = $eventToggle?.querySelector("i") || null;

  if (!$eventSwiperEl || typeof Swiper === "undefined") return;

  let $eventIsPlaying = true;
  let $eventSwiper = null;
  const BREAKPOINT = 500;
  const isMobile = () => window.innerWidth <= BREAKPOINT;

  function initEventSwiper() {
    if ($eventSwiper) return;

    $eventSwiper = new Swiper($eventSwiperEl, {
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: false,
      speed: 700,

      centeredSlides: false,
      centerInsufficientSlides: false,

      autoplay: { delay: 3000, disableOnInteraction: false },
      navigation: { prevEl: $eventPrev, nextEl: $eventNext },

      on: {
        init(swiper) {
          swiper.slideTo(0, 0);
        },
        resize(swiper) {
          swiper.slideTo(0, 0);
        }
      }
    });

    syncToggleIcon($eventToggleIcon, $eventIsPlaying);
    if ($eventIsPlaying) $eventSwiper.autoplay.start();
    else $eventSwiper.autoplay.stop();
  }

  function destroyEventSwiper() {
    if (!$eventSwiper) return;

    $eventSwiper.autoplay?.stop();

    $eventSwiper.destroy(true, true);
    $eventSwiper = null;

    syncToggleIcon($eventToggleIcon, false);
  }

  function handleEventSwiperByWidth() {
    if (isMobile()) {
      destroyEventSwiper();
    } else {
      initEventSwiper();
    }
  }

  handleEventSwiperByWidth();

  let $eventResizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout($eventResizeTimer);
    $eventResizeTimer = setTimeout(handleEventSwiperByWidth, 150);
  });

  $eventToggle?.addEventListener("click", () => {
    if (!$eventSwiper) return;

    $eventIsPlaying = !$eventIsPlaying;

    if ($eventIsPlaying) $eventSwiper.autoplay.start();
    else $eventSwiper.autoplay.stop();

    syncToggleIcon($eventToggleIcon, $eventIsPlaying);
  });

});
