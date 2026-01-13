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


function magnify(img, zoom) {
  let glass, w, h, bw;

  const oldGlass = document.querySelector(".img-magnifier-glass");
  if (oldGlass) oldGlass.remove();
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;

    e.preventDefault();

    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }

    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";

    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  magnify(mainImage, 2);

  document.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      mainImage.onload = () => magnify(mainImage, 2);
    });
  });
});
