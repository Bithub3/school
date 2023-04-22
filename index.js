var form = document.getElementById("form");
form.addEventListener("submit",(e) =>{
  var name = document.getElementById("name")
  var email = document.getElementById("email")
  var message = document.getElementById("message")
  if (name.value == "" || email.value == "" || message.value == ''){
    e.preventDefault();
    name.classList.add("is-invalid");
    email.classList.add("is-invalid");
    message.classList.add("is-invalid");
    
  }else{
    name.classList.add("is-valid");
    email.classList.add("is-valid");
    message.classList.add("is-valid");
    message.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
   name.classList.remove("is-invalid");
  }
  
} )