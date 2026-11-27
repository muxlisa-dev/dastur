
// 36 ta bir-birini takrorlamaydigan haqiqiy ayollar parfyumeriyasi rasmlari
const uniqueWomenPerfumeImages = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80",
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4659793/pexels-photo-4659793.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
];

// 36 xil ayollar atirlari ro'yxati [Brend, Nomi, Ifor notalari, Toifa]
const womenPerfumesData = [
  ["Chanel", "Coco Mademoiselle", "Apelsin, atirgul, pachuli", "floral"],
  ["Dior", "J'adore Eau de Parfum", "Ilang-ilang, damashq atirguli, yasmin", "floral"],
  ["Yves Saint Laurent", "Libre Intense", "Lavanda, apelsin guli, vanil", "sweet"],
  ["Lancôme", "La Vie Est Belle", "Iris, nok, praline, vanil", "sweet"],
  ["Maison Francis Kurkdjian", "Baccarat Rouge 540", "Za'faron, ambergris, oq kedr", "niche"],
  ["Tom Ford", "Lost Cherry", "Qora olcha, achchiq bodom, turk atirguli", "sweet"],
  ["Parfums de Marly", "Delina Exclusif", "Lichi, turk atirguli, tutatqi", "niche"],
  ["Giorgio Armani", "My Way", "Bergamot, tuberoza, oq mushk", "floral"],
  ["Guerlain", "Mon Guerlain", "Lavanda, sambak yasmini, sandal", "sweet"],
  ["Carolina Herrera", "Good Girl", "Bodom, kofe, kakao, tonka loviyasi", "sweet"],
  ["Versace", "Bright Crystal", "Anor, pion, lotus, mushk", "floral"],
  ["Byredo", "Blanche", "Oq atirgul, pushti qalampir, sandal", "niche"],
  ["Jo Malone", "Peony & Blush Suede", "Qizil olma, pion, zamsh", "floral"],
  ["Narciso Rodriguez", "For Her Pure Musc", "Oq gullar, kashmeran, mushk", "floral"],
  ["Kilian", "Good Girl Gone Bad", "Osmanthus, may atirguli, tuberoza", "niche"],
  ["Valentino", "Donna Born In Roma", "Qora smorodina, yasmin, burbon vanili", "sweet"],
  ["Givenchy", "L'Interdit Rouge", "Qizil apelsin, zanjabil, sandal", "sweet"],
  ["Burberry", "Her Eau de Parfum", "Qulupnay, malina, binafsha, amber", "sweet"],
  ["Chloé", "Chloé Eau de Parfum", "Pion, lichi, freziya, atirgul", "floral"],
  ["Mugler", "Alien Goddess", "Kokos suvi, bergamot, yasmin", "sweet"],
  ["Creed", "Aventus For Her", "Yashil olma, bergamot, sandal", "niche"],
  ["Tiziana Terenzi", "Kirke", "Marakuyya, shaftoli, nok, mushk", "niche"],
  ["Initio", "Atomic Rose", "Bolgar atirguli, bergamot, vanil", "niche"],
  ["Montale", "Roses Musk", "Atirgul, yasmin, yumshoq mushk", "niche"],
  ["Mancera", "Roses Vanille", "Limon, shakarli atirgul, oq mushk", "sweet"],
  ["Ex Nihilo", "Fleur Narcotique", "Lichi, bergamot, shaftoli, pion", "niche"],
  ["Diptyque", "Philosykos", "Anjir bargi, anjir mevasi, oq kedr", "niche"],
  ["Le Labo", "Rose 31", "Sentifoliya atirguli, zira, kedr", "niche"],
  ["Marc Jacobs", "Daisy Love", "Malina, romashka, kashmir mushki", "floral"],
  ["Prada", "Paradoxe", "Neroli, amber, oq mushk", "floral"],
  ["Dolce & Gabbana", "Light Blue", "Sitsiliya limoni, olma, bambuk", "floral"],
  ["Viktor & Rolf", "Flowerbomb", "Choy, bergamot, orxideya, pachuli", "sweet"],
  ["Guerlain", "Shalimar Eau de Parfum", "Bergamot, iris, vanil, tutatqi", "sweet"],
  ["Chanel", "Chance Eau Tendre", "Behi, greypfrut, giatsint, oq mushk", "floral"],
  ["Dior", "Miss Dior Blooming Bouquet", "Pion, damashq atirguli, oq mushk", "floral"],
  ["Yves Saint Laurent", "Black Opium", "Qora kofe, oq gullar, vanil", "sweet"]
];

