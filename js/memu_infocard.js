document.addEventListener("DOMContentLoaded", () => {

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

});