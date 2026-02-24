document.addEventListener("DOMContentLoaded", () => {

  const $memuData = [
    {
      id: "americano",
      name: "아메리카노",
      eName: "Caffe Americano",
      img: "./img/memu_infocard/info_Caffe_Americano_img.png",
      info: "진한 에스프레소의 맛과 향을 부드럽게 즐길 수 있는 아메리칸 스타일의 커피",
      nutrition: {
        capacity: "Regular (354ml)",
        rows: [
          { label: "칼로리 (kcal)", hot: "12kcal", iced: "12kcal" },
          { label: "단백질 (g)", hot: "1g(2%)", iced: "1g (2%)" },
          { label: "포화지방 (g)", hot: "0.1g (0%)", iced: "0.1g (0%)" },
          { label: "카페인 (mg)", hot: "114mg", iced: "114mg" },
          { label: "나트륨 (mg)", hot: "0mg (0%)", iced: "0mg (0%)" },
          { label: "당류 (g)", hot: "0g (0%)", iced: "0g (0%)" },
        ],
      },
      allergy: null,
    },
  ];

  function renderInfo(data) {
    const $infoCard = document.querySelector(".info_card#infocard");
    if (!$infoCard) return;

    $infoCard.querySelector(".tit h4").textContent = data.name || "";
    $infoCard.querySelector(".tit p").textContent = data.eName || "";
    $infoCard.querySelector(".memu_info").textContent = data.info || "";

    const $img = $infoCard.querySelector(".info_left img");
    if ($img) {
      $img.src = data.img || "";
      $img.alt = data.name || "";
    }

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

    const $tbody = $infoCard.querySelector(".nutrition .info_table tbody");
    if ($tbody) {
      const $rows = data.nutrition?.rows || [];

      if (!$rows.length) {
        $tbody.style.display = "none";
        $tbody.innerHTML = "";
      } else {
        $tbody.style.display = "";
        $tbody.innerHTML = $rows
          .map(
            (r) => `
              <tr>
                <td>${r.label || ""}</td>
                <td>${r.hot ?? "-"}</td>
                <td>${r.ice ?? "-"}</td>
              </tr>
            `
          )
          .join("");
      }
    }

    const $capacity = $infoCard.querySelector(".nutrition .capacity");
    if ($capacity) {
      const cap = data.nutrition?.capacity || "";
      $capacity.textContent = cap;

      const $p = $capacity.closest("p");
      if ($p) $p.style.display = cap ? "" : "none";
    }

    $infoCard.classList.add("on");
  }

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

  const $close = document.querySelector(".info_card .close");
  const $card = document.querySelector(".info_card");

  $close.addEventListener("click", () => {
    $card.classList.add("out");

    setTimeout(() => {
      $card.classList.remove("on");
      $card.classList.remove("out");
    }, 50);
  });
});