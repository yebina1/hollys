/* memu_food.js */
/* memu_food 메뉴 데이터와 화면 주입만 담당 */

document.addEventListener("DOMContentLoaded", () => {
  // 푸드 섹션 찾기 (id가 다르면 여기만 바꾸면 됨)
  const $section = document.getElementById("memu_food");
  if (!$section) return;

  const $list = $section.querySelector(".memu_con .menu_list");
  if (!$list) return;

  const $foodMenuData = [
    {
      id: "dubaiChewyChocoBread",
      cat: "bakery",
      status: "new",
      name: "두바이 쫀득 초코식빵",
      eName: "Dubai Style Chewy Chocolate Bread",
      price: 7900,
      img: "img/memu_drink/Dubai_Style_Chewy_Chocolate_Bread_img.png",
    },
    {
      id: "butterCroissant",
      cat: "bakery",
      status: "new",
      name: "몽블랑",
      eName: "Mont Blanc",
      price: 5200,
      img: "img/memu_drink/Butter_Croissant_img.png",
    },
    {
      id: "garlicBagel",
      cat: "bakery",
      status: "new",
      name: "초코 큐브 식빵",
      eName: "Chocolate Cube Bread",
      price: 4500,
      img: "img/memu_drink/Garlic_Bagel_img.png",
    },
    {
      id: "garlicBagel",
      cat: "bakery",
      status: "new",
      name: "올리브 치즈 큐브 식빵",
      eName: "Olive Cheese Cube Bread",
      price: 5300,
      img: "img/memu_drink/Garlic_Bagel_img.png",
    },
  ];

  $list.innerHTML = $foodMenuData
    .map((m) => {
      const $priceText = `${Number(m.price).toLocaleString()}원`;
      const $statusClass = m.status ? ` ${m.status}` : "";
      const $statusAttr = m.status ? m.status : "";

      return `
        <li class="menu_item${$statusClass}"
            data-id="${m.id}"
            data-cat="${m.cat}"
            data-price="${m.price}"
            data-status="${$statusAttr}">
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

  console.log("memu_food.js: menu items rendered =", $foodMenuData.length);
});