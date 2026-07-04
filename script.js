const products = {
  chocoLogo: {
    name: "01 шорты",
    color: "Коричневый / светлый принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["XL"],
    image: "shorts-01-front.jpg",
    gallery: [
      { src: "shorts-01-front.jpg", label: "Вид спереди" },
      { src: "shorts-01-back.jpg", label: "Вид сзади" },
      { src: "shorts-01-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-01-model-01.jpg", label: "На модели 01" },
      { src: "shorts-01-model-02.jpg", label: "На модели 02" }
    ],
    description: "Свободные шорты в темно-коричневой базе со светлым принтом. Спокойная расцветка для повседневных летних образов."
  },
  beigeFlower: {
    name: "02 шорты",
    color: "Бежевый / красный принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["S", "M"],
    image: "shorts-02-front.jpg",
    gallery: [
      { src: "shorts-02-front.jpg", label: "Вид спереди" },
      { src: "shorts-02-back.jpg", label: "Вид сзади" },
      { src: "shorts-02-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-02-model-01.jpg", label: "На модели 01" },
      { src: "shorts-02-model-02.jpg", label: "На модели 02" }
    ],
    description: "Легкая бежевая расцветка с красным цветочным рисунком. Хорошо работает с белой футболкой, рубашкой и базовой обувью."
  },
  blackBronze: {
    name: "03 шорты",
    color: "Черный / бронзовый принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["XL"],
    image: "black-bronze-front.jpg",
    gallery: [
      { src: "black-bronze-front.jpg", label: "Вид спереди" },
      { src: "black-bronze-back.jpg", label: "Вид сзади" },
      { src: "shorts-03-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-03-model-01.jpg", label: "На модели 01" },
      { src: "shorts-03-model-02.jpg", label: "На модели 02" }
    ],
    description: "Акцентные черные шорты с бронзовым принтом и белым шнурком. Самая заметная модель в дропе."
  },
  redGrid: {
    name: "04 шорты",
    color: "Красный / черный принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "L"],
    image: "red-grid-front.jpg",
    gallery: [
      { src: "red-grid-front.jpg", label: "Вид спереди" },
      { src: "red-grid-back.jpg", label: "Вид сзади" },
      { src: "shorts-04-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-04-model-01.jpg", label: "На модели 01" },
      { src: "shorts-04-model-02.jpg", label: "На модели 02" }
    ],
    description: "Черно-красная графичная расцветка для более яркого образа. Свободная посадка и эластичный пояс."
  },
  blackLines: {
    name: "05 шорты",
    color: "Черный принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["L", "XL"],
    image: "shorts-05-front.jpg",
    gallery: [
      { src: "shorts-05-front.jpg", label: "Вид спереди" },
      { src: "shorts-05-back.jpg", label: "Вид сзади" },
      { src: "shorts-05-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-05-model-01.jpg", label: "На модели 01" },
      { src: "shorts-05-model-02.jpg", label: "На модели 02" }
    ],
    description: "Темная универсальная модель с вертикальными линиями и спокойным рисунком. Подходит на каждый день."
  },
  houndstooth: {
    name: "06 шорты",
    color: "Бежевый / черный принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-06-front.jpg",
    gallery: [
      { src: "shorts-06-front.jpg", label: "Вид спереди" },
      { src: "shorts-06-back.jpg", label: "Вид сзади" },
      { src: "shorts-06-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-06-model-01.jpg", label: "На модели 01" },
      { src: "shorts-06-model-02.jpg", label: "На модели 02" }
    ],
    description: "Геометричная бежевая и черная расцветка. Визуально выделяется, но легко сочетается с базовым верхом."
  },
  shorts07: {
    name: "07 шорты",
    color: "Красный / яркий принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-07-front.jpg",
    gallery: [
      { src: "shorts-07-front.jpg", label: "Вид спереди" },
      { src: "shorts-07-back.jpg", label: "Вид сзади" },
      { src: "shorts-07-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-07-model-01.jpg", label: "На модели 01" },
      { src: "shorts-07-model-02.jpg", label: "На модели 02" }
    ],
    description: "Яркие красные шорты с цепями, цветами и белым шнурком. Акцентная расцветка для летнего образа."
  },
  shorts08: {
    name: "08 шорты",
    color: "Черный / бирюзово-желтые цветы",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-08-front.jpg",
    gallery: [
      { src: "shorts-08-front.jpg", label: "Вид спереди" },
      { src: "shorts-08-back.jpg", label: "Вид сзади" },
      { src: "shorts-08-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-08-model-01.jpg", label: "На модели 01" },
      { src: "shorts-08-model-02.jpg", label: "На модели 02" }
    ],
    description: "Черные шорты с яркими бирюзовыми и желтыми цветами. Летняя расцветка, которая добавляет акцент к базовому образу."
  },
  shorts09: {
    name: "09 шорты",
    color: "Желтый / черный зигзаг",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-09-front.jpg",
    gallery: [
      { src: "shorts-09-front.jpg", label: "Вид спереди" },
      { src: "shorts-09-back.jpg", label: "Вид сзади" },
      { src: "shorts-09-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-09-model-01.jpg", label: "На модели 01" },
      { src: "shorts-09-model-02.jpg", label: "На модели 02" }
    ],
    description: "Шорты с выразительным желто-черным зигзагом и белым шнурком. Графичная модель для заметного летнего образа."
  },
  shorts10: {
    name: "10 шорты",
    color: "Черный / красный принт",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-10-front.jpg",
    gallery: [
      { src: "shorts-10-front.jpg", label: "Вид спереди" },
      { src: "shorts-10-back.jpg", label: "Вид сзади" },
      { src: "shorts-10-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-10-model-01.jpg", label: "На модели 01" },
      { src: "shorts-10-model-02.jpg", label: "На модели 02" }
    ],
    description: "Черные шорты с красным повторяющимся принтом и белым шнурком. Контрастная модель для спокойного, но заметного образа."
  },
  shorts11: {
    name: "11 шорты",
    color: "Черный / горчичные цветы",
    price: "2 150 ₽",
    oldPrice: "3 700 ₽",
    availableSizes: ["M", "XL"],
    image: "shorts-11-front.jpg",
    gallery: [
      { src: "shorts-11-front.jpg", label: "Вид спереди" },
      { src: "shorts-11-back.jpg", label: "Вид сзади" },
      { src: "shorts-11-detail.jpg", label: "Детальная фотография" },
      { src: "shorts-11-model-01.jpg", label: "На модели 01" },
      { src: "shorts-11-model-02.jpg", label: "На модели 02" }
    ],
    description: "Темные шорты с горчичными цветами, голубыми листьями и белым шнурком. Теплая акцентная расцветка для летнего образа."
  }
};

