// error message
const alert = document.getElementById('alert')
 const nameErr = document.getElementById('nameErr');
 const gmailErr = document.getElementById('gmailErr');
 const passErr = document.getElementById('passErr');
 setTimeout(()=>{
   if(alert){
     alert.style.display = "none";
   }else if(nameErr || gmailErr || passErr){
    nameErr.style.display = "none";
    gmailErr.style.display = 'none';
    passErr.style.display = 'none';
   }
  },6000)

  // password require
  var myInput = document.getElementById("pass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
// password hidden
document.querySelector('#passSpan').addEventListener("click",eyeHideFun)
const passClick = document.getElementById('pass');
function eyeHideFun(){
if(passClick.type == "password"){
  passClick.type = "text";
}
setTimeout(()=>{
  passClick.type = "password"
},8000)
}
