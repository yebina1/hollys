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
          { label: "칼로리 (kcal)", hot: "12kcal", icedd: "12kcal" },
          { label: "당류 (g)", hot: "0g", icedd: "0g" },
          { label: "단백질 (g)", hot: "1g(2%)", icedd: "1g (2%)" },
          { label: "포화지방 (g)", hot: "0.1g (0%)", icedd: "0.1g (0%)" },
          { label: "나트륨 (mg)", hot: "0g (0%)", icedd: "0g (0%)" },
          { label: "카페인 (mg)", hot: "114mg", icedd: "114mg" },
        ],
      },
      allergy: null,
    },
  {
    id: "dubaiStyleParfait",
    name: "두바이 st. 빠작 초코 파르페",
    eName: "Dubai Style Chocolate Parfait",
    img: "./img/memu_infocard/info_Dubai_Style_Chocolate_Parfait_img.png",
    info: "빠작빠작 씹히는 카다이프를 초코와 버무려 올린 달콤바삭한 초코 파르페",
    nutrition: {
      capacity: "Grande (472ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "596 kcal" },
        { label: "당류 (g)", hot: "-", iced: "73g (73%)" },
        { label: "단백질 (g)", hot: "-", iced: "10g (18%)" },
        { label: "포화지방 (g)", hot: "-", iced: "11.1g (74%)" },
        { label: "나트륨 (mg)", hot: "-", iced: "250g (13%)" },
        { label: "카페인 (mg)", hot: "-", iced: "9mg" },
      ],
    },
    allergy: null,
  },
  {
    id: "acaiBowlSmoothie",
    name: "설향 딸기 아사이볼 스무디",
    eName: "Strawberry Acai Bowl Smoothie",
    img: "./img/memu_infocard/info_Strawberry_Acai_Bowl_Smoothie_img.png",
    info: "아사이베리, 블루베리, 사과로 만든 아사이볼에 수제 그래놀라와 설향 딸기 듬뿍!",
    nutrition: {
      capacity: "Regular (354ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "290 kcal" },
        { label: "당류 (g)", hot: "-", iced: "60g (60%)" },
        { label: "단백질 (g)", hot: "-", iced: "2g (4%)" },
        { label: "포화지방 (g)", hot: "-", iced: "0.2g (1%)" },
        { label: "나트륨 (mg)", hot: "-", iced: "62mg (3%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: "호두",
  },
  {
    id: "berryYogurtHollyccino",
    name: "설향 딸기 요거트 할리치노",
    eName: "Strawberry Yogurt Hollyccino",
    img: "./img/memu_infocard/info_Strawberry_Yogurt_Hollyccino_img.png",
    info: "달콤한 설향딸기와 진한 요거트가 어우러진 딸기 요거트 할리치노",
    nutrition: {
      capacity: "Regular (354ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "342kcal" },
        { label: "당류 (g)", hot: "-", iced: "62g (62%)" },
        { label: "단백질 (g)", hot: "-", iced: "6g (11%)" },
        { label: "포화지방 (g)", hot: "-", iced: "3.7g (25%)" },
        // 원문이 105g로 적혀있는데 나트륨 단위가 g는 이상해서 mg로 정리했어.
        // 혹시 원문 그대로 두고 싶으면 "105g (5%)"로 바꿔줘.
        { label: "나트륨 (mg)", hot: "-", iced: "105mg (5%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: "우유, 대두",
  },
  {
    id: "strawberryJuice",
    name: "설향 생딸기 주스",
    eName: "Fresh Strawberry Juice",
    img: "./img/memu_infocard/info_Fresh_Strawberry_Juice_img.png",
    info: "국내산 설향 딸기를 그대로 담아 더욱 신선한 시그니처 생과일 딸기 주스",
    nutrition: {
      capacity: "Grande (472ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "161 kcal" },
        { label: "당류 (g)", hot: "-", iced: "35g (35%)" },
        { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
        { label: "포화지방 (g)", hot: "-", iced: "0g" },
        { label: "나트륨 (mg)", hot: "-", iced: "0g (0%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: null,
  },
  {
    id: "strawberryLatte",
    name: "설향 딸기 라떼",
    eName: "Strawberry Latte",
    img: "./img/memu_infocard/info_Strawberry_Latte_img.png",
    info: "부드러운 우유와 상큼한 딸기의 만남! 국내산 설향 딸기 가득 시즌 한정 딸기 라떼",
    nutrition: {
      capacity: "Grande (472ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "352 kcal" },
        { label: "당류 (g)", hot: "-", iced: "64g (64%)" },
        { label: "단백질 (g)", hot: "-", iced: "6g (11%)" },
        { label: "포화지방 (g)", hot: "-", iced: "4.3g (28%)" },
        { label: "나트륨 (mg)", hot: "-", iced: "20g (1%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: "우유",
  },
  {
    id: "potatoBruleeHollyccino",
    name: "춘식이 군고구마 브륄레 할리치노",
    eName: "Sweet Potato Brulee Hollyccino",
    img: "./img/memu_infocard/info_Sweet_Potato_Brulee_Hollyccino_img.png",
    info: "고구마 요정 춘식이의 달콤한 마법으로 완성한 흑당과 카라멜이 어우러진 군고구마 브륄레 할리치노",
    nutrition: {
      capacity: "Regular (354ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "-", iced: "522 kcal" },
        { label: "당류 (g)", hot: "-", iced: "58g (58%)" },
        { label: "단백질 (g)", hot: "-", iced: "7g (13%)" },
        { label: "포화지방 (g)", hot: "-", iced: "9.8g (65%)" },
        { label: "나트륨 (mg)", hot: "-", iced: "137mg (7%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: "우유, 아황산류",
  },
  {
    id: "peanutCreamLatte",
    name: "춘식이 땅콩 크림라떼",
    eName: "Peanut Cream Latte",
    img: "./img/memu_infocard/info_Peanut_Cream_Latte_img.png",
    info: "고소하고 진한 땅콩 크림에 스페셜티 블렌드 커피가 부드럽게 어우러진 크림라떼",
    nutrition: {
      capacity: "Regular (354ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "420 kcal", iced: "280 kcal" },
        { label: "당류 (g)", hot: "35g (35%)", iced: "20g (20%)" },
        { label: "단백질 (g)", hot: "13g (24%)", iced: "8g (14%)" },
        { label: "포화지방 (g)", hot: "12.5g (83%)", iced: "8.7g (58%)" },
        { label: "나트륨 (mg)", hot: "228mg (11%)", iced: "138mg (7%)" },
        { label: "카페인 (mg)", hot: "153mg", iced: "153mg" },
      ],
    },
    allergy: "우유, 땅콩",
  },
  {
    id: "sweetPotatoLatte",
    name: "춘식이 군고구마 라떼",
    eName: "Sweet Potato Latte",
    img: "./img/memu_infocard/info_Sweet_Potato_Latte_img.png",
    info: "고구마 요정 춘식이의 달콤한 마법으로 완성한 부드러운 크림 군고구마 라떼",
    nutrition: {
      capacity: "Regular (354ml)",
      rows: [
        { label: "칼로리 (kcal)", hot: "421 kcal", iced: "293 kcal" },
        { label: "당류 (g)", hot: "34g (34%)", iced: "23g (23%)" },
        { label: "단백질 (g)", hot: "9g (17%)", iced: "6g (11%)" },
        { label: "포화지방 (g)", hot: "10.9g (72%)", iced: "8.6g (57%)" },
        { label: "나트륨 (mg)", hot: "165mg (8%)", iced: "108mg (5%)" },
        { label: "카페인 (mg)", hot: "-", iced: "-" },
      ],
    },
    allergy: "우유",
  },
  {
  id: "yujaAmericano",
  name: "유자리카노",
  eName: "Yuja Americano",
  img: "./img/memu_infocard/info_Yuja_Americano_img.png",
  info: "상큼한 유자 스무디에 진한 에스프레소의 쌉싸름함이 레이어드된 커피",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "262 kcal" },
      { label: "당류 (g)", hot: "-", iced: "50g (50%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "23mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "76mg" },
    ],
  },
  allergy: null,
},
{
  id: "icedTeaEspressoShot",
  name: "아샷추",
  eName: "Iced Tea with an Espresso Shot",
  img: "./img/memu_infocard/info_Iced_Tea_with_an_Espresso_Shot_img.png",
  info: "복숭아 아이스티에 에스프레소를 더해 달콤쌉싸름하게 즐기는 아샷추",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "205 kcal" },
      { label: "당류 (g)", hot: "-", iced: "44g (44%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0.1g (0%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "4mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "74mg" },
    ],
  },
  allergy: null,
},
{
  id: "monsterAmericano",
  name: "몬스터 아메리카노",
  eName: "Monster Americano",
  img: "./img/memu_infocard/info_Monster_Americano_img.png",
  info: "에너지 충전이 필요할 때! 청량감 가득 몬스터와 아메리카노가 만난 #에너지부스터",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "20 kcal" },
      { label: "당류 (g)", hot: "-", iced: "0g" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "113mg (6%)" },
      { label: "카페인 (mg)", hot: "-", iced: "134mg" },
    ],
  },
  allergy: null,
},
{
  id: "blackAria",
  name: "블랙아리아 아메리카노",
  eName: "Black Aria Americano",
  img: "./img/memu_infocard/info_Black_Aria_Americano_img.png",
  info: "스페셜티 블렌드를 사용하여 과일과 베리향의 고급스러운 커피 풍미가 특징인 아메리카노",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "9kcal", iced: "9kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0.1g (0%)", iced: "0.1g (0%)" },
      { label: "나트륨 (mg)", hot: "0g (0%)", iced: "0g (0%)" },
      { label: "카페인 (mg)", hot: "153mg", iced: "153mg" },
    ],
  },
  allergy: null,
},
{
  id: "blackAriaDeepLatte",
  name: "블랙아리아 딥라떼",
  eName: "Black Aria Deep Latte",
  img: "./img/memu_infocard/info_Black_Aria_Deep_Latte_img.png",
  info: "스페셜티 블렌드를 사용하여 과일과 베리향의 고급스러운 커피 풍미가 특징인 부드러운 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "165kcal", iced: "96kcal" },
      { label: "당류 (g)", hot: "12g (12%)", iced: "7g (7%)" },
      { label: "단백질 (g)", hot: "8g (15%)", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "6g (40%)", iced: "3.4g (23%)" },
      { label: "나트륨 (mg)", hot: "130g (7%)", iced: "73mg (4%)" },
      { label: "카페인 (mg)", hot: "153mg", iced: "153mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "dolceLatte",
  name: "돌체 라떼",
  eName: "Dolce Latte",
  img: "./img/memu_infocard/info_Dolce_Latte_img.png",
  info: "달콤한 연유와 고소한 원두, 크리미한 바디가 어우러진 스페셜 메뉴",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "289kcal", iced: "154kcal" },
      { label: "당류 (g)", hot: "31g (31%)", iced: "16g (16%)" },
      { label: "단백질 (g)", hot: "11g (29%)", iced: "6g (11%)" },
      { label: "포화지방 (g)", hot: "7.6g (51%)", iced: "3.9g (26%)" },
      { label: "나트륨 (mg)", hot: "180g (9%)", iced: "93mg (5%)" },
      { label: "카페인 (mg)", hot: "93mg", iced: "93mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "vanillaDelight",
  name: "바닐라 딜라이트",
  eName: "Vanilla Delight",
  img: "./img/memu_infocard/info_Vanilla_Delight_img.png",
  info: "카페라떼에 바닐라빈으로 만든 바닐라 파우더를 더해 더욱 풍부하고 감미로운 할리스만의 바닐라라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "245kcal", iced: "199kcal" },
      { label: "당류 (g)", hot: "31g (31%)", iced: "25g (25%)" },
      { label: "단백질 (g)", hot: "10g/17%", iced: "6g (11%)" },
      { label: "포화지방 (g)", hot: "5.6g (38%)", iced: "4.9g (33%)" },
      { label: "나트륨 (mg)", hot: "213mg (11%)", iced: "155mg (8%)" },
      { label: "카페인 (mg)", hot: "83mg", iced: "83mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "caramelMacchiato",
  name: "카라멜 마키아또",
  eName: "Caramel Macchiato",
  img: "./img/memu_infocard/info_Caramel_Macchiato_img.png",
  info: "진한 에스프레소에 바닐라 시럽과 카라멜소스가 더해진 카라멜 커피음료의 대표",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "227kcal", iced: "161kcal" },
      { label: "당류 (g)", hot: "23g (23%)", iced: "18g (18%)" },
      { label: "단백질 (g)", hot: "8g (15%)", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "6.1g (41%)", iced: "3.6g (24%)" },
      { label: "나트륨 (mg)", hot: "135mg (7%)", iced: "80g (4%)" },
      { label: "카페인 (mg)", hot: "127mg", iced: "127mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "caffeMocha",
  name: "카페 모카",
  eName: "Caffe Mocha",
  img: "./img/memu_infocard/info_Caffe_Mocha_img.png",
  info: "진한 에스프레소와 우유, 달콤 쌉싸름한 초콜릿이 어우러진 커피",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "301kcal", iced: "237kcal" },
      { label: "당류 (g)", hot: "30g (30%)", iced: "25g (25%)" },
      { label: "단백질 (g)", hot: "9g (16%)", iced: "6g (10%)" },
      { label: "포화지방 (g)", hot: "10.2g (68%)", iced: "7.7g (51%)" },
      { label: "나트륨 (mg)", hot: "166mg (8%)", iced: "112mg (6%)" },
      { label: "카페인 (mg)", hot: "132mg", iced: "132mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "cappuccino",
  name: "카푸치노",
  eName: "Cappuccino",
  img: "./img/memu_infocard/info_Cappuccino_img.png",
  info: "에스프레소에 실키하고 폭신폭신한 우유 거품이 풍부하게 더해진 커피",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "149kcal", iced: "-" },
      { label: "당류 (g)", hot: "10g (10%)", iced: "-" },
      { label: "단백질 (g)", hot: "8g (14%)", iced: "-" },
      { label: "포화지방 (g)", hot: "5.3g (36%)", iced: "-" },
      { label: "나트륨 (mg)", hot: "115mg (6%)", iced: "-" },
      { label: "카페인 (mg)", hot: "127mg", iced: "-" },
    ],
  },
  allergy: "우유",
},
{
  id: "caffeLatte",
  name: "카페 라떼",
  eName: "Caffe Latte",
  img: "./img/memu_infocard/info_Caffe_Latte_img.png",
  info: "진한 에스프레소에 우유를 넣어 풍부한 커피향을 부드럽게 즐길 수 있는 커피",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "167kcal", iced: "96kcal" },
      { label: "당류 (g)", hot: "12g (12%)", iced: "6g (6%)" },
      { label: "단백질 (g)", hot: "8g (15%)", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "6g (40%)", iced: "3.3g (22%)" },
      { label: "나트륨 (mg)", hot: "130g (7%)", iced: "72mg (4%)" },
      { label: "카페인 (mg)", hot: "127mg", iced: "127mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "affogato",
  name: "아포가토",
  eName: "Affogato",
  img: "./img/memu_infocard/info_Affogato_img.png",
  info: "바닐라 아이스크림과 리스트레또 더블샷이 어우러져 부드럽고 진한 맛의 아포가토",
  nutrition: {
    capacity: "150ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "207kcal" },
      { label: "당류 (g)", hot: "-", iced: "15g (15%)" },
      { label: "단백질 (g)", hot: "-", iced: "4g (8%)" },
      { label: "포화지방 (g)", hot: "-", iced: "7.4g (49%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "36mg (2%)" },
      { label: "카페인 (mg)", hot: "-", iced: "93mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "espresso",
  name: "에스프레소 (2샷)",
  eName: "Espresso",
  img: "./img/memu_infocard/info_Espresso_img.png",
  info: "강렬한 첫 맛, 풍부한 바디감, 깔끔한 뒷 맛이 특징인 커피의 심장",
  nutrition: {
    capacity: "50ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "5kcal", iced: "-" },
      { label: "당류 (g)", hot: "0g", iced: "-" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "-" },
      { label: "포화지방 (g)", hot: "0g", iced: "-" },
      { label: "나트륨 (mg)", hot: "0 mg (0%)", iced: "-" },
      { label: "카페인 (mg)", hot: "61mg", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "coldBrewDelight",
  name: "콜드브루 딜라이트",
  eName: "Cold Brew Delight",
  img: "./img/memu_infocard/info_Cold_Brew_Delight_img.png",
  info: "실키한 연유베이스에 콜드브루를 넣어 부담없이 즐기는 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "198kcal" },
      { label: "당류 (g)", hot: "-", iced: "23g (23%)" },
      { label: "단백질 (g)", hot: "-", iced: "7g (13%)" },
      { label: "포화지방 (g)", hot: "-", iced: "4.8g (32%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "106mg (5%)" },
      { label: "카페인 (mg)", hot: "-", iced: "195mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "coldBrewLatte",
  name: "콜드브루 라떼",
  eName: "Cold Brew Latte",
  img: "./img/memu_infocard/info_Cold_Brew_Latte_img.png",
  info: "콜드브루 커피의 풍부한 풍미와 우유의 고소함이 더해진 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "114kcal" },
      { label: "당류 (g)", hot: "-", iced: "8g (8%)" },
      { label: "단백질 (g)", hot: "-", iced: "6g (11%)" },
      { label: "포화지방 (g)", hot: "-", iced: "3.9g (26%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "88mg (4%)" },
      { label: "카페인 (mg)", hot: "-", iced: "195mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "coldBrew",
  name: "콜드브루",
  eName: "Cold Brew",
  img: "./img/memu_infocard/info_Cold_Brew_img.png",
  info: "콜드브루 전용 블렌드를 상온의 물로 오랜시간 추출해 달콤한 산미와 부드러운 바디감이 살아있는 커피",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "12kcal" },
      { label: "당류 (g)", hot: "-", iced: "0g" },
      { label: "단백질 (g)", hot: "-", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "3mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "195mg" },
    ],
  },
  allergy: null,
},
{
  id: "icedTeaDecaf",
  name: "디카페인 콜드브루 아샷추",
  eName: "Iced Tea + Decaf Cold Brew",
  img: "./img/memu_infocard/info_Iced_Tea_Decaf_Cold_Brew_img.png",
  info: "복숭아 아이스티에 디카페인 콜드브루를 더해 달콤쌉싸름하게 즐기는 아샷추",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "206 kcal" },
      { label: "당류 (g)", hot: "-", iced: "44g (44%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "15mg" },
    ],
  },
  allergy: "복숭아, 아황산류",
},
{
  id: "decaf",
  name: "디카페인 콜드브루",
  eName: "Decaf Cold Brew",
  img: "./img/memu_infocard/info_Decaf_Cold_Brew_img.png",
  info: "할리스만의 노하우로 블렌딩한 디카페인 원액을 더해, 깔끔한 후미와 은은한 단맛을 느낄 수 있는 디카페인 콜드브루",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "12kcal", iced: "12kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "1g (1%)", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "6mg (0%)", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "3mg", iced: "3mg" },
    ],
  },
  allergy: null,
},
{
  id: "decafLatte",
  name: "디카페인 콜드브루 라떼",
  eName: "Decaf Cold Brew Latte",
  img: "./img/memu_infocard/info_Decaf_Cold_Brew_Latte_img.png",
  info: "할리스만의 노하우로 블렌딩한 디카페인 원액을 더해, 부드러운 풍미와 균형 잡힌 바디감의 디카페인 콜드브루 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "175kcal", iced: "114kcal" },
      { label: "당류 (g)", hot: "12g (12%)", iced: "8g (8%)" },
      { label: "단백질 (g)", hot: "9g (16%)", iced: "6g (10%)" },
      { label: "포화지방 (g)", hot: "6.3g (42%)", iced: "3.9g (26%)" },
      { label: "나트륨 (mg)", hot: "142mg (7%)", iced: "91mg (5%)" },
      { label: "카페인 (mg)", hot: "3mg", iced: "3mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "decafVanillaDelight",
  name: "디카페인 콜드브루 바닐라 딜라이트",
  eName: "Decaf Cold Brew Vanilla Delight",
  img: "./img/memu_infocard/info_Decaf_Cold_Brew_Vanilla_Delight_img.png",
  info: "디카페인 콜드브루 라떼에 바닐라 파우더를 더해 더욱 풍부하고 감미로운 할리스만의 바닐라 라떼 (*바닐라 파우더 내 카페인 일부 함유)",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "247kcal", iced: "192kcal" },
      { label: "당류 (g)", hot: "31g (31%)", iced: "24g (24%)" },
      { label: "단백질 (g)", hot: "10g (18%)", iced: "5g (10%)" },
      { label: "포화지방 (g)", hot: "5.6g (38%)", iced: "4.8g (32%)" },
      { label: "나트륨 (mg)", hot: "218mg (11%)", iced: "147mg (7%)" },
      { label: "카페인 (mg)", hot: "25mg", iced: "25mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "royalMilkBubble",
  name: "로얄 밀크 버블티",
  eName: "Royal Milk Bubble Tea",
  img: "./img/memu_infocard/info_Royal_Milk_Bubble_Tea_img.png",
  info: "향긋한 홍차의 풍미와 부드러운 우유가 쫀득한 타피오카펄과 만나 고소하게 즐기는 버블티",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "352kcal" },
      { label: "당류 (g)", hot: "-", iced: "30g (30%)" },
      { label: "단백질 (g)", hot: "-", iced: "6g (12%)" },
      { label: "포화지방 (g)", hot: "-", iced: "4.2g (28%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "109mg (5%)" },
      { label: "카페인 (mg)", hot: "-", iced: "51mg" },
    ],
  },
  allergy: null,
},
{
  id: "royalMilkTea",
  name: "로얄 밀크티 라떼",
  eName: "Royal Milk Tea Latte",
  img: "./img/memu_infocard/info_Royal_Milk_Tea_Latte_img.png",
  info: "스리랑카산 딤블라홍차 추출분말로 만들어 향긋한 풍미가 특징인 로얄 밀크티 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "287kcal", iced: "231kcal" },
      { label: "당류 (g)", hot: "29g-%)", iced: "25g (25%)" },
      { label: "단백질 (g)", hot: "9g (16%)", iced: "6g (11%)" },
      { label: "포화지방 (g)", hot: "6.3g (42%)", iced: "4.2g (28%)" },
      { label: "나트륨 (mg)", hot: "140g (7%)", iced: "94mg (5%)" },
      { label: "카페인 (mg)", hot: "51mg", iced: "51mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "blackSugarBubble",
  name: "흑당 버블티",
  eName: "Black Sugar Bubble Tea",
  img: "./img/memu_infocard/info_Black_Sugar_Bubble_Tea_img.png",
  info: "흑당의 진한 풍미에 쫀득한 타피오카펄을 더해 달달하게 즐기는 버블티",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "316kcal" },
      { label: "당류 (g)", hot: "-", iced: "34g (34%)" },
      { label: "단백질 (g)", hot: "-", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "-", iced: "3.7g (25%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "108mg (5%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "우유, 아황산류",
},
{
  id: "matchaLatte",
  name: "제주 말차 라떼",
  eName: "Jeju Matcha Latte",
  img: "./img/memu_infocard/info_Jeju_Matcha_Latte_img.png",
  info: "제주산 말차 파우더로 만들어 깊고 진한 말차 본연의 풍미를 살린 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "347kcal", iced: "251kcal" },
      { label: "당류 (g)", hot: "44g (44%)", iced: "36g (36%)" },
      { label: "단백질 (g)", hot: "10g (19%)", iced: "6g (12%)" },
      { label: "포화지방 (g)", hot: "7.0g (47%)", iced: "3.6g (24%)" },
      { label: "나트륨 (mg)", hot: "152mg (7%)", iced: "79mg (4%)" },
      { label: "카페인 (mg)", hot: "129mg", iced: "129mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "mintChoco",
  name: "민트초코",
  eName: "Mint Chocolate",
  img: "./img/memu_infocard/info_Mint_Chocolate_img.png",
  info: "진한 민트 맛이 특징인 상쾌하면서 부드러운 맛의 민트 초코 라떼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "470kcal", iced: "377kcal" },
      { label: "당류 (g)", hot: "55g (55%)", iced: "48g (48%)" },
      { label: "단백질 (g)", hot: "10g (18%)", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "15.6g (104%)", iced: "12.0g (80%)" },
      { label: "나트륨 (mg)", hot: "279mg (14%)", iced: "202mg (10%)" },
      { label: "카페인 (mg)", hot: "3mg", iced: "3mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "hotIcedChoco",
  name: "핫/아이스 초코",
  eName: "Chocolate HOT/ICED",
  img: "./img/memu_infocard/info_Chocolate_HOT_ICED_img.png",
  info: "진한 초콜렛과 우유가 어우러져 달콤한 초콜릿 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "364kcal", iced: "304kcal" },
      { label: "당류 (g)", hot: "41g (41%)", iced: "36g (36%)" },
      { label: "단백질 (g)", hot: "10g (18%)", iced: "7g (12%)" },
      { label: "포화지방 (g)", hot: "11.5g (77%)", iced: "9.2g (61%)" },
      { label: "나트륨 (mg)", hot: "196mg (10%)", iced: "146mg (7%)" },
      { label: "카페인 (mg)", hot: "8mg", iced: "8mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "whiteChoco",
  name: "화이트초코",
  eName: "White Chocolate",
  img: "./img/memu_infocard/info_White_Chocolate_img.png",
  info: "고소한 우유에 화이트 초콜릿 플레이버가 더해진 달콤한 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "371kcal", iced: "311kcal" },
      { label: "당류 (g)", hot: "42g (42%)", iced: "37g (37%)" },
      { label: "단백질 (g)", hot: "10g (18%)", iced: "7g (12%)" },
      { label: "포화지방 (g)", hot: "12.3g (82%)", iced: "10g (67%)" },
      { label: "나트륨 (mg)", hot: "159g (8%)", iced: "109mg (5%)" },
      { label: "카페인 (mg)", hot: "23mg", iced: "23mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "redCinnamonVin",
  name: "레드 시나몬 뱅쇼",
  eName: "Red Cinnamon Vin Chaud",
  img: "./img/memu_infocard/info_Red_Cinnamon_Vin_Chaud_img.png",
  info: "시나몬과 과일 향이 은은하게 어우러진 깊고 부드러운 와인 풍미의 무알콜 뱅쇼",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "215 kcal", iced: "215 kcal" },
      { label: "당류 (g)", hot: "42g (42%)", iced: "42g (42%)" },
      { label: "단백질 (g)", hot: "1g (1%)", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "0.1g (0%)", iced: "0.1g (0%)" },
      { label: "나트륨 (mg)", hot: "73mg (4%)", iced: "73mg (4%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "icedTea",
  name: "아이스티",
  eName: "Iced Tea",
  img: "./img/memu_infocard/info_Iced_Tea_img.png",
  info: "깔끔하고 시원한 복숭아 아이스티",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "200 kcal" },
      { label: "당류 (g)", hot: "-", iced: "44g (44%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "4mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "11mg" },
    ],
  },
  allergy: null,
},
{
  id: "honeyQuince",
  name: "꿀모과차",
  eName: "Honey Quince Tea",
  img: "./img/memu_infocard/info_Honey_Quince_Tea_img.png",
  info: "향긋한 모과를 아낌없이 담아 진하게 즐기는 전통차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "189 kcal", iced: "189 kcal" },
      { label: "당류 (g)", hot: "43g (43%)", iced: "43g (43%)" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "63mg (3%)", iced: "63mg (3%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "lemonGinger",
  name: "레몬 생강차",
  eName: "Lemon Ginger Tea",
  img: "./img/memu_infocard/info_Lemon_Ginger_Tea_img.png",
  info: "알싸한 생강에 향긋한 레몬이 더해져 따뜻하고 개운하게 즐길 수 있는 전통차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "208kcal", iced: "208kcal" },
      { label: "당류 (g)", hot: "39g (39%)", iced: "39g (39%)" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0.3g (2%)", iced: "0.3g (2%)" },
      { label: "나트륨 (mg)", hot: "57mg (3%)", iced: "57mg (3%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "jujubeGinger",
  name: "대추 생강차",
  eName: "Jujube Ginger Tea",
  img: "./img/memu_infocard/info_Jujube_Ginger_Tea_img.png",
  info: "대추 과육과 생강이 진하게 어우러져 달콤하고 부드럽게 마실 수 있는 전통차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "229kcal", iced: "229kcal" },
      { label: "당류 (g)", hot: "45g (45%)", iced: "45g (45%)" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "25g (1%)", iced: "25g (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "jejuLemonApple",
  name: "제주 레몬 애플티",
  eName: "Jeju Lemon Apple Tea",
  img: "./img/memu_infocard/info_Jeju_Lemon_Apple_Tea_img.png",
  info: "상큼한 제주 레몬과 달달한 사과다이스가 어우러진 과일차 ★토핑은 시즌에 따라 상이할 수 있습니다★",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "227kcal", iced: "227kcal" },
      { label: "당류 (g)", hot: "54g (54%)", iced: "54g (54%)" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "140g (7%)", iced: "140g (7%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "pinkPineappleChamomile",
  name: "핑크 파인 캐모마일티",
  eName: "Pink Pineapple Chamomile Tea",
  img: "./img/memu_infocard/info_Pink_Pineapple_Chamomile_Tea_img.png",
  info: "달콤한 파인애플 과육과 상큼한 시트러스청이 향긋한 캐모마일과 어우러진 핑크빛 티 베리에이션 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "183kcal" },
      { label: "당류 (g)", hot: "-", iced: "40g (40%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "15mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "yuzuChamomile",
  name: "유자 캐모마일",
  eName: "Yuzu Chamomile",
  img: "./img/memu_infocard/info_Yuzu_Chamomile_img.png",
  info: "은은한 향의 캐모마일과 유자차를 같이 느낄 수 있는 티베리에이션 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "157kcal", iced: "157kcal" },
      { label: "당류 (g)", hot: "34g (34%)", iced: "34g (34%)" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "16mg (1%)", iced: "16mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "peachEarlGrey",
  name: "복숭아 얼그레이",
  eName: "Peach Earl Grey",
  img: "./img/memu_infocard/info_Peach_Earl_Grey_img.png",
  info: "달콤한 복숭아와 얼그레이의 베르가못 향의 조화, 깔끔하면서도 달콤한 티베리에이션 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "109kcal", iced: "109kcal" },
      { label: "당류 (g)", hot: "26g (26%)", iced: "26g (26%)" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "4mg (0%)", iced: "4mg (0%)" },
      { label: "카페인 (mg)", hot: "33mg", iced: "33mg" },
    ],
  },
  allergy: "복숭아",
},
{
  id: "redGrapefruit",
  name: "홍자몽차",
  eName: "Red Grapefruit Tea",
  img: "./img/memu_infocard/info_Red_Grapefruit_Tea_img.png",
  info: "자몽과일 특유의 달콤 쌉싸름한 맛을 즐길 수 있는 과일차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "136kcal", iced: "136kcal" },
      { label: "당류 (g)", hot: "32g (32%)", iced: "32g (32%)" },
      { label: "단백질 (g)", hot: "1g (2%)", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "8mg (0%)", iced: "8mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "hanrabongtangerine",
  name: "제주 한라봉 감귤차",
  eName: "jeju Hanrabong tangerine tea",
  img: "./img/memu_infocard/info_jeju_Hanrabong_tangerine_tea_img.png",
  info: "향긋한 한라봉과 감귤이 어우러져 상큼하면서도 달콤한 과일차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "199kcal", iced: "199kcal" },
      { label: "당류 (g)", hot: "48g (48%)", iced: "48g (48%)" },
      { label: "단백질 (g)", hot: "1g (1%)", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "6mg (0%)", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "goheungYuzu",
  name: "고흥 유자차",
  eName: "Goheung Yuzu Tea",
  img: "./img/memu_infocard/info_Goheung_Yuzu_Tea_img.png",
  info: "고흥 유자의 풍미를 살린 할리스 유자차",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "252kcal", iced: "252kcal" },
      { label: "당류 (g)", hot: "50g (50%)", iced: "50g (50%)" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "23mg (1%)", iced: "23mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "greenTea",
  name: "해남 녹차",
  eName: "Green Tea",
  img: "./img/memu_infocard/info_Green_Tea_img.png",
  info: "고소한 감칠맛과 부드러운 목넘김이 좋은 땅끝 마음 해남에서 재배한 녹차(유기농 녹차잎 사용)",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "4 kcal", iced: "4 kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "5mg (0%)", iced: "5mg (0%)" },
      { label: "카페인 (mg)", hot: "25mg", iced: "25mg" },
    ],
  },
  allergy: null,
},
{
  id: "peppermint",
  name: "페퍼민트",
  eName: "Peppermint Tea",
  img: "./img/memu_infocard/info_Peppermint_Tea_img.png",
  info: "입안 가득 깔끔한 청량감으로 기분까지 상쾌한 허브차",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "5 kcal", iced: "5 kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "0g", iced: "0g" },
      { label: "포화지방 (g)", hot: "0.1g (0%)", iced: "0.1g (0%)" },
      { label: "나트륨 (mg)", hot: "6mg (0%)", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "chamomile",
  name: "캐모마일",
  eName: "Chamomile",
  img: "./img/memu_infocard/info_Chamomile_img.png",
  info: "캐모마일 꽃잎을 그대로 말려 노란색의 향긋한 꽃향이 그대로 살아 있는 허브차",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "5 kcal", iced: "5 kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0.1g (1%)", iced: "0.1g (1%)" },
      { label: "나트륨 (mg)", hot: "4mg (0%)", iced: "4mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "earlGrey",
  name: "얼그레이",
  eName: "Earl Grey",
  img: "./img/memu_infocard/info_Earl_Grey_img.png",
  info: "스리랑카 캔디 지방에서 재배된 홍차에 시칠리아의 감귤,베르가못향이 조화된 감미로운 홍차",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "5kcal", iced: "5kcal" },
      { label: "당류 (g)", hot: "0g", iced: "0g" },
      { label: "단백질 (g)", hot: "0g (1%)", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "0g", iced: "0g" },
      { label: "나트륨 (mg)", hot: "4mg (0%)", iced: "4mg (0%)" },
      { label: "카페인 (mg)", hot: "17mg", iced: "17mg" },
    ],
  },
  allergy: null,
},
{
  id: "doublechocochipHollyccino",
  name: "더블 초코칩 할리치노",
  eName: "Double Chocochip Hollyccino",
  img: "./img/memu_infocard/info_Double_Chocochip_Hollyccino_img.png",
  info: "초코칩이 콕콕 들어가 진하고 달콤한 초콜릿의 풍미가 가득한 초콜릿 할리치노",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "517 kcal" },
      { label: "당류 (g)", hot: "-", iced: "71g (71%)" },
      { label: "단백질 (g)", hot: "-", iced: "8g (14%)" },
      { label: "포화지방 (g)", hot: "-", iced: "13.4g(89%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "164mg (8%)" },
      { label: "카페인 (mg)", hot: "-", iced: "21mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "matchaHollyccino",
  name: "제주 말차 할리치노",
  eName: "Jeju Matcha Hollyccino",
  img: "./img/memu_infocard/info_Jeju_Matcha_Hollyccino_img.png",
  info: "제주산 말차 파우더로 만들어 깊고 진한 말차 본연의 풍미를 살린 할리치노",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "426kcal" },
      { label: "당류 (g)", hot: "-", iced: "61g (61%)" },
      { label: "단백질 (g)", hot: "-", iced: "8g (14%)" },
      { label: "포화지방 (g)", hot: "-", iced: "8.1g (54%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "112mg (6%)" },
      { label: "카페인 (mg)", hot: "-", iced: "194mg" },
    ],
  },
  allergy: "우유",
},
{
  id: "coldbrewHollyccino",
  name: "콜드브루 할리치노",
  eName: "Coldbrew Hollyccino",
  img: "./img/memu_infocard/info_Coldbrew_Hollyccino_img.png",
  info: "콜드브루와 우유, 얼음이 갈린 할리치노",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "264kcal" },
      { label: "당류 (g)", hot: "-", iced: "35g (35%)" },
      { label: "단백질 (g)", hot: "-", iced: "5g (5%)" },
      { label: "포화지방 (g)", hot: "-", iced: "7.5g (50%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "182mg (9%)" },
      { label: "카페인 (mg)", hot: "-", iced: "91mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "mintChocochipHollyccino",
  name: "민트 초코칩 할리치노",
  eName: "Mint Chocochip Hollyccino",
  img: "./img/memu_infocard/info_Mint_Chocochip_Hollyccino_img.png",
  info: "초코칩이 콕콕 박힌 상쾌하면서 청량한 민트 맛의 블렌디드 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "438kcal" },
      { label: "당류 (g)", hot: "-", iced: "57g (57%)" },
      { label: "단백질 (g)", hot: "-", iced: "7g (12%)" },
      { label: "포화지방 (g)", hot: "-", iced: "12.8g (85%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "227mg (11%)" },
      { label: "카페인 (mg)", hot: "-", iced: "3mg" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "berryCheeseCakeHollyccino",
  name: "딸기 치즈케익 할리치노",
  eName: "Strawberry Cheese Cake Hollyccino",
  img: "./img/memu_infocard/info_Strawberry_Cheese_Cake_Hollyccino_img.png",
  info: "치즈케익맛 아이스블렌디드 음료에 상큼한 딸기를 토핑한 할리스 시그니처 메뉴",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "415kcal" },
      { label: "당류 (g)", hot: "-", iced: "59g (59%)" },
      { label: "단백질 (g)", hot: "-", iced: "5g (10%)" },
      { label: "포화지방 (g)", hot: "-", iced: "10.2g (68%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "166mg (8%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "우유, 대두, 밀",
},
{
  id: "YogurtHollyccino",
  name: "플레인 요거트 할리치노",
  eName: "Plain Yogurt Hollyccino",
  img: "./img/memu_infocard/info_Plain_Yogurt_Hollyccino_img.png",
  info: "상큼한 요거트 맛을 그대로 느낄 수 있는 플레인 요거트 할리치노",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "292kcal" },
      { label: "당류 (g)", hot: "-", iced: "58g (58%)" },
      { label: "단백질 (g)", hot: "-", iced: "7g (13%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0.9g (6%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "202mg (10%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "우유, 대두",
},
{
  id: "peachStrawberryBlended",
  name: "피치 딸기 블렌디드",
  eName: "Peach Strawberry Blended",
  img: "./img/memu_infocard/info_Peach_Strawberry_Blended_img.png",
  info: "과즙 가득한 복숭아 슬러쉬 안에 톡톡 씹히는 딸기 과육이 더해진 블렌디드 음료",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "193kcal" },
      { label: "당류 (g)", hot: "-", iced: "47g (47%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "9mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "복숭아",
},
{
  id: "appleMangoSmoothie",
  name: "애플망고 스무디",
  eName: "Apple Mango Smoothie",
  img: "./img/memu_infocard/info_Apple_Mango_Smoothie_img.png",
  info: "상큼 달콤한 애플망고 과육을 갈아 만든 과일 스무디",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "260kcal" },
      { label: "당류 (g)", hot: "-", iced: "49g (49%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "14mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "berrySmoothie",
  name: "딸기 스무디",
  eName: "Strawberry Smoothie",
  img: "./img/memu_infocard/info_Strawberry_Smoothie_img.png",
  info: "딸기 본연의 맛을 살려 갈아 만든 과일 스무디",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "247kcal" },
      { label: "당류 (g)", hot: "-", iced: "44g (44%)" },
      { label: "단백질 (g)", hot: "-", iced: "2g (4%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "44mg (2%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "lemonade",
  name: "레몬에이드",
  eName: "Lemonade",
  img: "./img/memu_infocard/info_Lemonade_img.png",
  info: "레몬의 상큼이 톡톡! 시원하게 즐기는 레몬에이드",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "216 kcal" },
      { label: "당류 (g)", hot: "-", iced: "49g (49%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "0g (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "yuzuGrapefruitSparkling",
  name: "유자몽 스파클링",
  eName: "Yuzu Grapefruit Sparkling",
  img: "./img/memu_infocard/info_Yuzu_Grapefruit_Sparkling_img.png",
  info: "달콤한 고흥유자와 쌉싸름한 자몽이 들어간 시원한 스파클링 음료",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "233kcal" },
      { label: "당류 (g)", hot: "-", iced: "47g (47%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g (1%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "33mg (2%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "peachPlumSparkling",
  name: "복숭아 자두 스파클링",
  eName: "Peach Plum Sparkling",
  img: "./img/memu_infocard/info_Peach_Plum_Sparkling_img.png",
  info: "청량감 가득한 탄산수와 복숭아, 자두가 상큼달콤하게 어우러진 스파클링 음료",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "179kcal" },
      { label: "당류 (g)", hot: "-", iced: "43g (43%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "0" },
    ],
  },
  allergy: "복숭아",
},
{
  id: "greenGrapeSparkling",
  name: "청포도 스파클링",
  eName: "Green Grape Sparkling",
  img: "./img/memu_infocard/info_Green_Grape_Sparkling_img.png",
  info: "청량감 가득한 탄산수와 탱글탱글한 청포도가 상큼달콤하게 어우러진 스파클링 음료",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "204kcal" },
      { label: "당류 (g)", hot: "-", iced: "46g (46%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "22mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "0" },
    ],
  },
  allergy: null,
},
{
  id: "orangeGrapefruitJuice",
  name: "오렌지 자몽 생과일 주스",
  eName: "Orange Grapefruit Juice",
  img: "./img/memu_infocard/info_Orange_Grapefruit_Juice_img.png",
  info: "오렌지와 자몽을 그대로 갈아 만들어 상큼함 그 자체 생과일 주스",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "190kcal" },
      { label: "당류 (g)", hot: "-", iced: "39g (39%)" },
      { label: "단백질 (g)", hot: "-", iced: "2g (4%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0.1g (0%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "23mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "tomatoJuice",
  name: "토마토 생과일 주스",
  eName: "Tomato Juice",
  img: "./img/memu_infocard/info_Tomato_Juice_img.png",
  info: "신선한 토마토를 그대로 갈아 만든 주스에 토마토를 듬뿍 토핑한 생과일 주스",
  nutrition: {
    capacity: "Grande (472ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "144kcal" },
      { label: "당류 (g)", hot: "-", iced: "28g (28%)" },
      { label: "단백질 (g)", hot: "-", iced: "3g (6%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0.1g (1%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "6mg (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "토마토",
},
{
  id: "appleBeetJuice",
  name: "사과 비트 착즙 주스",
  eName: "Apple Beet Juice",
  img: "./img/memu_infocard/info_Apple_Beet_Juice_img.png",
  info: "사과, 비트, 파인애플이 어우러진 건강한 과채 주스",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "125kcal" },
      { label: "당류 (g)", hot: "-", iced: "25g (25%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "45mg (2%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "orangeCarrotJuice",
  name: "오렌지 당근 착즙 주스",
  eName: "Orange Carrot Juice",
  img: "./img/memu_infocard/info_Orange_Carrot_Juice_img.png",
  info: "오렌지, 당근, 사과가 어우러진 달콤한 과채 주스",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "120kcal" },
      { label: "당류 (g)", hot: "-", iced: "23g (23%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "55mg (3%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "greenGrapeKaleJuice",
  name: "청포도 케일 착즙 주스",
  eName: "Green Grape Kale Juice",
  img: "./img/memu_infocard/info_Green_Grape_Kale_Juice_img.png",
  info: "청포도, 케일, 밀싹이 어우러진 산뜻한 과채 주스",
  nutrition: {
    capacity: "Regular (354ml)",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "129kcal" },
      { label: "당류 (g)", hot: "-", iced: "27g (27%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0% (0%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "29mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "밀(밀싹)",
},
{
  id: "smooviApple",
  name: "스무비 애플",
  eName: "Smoovi Apple",
  img: "./img/memu_infocard/info_Smoovi_Apple_img.png",
  info: "자연의 싱그러음과 달콤함을 한 병에 담은 스무비 (애플)",
  nutrition: {
    capacity: "250ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "120kcal" },
      { label: "당류 (g)", hot: "-", iced: "29g (29%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g (0%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g (0%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "13ml (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "0" },
    ],
  },
  allergy: null,
},
{
  id: "smooviOrange",
  name: "스무비 오렌지",
  eName: "Smoovi Orange",
  img: "./img/memu_infocard/info_Smoovi_Orange_img.png",
  info: "자연의 싱그러음과 달콤함을 한 병에 담은 스무비 (오렌지)",
  nutrition: {
    capacity: "250ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "108kcal" },
      { label: "당류 (g)", hot: "-", iced: "24g (24%)" },
      { label: "단백질 (g)", hot: "-", iced: "1g (2%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g (0%)" },
      { label: "나트륨 (mg)", hot: "-", iced: "13ml (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "0" },
    ],
  },
  allergy: null,
},
{
  id: "kombuchaShineMuscat",
  name: "할리스 콤부차 샤인머스캣",
  eName: "Kombucha Shine Muscat",
  img: "./img/memu_infocard/info_Kombucha_Shine_Muscat_img.png",
  info: "샤인머스캣 과즙을 넣어 풍미를 그대로 살리고, 톡톡 쏘는 탄산으로 청량감을 더한 발효음료",
  nutrition: {
    capacity: "총 제공량 315ml / 100ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "48kcal" },
      { label: "당류 (g)", hot: "-", iced: "9g (9%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "0g (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "kombuchaPeachberry",
  name: "할리스 콤부차 피치딸기",
  eName: "Kombucha Peach Strawberry",
  img: "./img/memu_infocard/info_Kombucha_Peach_Strawberry_img.png",
  info: "복숭아와 딸기의 상큼 달콤한 풍미와 톡톡 쏘는 탄산으로 청량감을 더한 발효음료",
  nutrition: {
    capacity: "총 제공량 315ml / 100ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "48kcal" },
      { label: "당류 (g)", hot: "-", iced: "9g (9%)" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "0g (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: "복숭아",
},
{
  id: "sparklingWaterLemonLime",
  name: "할리스 탄산수 레몬 라임",
  eName: "Sparkling Water Lemon Lime",
  img: "./img/memu_infocard/info_Sparkling_Water_Lemon_Lime_img.png",
  info: "상큼한 레몬과 라임의 풍미가 은은하게 어우러진 탄산수",
  nutrition: {
    capacity: "500ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "0kcal" },
      { label: "당류 (g)", hot: "-", iced: "0g" },
      { label: "단백질 (g)", hot: "-", iced: "1g (1%)" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "15mg (1%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
    ],
  },
  allergy: null,
},
{
  id: "sparklingwaterPlain",
  name: "할리스 탄산수 플레인",
  eName: "Sparkling water Plain",
  img: "./img/memu_infocard/info_Sparkling_water_Plain_img.png",
  info: "깔끔하고 청량하게 즐기는 플레인 탄산수",
  nutrition: {
    capacity: "500ml",
    rows: [
      { label: "칼로리 (kcal)", hot: "-", iced: "0kcal" },
      { label: "당류 (g)", hot: "-", iced: "0g" },
      { label: "단백질 (g)", hot: "-", iced: "0g" },
      { label: "포화지방 (g)", hot: "-", iced: "0g" },
      { label: "나트륨 (mg)", hot: "-", iced: "0g (0%)" },
      { label: "카페인 (mg)", hot: "-", iced: "-" },
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
    $allergy.textContent = "알레르기 유발: 없음";
    $allergy.classList.add("hidden_text");
  } else {
    $allergy.textContent = `알레르기 유발: ${data.allergy}`;
    $allergy.classList.remove("hidden_text");
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
                <td>${r.hot ?? "0g"}</td>
                <td>${r.iced ?? "0g"}</td>
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