let selectedProductKey = "chocoLogo";
let selectedSize = "";

const sizeButtons = document.querySelectorAll(".size-button");
const productButtons = document.querySelectorAll("[data-product]");
const colourButtons = document.querySelectorAll(".colour-option");
const blindPanels = document.querySelectorAll(".blind-panel");
const sizeStatus = document.querySelector("#sizeStatus");
const orderForm = document.querySelector("#orderForm");
const formStatus = document.querySelector("#formStatus");
const selectedColourLabel = document.querySelector("#selectedColourLabel");
const mainProductImage = document.querySelector("#mainProductImage");
const mainProductCaption = document.querySelector("#mainProductCaption");
const productThumbnails = document.querySelector("#productThumbnails");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productDescription = document.querySelector("#productDescription");
const orderModelLabel = document.querySelector("#orderModelLabel");
const orderColorLabel = document.querySelector("#orderColorLabel");
const orderSizeLabel = document.querySelector("#orderSizeLabel");
const orderPriceLabel = document.querySelector("#orderPriceLabel");
const formModel = document.querySelector("#formModel");
const formColor = document.querySelector("#formColor");
const formSize = document.querySelector("#formSize");
const formPrice = document.querySelector("#formPrice");
const phoneInput = orderForm.elements.phone;

function renderPrice(product) {
  return `
    <span class="price-current">${product.price}</span>
    <span class="price-old">${product.oldPrice}</span>
  `;
}

function getSelectedProduct() {
  return products[selectedProductKey];
}

function setStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.classList.remove("error", "success");

  if (type) {
    formStatus.classList.add(type);
  }
}

function syncHiddenFields() {
  const product = getSelectedProduct();

  formModel.value = product.name;
  formColor.value = product.color;
  formSize.value = selectedSize;
  formPrice.value = product.price;

  orderModelLabel.textContent = product.name;
  orderColorLabel.textContent = product.color;
  orderSizeLabel.textContent = selectedSize || "Не выбран";
  orderPriceLabel.innerHTML = renderPrice(product);
}

function resetSize() {
  selectedSize = "";
  sizeButtons.forEach((button) => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });
  sizeStatus.textContent = "Выберите размер перед заказом";
  sizeStatus.classList.remove("error");
}

function updateSizeAvailability() {
  const product = getSelectedProduct();

  sizeButtons.forEach((button) => {
    const isAvailable = product.availableSizes.includes(button.dataset.size);
    button.disabled = !isAvailable;
    button.classList.toggle("unavailable", !isAvailable);
    button.title = isAvailable ? "" : "Нет в наличии";
    button.dataset.status = isAvailable ? "" : "НЕТ В НАЛИЧИИ";
  });
}