// Har bir ayollar atiriga 1 tadan noyob rasm biriktirish
const products = womenPerfumesData.map((item, index) => ({
  id: index + 1,
  brand: item[0],
  name: item[1],
  notes: item[2],
  category: item[3],
  price: 820000 + (index % 9) * 135000,
  tag: index % 4 === 0 ? "Yangi" : index % 5 === 0 ? "Aksiya" : "Ayollar",
  isNew: index % 4 === 0,
  isSale: index % 5 === 0,
  isNiche: item[3] === "niche",
  image: uniqueWomenPerfumeImages[index]
}));

let currentCategory = "all";
let cart = [];

function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const searchVal = document.getElementById("searchInput").value.toLowerCase();
  const sortVal = document.getElementById("sortSelect").value;

  let filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchVal) ||
      p.brand.toLowerCase().includes(searchVal);

    if (!matchesSearch) return false;
    if (currentCategory === "floral") return p.category === "floral";
    if (currentCategory === "sweet") return p.category === "sweet";
    if (currentCategory === "niche") return p.isNiche;
    if (currentCategory === "new") return p.isNew;
    if (currentCategory === "sale") return p.isSale;
    return true;
  });

  if (sortVal === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortVal === "price-desc") filtered.sort((a, b) => b.price - a.price);

  document.getElementById("productCountText").innerText = `Ko'rsatilmoqda: ${filtered.length} ta ayollar parfyumi`;

  grid.innerHTML = filtered
    .map(
      (p) => `
      <div class="card">
        <div class="card-img-wrap" onclick="openDetail(${p.id})">
          <span class="tag">${p.tag}</span>
          <img src="${p.image}" alt="${p.brand} - ${p.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <span class="brand">${p.brand}</span>
          <h3 class="title">${p.name}</h3>
          <p class="notes">Notalar: ${p.notes}</p>
          <div class="card-footer">
            <span class="price">${formatPrice(p.price)}</span>
            <button class="add-btn" onclick="addToCart(${p.id})">+ Savatga</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function filterCategory(cat, btnElement) {
  currentCategory = cat;
  const titles = {
    all: "Barcha Ayollar Atirlari (36 xil)",
    floral: "Gulli Ayollar Iforlari",
    sweet: "Shirin va Vanilli Atirlar",
    niche: "Ayollar Niša Parfyumeriyasi",
    new: "Yangi Kelgan Ayollar Atirlari",
    sale: "Aksiyadagi Ayollar Atirlari"
  };
  document.getElementById("sectionTitle").innerText = titles[cat] || "Ayollar Katalogi";

  if (btnElement) {
    document.querySelectorAll(".nav-item").forEach((b) => b.classList.remove("active"));
    btnElement.classList.add("active");
  }
  renderProducts();
}

function handleSearch() {
  renderProducts();
}

function addToCart(id) {
  const item = products.find((p) => p.id === id);
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  document.getElementById("cartCount").innerText = totalCount;
  document.getElementById("cartTotal").innerText = formatPrice(totalSum);

  const cartItemsEl = document.getElementById("cartItems");
  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Savatingiz hozircha bo'sh.</p>";
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div>
          <strong>${item.brand} — ${item.name}</strong>
          <div style="font-size:13px;color:#a69ba8;">${item.qty} x ${formatPrice(item.price)}</div>
        </div>
        <button class="icon-btn" onclick="removeFromCart(${item.id})">O'chirish</button>
      </div>
    `
    )
    .join("");
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

function openCart() {
  updateCartUI();
  document.getElementById("cartModal").classList.add("open");
}

function closeCart() {
  document.getElementById("cartModal").classList.remove("open");
}

function checkoutOrder() {
  if (cart.length === 0) {
    alert("Avval savatga atir qo'shing!");
    return;
  }
  alert("Buyurtmangiz qabul qilindi! Operatorimiz tez orada bog'lanadi.");
  cart = [];
  updateCartUI();
  closeCart();
}

function openDetail(id) {
  const p = products.find((item) => item.id === id);
  document.getElementById("detailBody").innerHTML = `
    <img src="${p.image}" alt="${p.name}" style="width:100%;height:260px;object-fit:cover;border-radius:8px;margin-bottom:15px;">
    <span class="brand">${p.brand}</span>
    <h2 style="margin:6px 0;">${p.name}</h2>
    <p style="color:#a69ba8;margin-bottom:12px;">Asosiy notalar: ${p.notes}</p>
    <p style="font-size:20px;font-weight:700;margin-bottom:16px;">${formatPrice(p.price)}</p>
    <button class="btn-gold full-width" onclick="addToCart(${p.id}); closeDetail();">Savatga qo'shish</button>
  `;
  document.getElementById("detailModal").classList.add("open");
}

function closeDetail() {
  document.getElementById("detailModal").classList.remove("open");
}

function scrollToFooter() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}

// Sahifa yuklanganda 36 ta ayollar atirini ekranga chiqarish
renderProducts();