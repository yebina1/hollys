/* memu_food.js */
/* memu_food 메뉴 데이터와 화면 주입만 담당 */

document.addEventListener("DOMContentLoaded", () => {
  // 푸드 섹션의 리스트 ul을 찾음
  const $section = document.getElementById("memu_food");
  if (!$section) return;

  const $list = $section.querySelector(".memu_con .menu_list");
  if (!$list) return;

  // 푸드 메뉴 데이터 배열
  const $foodMenuData = [
    {
      id: "dubaiChewyChocoBread",
      cat: "bakery",
      price: 7900,
      status: "new",
      name: "두바이 쫀득 초코식빵",
      eName: "Dubai Style Chewy Chocolate Bread",
      img: "img/memu_drink/Dubai_Style_Chewy_Chocolate_Bread_img.png",
    },
    {
      id: "croissantButter",
      cat: "bakery",
      price: 4200,
      status: "best",
      name: "버터 크루아상",
      eName: "Butter Croissant",
      img: "img/memu_drink/Butter_Croissant_img.png",
    },
    {
      id: "garlicBagel",
      cat: "bakery",
      price: 5300,
      status: "",
      name: "갈릭 베이글",
      eName: "Garlic Bagel",
      img: "img/memu_drink/Garlic_Bagel_img.png",
    },
  ];

  // 푸드 메뉴 데이터를 li HTML로 만들어 ul에 주입
  $list.innerHTML = $foodMenuData
    .map((m) => {
      const $priceText = `${Number(m.price).toLocaleString()}원`;
      const $statusClass = m.status ? ` ${m.status}` : "";

      return `
        <li class="menu_item${$statusClass}"
            data-id="${m.id}"
            data-cat="${m.cat}"
            data-price="${m.price}"
            data-status="${m.status || ""}">
          <a href="#infocard">
            <div class="img_box">
              <img src="${m.img}" alt="${m.name}">
            </div>
            <div class="txt_box">
              <div class="name_con">
                <strong class="name">${m.name}</strong>
                <p class="e_name">${m.eName || ""}</p>
              </div>
              <p class="price"><span>${$priceText}</span></p>
            </div>
          </a>
        </li>
      `;
    })
    .join("");
});