function selectGalleryImage(photoIndex) {
  const product = getSelectedProduct();
  const gallery = product.gallery || [{ src: product.image, label: product.name }];
  const photo = gallery[photoIndex] || gallery[0];

  if (photo.placeholder) {
    return;
  }

  mainProductImage.src = photo.src;
  mainProductImage.alt = `${product.name}: ${photo.label}`;
  mainProductCaption.textContent = photo.label;

  productThumbnails.querySelectorAll(".product-thumb").forEach((button, index) => {
    button.classList.toggle("active", index === photoIndex);
  });
}

function renderProductGallery() {
  const product = getSelectedProduct();
  const gallery = product.gallery || [{ src: product.image, label: product.name }];

  productThumbnails.innerHTML = gallery.map((photo, index) => `
    <button class="product-thumb${index === 0 ? " active" : ""}${photo.placeholder ? " placeholder" : ""}" type="button" data-photo-index="${index}" aria-label="${photo.label}" ${photo.placeholder ? "disabled" : ""}>
      ${photo.placeholder ? "" : `<img src="${photo.src}" alt="${photo.label}">`}
      <span>${photo.label}</span>
    </button>
  `).join("");

  productThumbnails.querySelectorAll(".product-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      selectGalleryImage(Number(button.dataset.photoIndex));
    });
  });

  selectGalleryImage(0);
}

function selectProduct(productKey) {
  selectedProductKey = productKey;
  const product = getSelectedProduct();

  productButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.product === productKey);
  });

  productName.textContent = product.name;
  productPrice.innerHTML = renderPrice(product);
  productDescription.textContent = product.description;
  selectedColourLabel.textContent = product.color;
  renderProductGallery();

  resetSize();
  updateSizeAvailability();
  syncHiddenFields();
  setStatus("");
}

function selectSize(button) {
  if (button.disabled) {
    return;
  }

  selectedSize = button.dataset.size;

  sizeButtons.forEach((item) => {
    item.classList.remove("selected");
    item.setAttribute("aria-pressed", "false");
  });

  button.classList.add("selected");
  button.setAttribute("aria-pressed", "true");
  sizeStatus.textContent = `Выбран размер: ${selectedSize}`;
  sizeStatus.classList.remove("error");
  syncHiddenFields();
}

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectProduct(button.dataset.product);
  });
});

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectSize(button);
  });
});

function keepRussianPhonePrefix() {
  const value = phoneInput.value.trim();

  if (!value || !value.startsWith("+7")) {
    phoneInput.value = "+7 ";
  }
}

phoneInput.addEventListener("focus", keepRussianPhonePrefix);
phoneInput.addEventListener("input", keepRussianPhonePrefix);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("");

  const formData = new FormData(orderForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const messenger = String(formData.get("messenger") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const delivery = String(formData.get("delivery") || "").trim();
  const address = String(formData.get("address") || "").trim();

  if (!selectedProductKey) {
    setStatus("Выберите расцветку", "error");
    document.querySelector("#shortsBlinds").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (!selectedSize) {
    sizeStatus.textContent = "Выберите размер";
    sizeStatus.classList.add("error");
    setStatus("Выберите размер", "error");
    document.querySelector("#sizes").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (!name) {
    setStatus("Укажите имя", "error");
    orderForm.elements.name.focus();
    return;
  }

  if ((!phone || phone === "+7") && !messenger) {
    setStatus("Укажите телефон или Telegram", "error");
    orderForm.elements.phone.focus();
    return;
  }

  if (!city) {
    setStatus("Укажите город", "error");
    orderForm.elements.city.focus();
    return;
  }

  if (!delivery) {
    setStatus("Выберите способ доставки", "error");
    orderForm.elements.delivery.focus();
    return;
  }

  if (!address) {
    setStatus("Укажите адрес доставки или пункт выдачи", "error");
    orderForm.elements.address.focus();
    return;
  }

  syncHiddenFields();

  if (orderForm.action.includes("PLACEHOLDER_FORM_ENDPOINT")) {
    setStatus("Замените PLACEHOLDER_FORM_ENDPOINT на ваш endpoint Formspree, и заявки начнут уходить на почту.", "error");
    return;
  }

  const submitButton = orderForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "ОТПРАВЛЯЕМ...";

  try {
    const response = await fetch(orderForm.action, {
      method: "POST",
      body: new FormData(orderForm),
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Formspree request failed");
    }

    orderForm.reset();
    orderForm.elements.phone.value = "+7 ";
    resetSize();
    syncHiddenFields();
    setStatus("Заявка отправлена. Я свяжусь с вами для подтверждения размера и доставки.", "success");
  } catch (error) {
    setStatus("Не получилось отправить заявку. Проверьте Formspree endpoint и попробуйте еще раз.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "ОСТАВИТЬ ЗАЯВКУ";
  }
});

selectProduct(selectedProductKey);
