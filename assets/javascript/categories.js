

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");

const suggestions = ["Apple", "Banana", "Blueberry", "Cherry", "Biryani", "Cake", "Idly", "Dosa", "Upma", "Mysore Bonda", "Poori", "Chapathi", "Eggs", "Sandwich", "Burger", "Samosa", "Chicken", "Mango", "Orange", "Peach", "Pear", "Pineapple", "Strawberry"];

searchInput.addEventListener("input", function () {
  const inputValue = this.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (inputValue.length === 0) {
    return;
  }
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
function myFunction() {

  fetch('../../assets/json/2.json')

    .then(response => response.json())
    .then(data => {

      const container = document.getElementById("categories-container");
      container.innerHTML = " ";

      const post = data.filter(product => product.category);
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
      
 <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">

    <div class="card product-container h-100 shadow">

      <img src="${product.img}" class="card-img-top"
        style="height:200px; object-fit:cover;">

      <div class="card-body d-flex flex-column">
      <span>
      
        <h5 class="card-title">${product.name}</h5></h5>
        </span>

        <div class="text-danger mb-1">₹${originalCost}</div>

         <span class="mb-2">
          <span class="text-warning">${stars}</span>
          <span class="text-success">(${product.rating})</span>
        </span>
        <span class=ps-3>
        <button class="btn btn-sm mt-auto"
          style="background:${product.buttonColor};color:white;">
          ${product.buttonType}
        </button>
         <button class="btn btn-sm mt-auto "
          style="background:${product.buttoncolor};color:white;">
          ${product.buttontype}
        </button>
        </span>
      </div>
    </div>
  </div>


        `;
      });

      container.innerHTML = string;


    })
    .catch(err => {
      console.error("Error loading products:", err);
      const container = document.getElementById("product-container");
      container.innerHTML = "<p style='color:red;'>Failed to load products. Please try again later.</p>";
    });

}

