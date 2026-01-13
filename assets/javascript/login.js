
document.getElementById("saveBtn").addEventListener("click", function () {
  window.location.reload();
});

function myFunctionss() {

  

  let email = document.getElementById("email").value;
  let emailError = document.getElementById("mailerror");

  let password = document.getElementById("password").value;
  let passError = document.getElementById("passworderror");

  emailError.innerHTML="";
  passError.innerHTML="";
  
  
  

 


  if (email.length == 0) {
    emailError.innerHTML = "enter your email id";
    emailError.style.color = "red";
     return false;
  }


  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "please enter this format 'ex@gmail.com'";
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
    return false;
   
  }
  else if (!/[0-9]/.test(password)) {
    passError.innerHTML = "Add number";
    return false;
    
  }
  else if (!/[*#@&]/.test(password)) {
    passError.innerHTML = "Add special character";
    return false;
    
  }
  else if (password.length < 8) {
    passError.innerHTML = "Minimum 8 characters";
    return false;
     
  }
  else {
    passError.innerHTML = "";

  }

 
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
    modal.show();
    return true;

}