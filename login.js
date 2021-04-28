  function formValidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var confirm_password= document.getElementById("confirm_password").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding="10px";

  if(name.length < 5){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(number) || number.length != 11){
    text = "Please Enter Valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if(password == "") {
    text = "please Enter Valid Password";
    error_message.innerHTML = text;
    return false;
  }
  if(password.length < 8) {
    text = "Password must be at least 8 characters";
    error_message.innerHTML = text ;
    return false
  }
  
  if(password.length > 15) {
    text = "Password must not exceed 15 characters";
    error_message.innerHTML = text ;
    return false;
  }
  if(confirm_password == "") {
    text = "Please Confirm password";
    error_message.innerHTML = text;
    return false;
  }

  if(password != confirm_password){
    text = "Password are not the same";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form sucessfuly submited")
  return true
}











