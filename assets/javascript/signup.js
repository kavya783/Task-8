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




document.getElementById("saveBtn").addEventListener("click", function () {
  window.location.reload();
});

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

function showLogin() {
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
}

function showSignup() {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars i");

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((s, index2) => {
        index1 >= index2
          ? s.classList.add("active")
          : s.classList.remove("active");
      });
    });
  });
});

function signup() {


  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameerror");
  let email = document.getElementById("signupEmail").value;

  let signupEmailError = document.getElementById("signupEmailerror");
  let password = document.getElementById("signupPassword").value;
  let signupPassError = document.getElementById("signupPassworderror");
  let rePassword = document.getElementById("repassword").value;
  let rePassError = document.getElementById("re-passworderror");
  let phone = document.getElementById("phone").value;
  let phoneError = document.getElementById("phoneerror");

  nameError.innerHTML = "";
  signupEmailError.innerHTML = "";
  signupPassError.innerHTML = "";
  rePassError.innerHTML = "";
  phoneError.innerHTML = "";

  if (name.length == 0) {
    nameError.innerHTML = "Please Enter  your name";
    nameError.style.color = "red";
    return false;
  }
  if (!/^[A-Z]/.test(name)) {
    nameError.innerHTML = "Name must start with capital letter";
    nameError.style.color = "red";
    return false;

  }
  else if (/[0-9]/.test(name)) {
    nameError.innerHTML = "Numbers  are  not allowed";
    nameError.style.color = "red";
    return false;
  }
  else if (/[@#&*]/.test(name)) {
    nameError.innerHTML = "Special characters are not allowed";
    nameError.style.color = "red";
    return false;
  }
  else if (name.length < 3) {
    nameError.innerHTML = "Name must be at least 3 characters";
    nameError.style.color = "red";
    return false;
  }


  else {
    nameError.innerHTML = "";

  }


  if (email.length == 0) {
    signupEmailError.innerHTML = "Enter your email id";
    signupEmailError.style.color = "red";
    return false;
  }


  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    signupEmailError.innerHTML = "Please enter this format 'ex@gmail.com'";
    signupEmailError.style.color = "red";
    return false;
  }
  else {
    signupEmailError.innerHTML = "";


  }


  if (password.length == 0) {
    signupPassError.innerHTML = "Enter your password";
    signupPassError.style.color = "red";
    return false;

  }
  else if (!/[A-Z]/.test(password)) {
    signupPassError.innerHTML = "Add uppercase letter";
    signupPassError.style.color = "red";
    return false;

  }
  else if (!/[a-z]/.test(password)) {
    signupPassError.innerHTML = "Add lowercase letter";
    return false;

  }
  else if (!/[0-9]/.test(password)) {
    signupPassError.innerHTML = "Add number";
    return false;

  }
  else if (!/[*#@&]/.test(password)) {
    signupPassError.innerHTML = "Add special character";
    return false;

  }
  else if (password.length < 8) {
    signupPassError.innerHTML = "Minimum 8 characters";
    return false;

  }
  else {
    signupPassError.innerHTML = "";

  }

  if (rePassword.length == 0) {
    rePassError.innerHTML = "Please enter conform password";
    rePassError.style.color = "red";
    return false;

  }

  else if (password !== rePassword) {
    rePassError.innerHTML = "Passwords do not match";
    rePassError.style.color = "red";
    return false;

  }
  else {
    rePassError.innerHTML = "";

  }


  if (phone.length == 0) {
    phoneError.innerHTML = "Enter your phone number";
    phoneError.style.color = "red";
    return false;

  }
  if (!/^[6-9]/.test(phone)) {
    phoneError.innerHTML = "Phone number must start with 6-9.";
    phoneError.style.color = "red";
    return false;
  }
  else if (!/^\d{10}$/.test(phone)) {
    phoneError.innerHTML = "Phone number must be exactly 10 digits.";
    phoneError.style.color = "red";
    return false;
  }

  else {
    phoneError.innerHTML = "";

  }
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.show();



}

function login() {
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("mailerror");
  let password = document.getElementById("password").value;
  let passError = document.getElementById("passworderror");
  emailError.innerHTML = "";
  passError.innerHTML = "";
  if (email.length == 0) {
    emailError.innerHTML = "Enter your email id";
    emailError.style.color = "red";
    return false;
  }


  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "Please enter this format 'ex@gmail.com'";
    emailError.style.color = "red";
    return false;
  }
  else {
    emailError.innerHTML = "";


  }


  if (password.length == 0) {
    passError.innerHTML = "Enter your password";
    passError.style.color = "red";
    return false;

  }
  else if (!/[A-Z]/.test(password)) {
    passError.innerHTML = "Add uppercase letter";
    passError.style.color = "red";
    return false;

  }
  else if (!/[a-z]/.test(password)) {
    passError.innerHTML = "Add lowercase letter";
    passError.style.color = "red";
    return false;

  }
  else if (!/[0-9]/.test(password)) {
    passError.innerHTML = "Add number";
    passError.style.color = "red";
    return false;

  }
  else if (!/[*#@&]/.test(password)) {
    passError.innerHTML = "Add special character";
    passError.style.color = "red";
    return false;

  }
  else if (password.length < 8) {
    passError.innerHTML = "Minimum 8 characters";
    passError.style.color = "red";
    return false;

  }
  else {
    passError.innerHTML = "";

  }
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.show();

}

const stars = document.querySelectorAll(".stars i");
const ratingText = document.getElementById("rating-text");

const messages = {
  1: "Bad😔",
  2: "Average 😢",
  3: "Good 🙂",
  4: "Very Good ☺️",
  5: "Excellent😍"
};

stars.forEach((star, index) => {
  star.addEventListener("click", () => {

    stars.forEach(s => s.classList.remove("active"));

    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }


    ratingText.innerText = messages[index + 1];
  });
});


