const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");

const suggestions = ["Apple", "Banana", "Blueberry", "Cherry", "Biryani", "Cake", "Idly", "Dosa", "Upma", "Mysore Bonda", "Poori", "Chapathi", "Eggs", "Sandwich", "Burger", "Samosa", "Chicken", "Mango", "Orange", "Peach", "Pear", "Pineapple", "Strawberry"];

searchInput.addEventListener("input", function () {
  const inputValue = this.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (inputValue.length === 0) return;

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().startsWith(inputValue)
  );

  filteredSuggestions.forEach(item => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.innerText = item;

    suggestionItem.addEventListener("click", function () {
      searchInput.value = this.innerText;
      suggestionsList.innerHTML = "";
    });

    suggestionsList.appendChild(suggestionItem);
  });
});

document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.innerHTML = "";
  }
});



function myFunction(str) {
  fetch('./assets/json/1.json')
    .then(response => response.json())
    .then(data => {

      const container = document.getElementById("product-container");
      container.innerHTML = " ";

      const post = data.filter(product => product.category === str);
      let string = " ";


      post.forEach(product => {

        const rating = product.rating;
        let stars = " ";
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars += "<i class='bi bi-star-fill'></i>"
          }
          else {
            stars += "<i class='bi bi-star'></i>";
          }
        }
        const originalCost = product.cost;
        const discount = product.discount;
        const discountedPrice =
          originalCost - (originalCost * discount / 100);
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



        string += `
         <div class="swiper-slide d-flex justify-content-center mt-5 mb-5">
    <div class="card product-container">
     <img src="${product.img}" class="card-img-top h-100 w-100 ">

              <div class="card-body ">
                <h5 class="card-title fs-5">${product.name}</h5>

                <h6 class="text-success">
                  Food Cost:
                  <del class="text-danger">₹${originalCost}</del>
                </h6>

                <h6 class="text-primary">
                  Final Cost:
                  ₹${discountedPrice.toFixed(2)}
                  (${discount}% off)
                </h6>

                <h6>
                  Rating:
                  <span class="text-warning">${stars}</span>
                  <span class="text-success">(${product.rating})</span>
                </h6>

               <div class="d-flex justify-content-start">
  <button class="btn btn-sm"
    style="background:${product.buttonColor};color:white;">
    ${product.buttonType}
  </button>
</div>

              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = string;

      swiper.update();
      swiper.slideTo(0);
    })

    .catch(err => {
      console.error("Error loading products:", err);
      const container = document.getElementById("product-container");
      container.innerHTML = "<p style='color:red;'>Failed to load products. Please try again later.</p>";
    });
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 15,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    }
  }
});

