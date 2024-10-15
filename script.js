const btnPlus = document.getElementById("btn-plus");
const btnNegative = document.getElementById("btn-negative");
const details = document.getElementById("details");
const iconHeart = document.querySelector("#iconHeart");
const iconSearch = document.querySelectorAll(".iconSearch");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const imgSwiper = document.querySelectorAll("img");
const modal = document.querySelector("#modal");
const removeTemplate = document.querySelector("#removeTemplate");
const xMark = document.querySelector("#x-mark");
const body=document.querySelector("body");

const addDetails = document.getElementById("add-details");

const deleteProductDetails = document.getElementById("deleteProduct-details");

const showProductDetails = document.getElementById("show-product-details");

const backToProduct = document.getElementById("back-to-Product");

const ProductReview = document.getElementById("product-review");

const showProductReview = document.getElementById("show-Product-review");

iconHeart.addEventListener("click", () => {
  iconHeart.classList.toggle("text-paya");
});

btnPlus.addEventListener("click", () => {
  details.classList = "block";
  btnPlus.className = "hidden";
  btnNegative.classList =
    "block text-paya border-b-2 border-paya border-dashed text-start w-1/2";
  btnNegative.addEventListener("click", () => {
    details.classList = "hidden";
    btnNegative.classList = "hidden";
    btnPlus.classList = "text-paya border-b-2 border-paya border-dashed";
  });
});

swiperWrapper.addEventListener(`mouseenter`, () => {
  iconSearch.forEach((item) => {
    item.classList.remove(`hidden`);
  });
});
swiperWrapper.addEventListener(`mouseleave`, () => {
  iconSearch.forEach((item) => {
    item.classList.add(`hidden`);
  });
});
swiperWrapper.addEventListener("click", () => {
  modal.classList = "block";

  removeTemplate.classList = "hidden";
});

function showImage(e) {
  let imageSrc="";
  if (e.target.tagName === "I") {
    imageSrc=e.target.nextElementSibling.src
  }


  // بررسی اینکه آیا e.target یک عنصر تصویر است
  if (e.target.tagName === "IMG") {
    // دسترسی به src تصویر
    imageSrc = e.target.src;
    // نمایش src در کنسول یا استفاده از آن
  }
    // اگر بخواهید src را به modal اضافه کنید
    modal.innerHTML = `<span class="absolute cursor-pointer top-4 right-4" id="x-mark" onclick="closeModal()"><i class="bi bi-x-lg"></i></span> <img src="${imageSrc}" alt="Image">`;
 
}

function closeModal() {
  modal.classList = "hidden";
  removeTemplate.classList = "container w-screen mt-5";
}
xMark.addEventListener("click", closeModal);

showProductDetails.addEventListener("click", () => {
  deleteProductDetails.classList = "hidden";
  addDetails.classList = "block";
  backToProduct.classList = "block";
  backToProduct.addEventListener("click", () => {
    deleteProductDetails.classList = "block";
    backToProduct.classList = "hidden";
    addDetails.classList = "hidden";
  });
});
ProductReview.addEventListener("click", () => {
  showProductReview.classList = "block p-5";
  deleteProductDetails.classList = "hidden";
  backToProduct.classList = "block";

  backToProduct.addEventListener("click", () => {
    showProductReview.classList = "hidden";
    deleteProductDetails.classList = "block";
    backToProduct.classList = "hidden";
  });
});

const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");
tabBtn.forEach((item) => {
  item.addEventListener("click", () => {
    tabBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
    
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    item.classList.add("active");
    const targetContentId = item.dataset.target;
    const targetContent = document.getElementById(targetContentId);
    targetContent.classList.add("active");
  });
});

const accordionItem=document.querySelectorAll(".acoordion-item");
accordionItem.forEach((item)=>{
  item.addEventListener("click",()=>{
    const acoordionBody=item.querySelector(".acoordion-body");
    const iconPlusCircle=item.querySelector(".bi-plus-circle");
      // بررسی اینکه آیا آیتم کلیک شده در حال حاضر باز است یا خیر
      const isOpen = !acoordionBody.classList.contains("hidden");

      // بستن تمام آیتم‌ها
      accordionItem.forEach((otherItem) => {
          if (otherItem !== item) {
              const otherBody = otherItem.querySelector(".acoordion-body");
              const otherPlusIcon = otherItem.querySelector(".bi-plus-circle");
              const otherDashIcon = otherItem.querySelector(".bi-dash-circle");

              // بستن محتوای دیگر و تنظیم آیکن‌ها
              otherBody.classList.add("hidden");
              otherPlusIcon.classList.remove("hidden");
              otherDashIcon.classList.add("hidden");
          }
      });
    
    const iconDash=item.querySelector(".bi-dash-circle")

    if (acoordionBody.classList.contains("hidden")) {
      acoordionBody.classList.remove("hidden")
      iconPlusCircle.classList.add("hidden");
      iconDash.classList.remove("hidden")
    } else {
      acoordionBody.classList.add("hidden");
      iconDash.classList.add("hidden")
      iconPlusCircle.classList.remove("hidden")
    }
  })
});