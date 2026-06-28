document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let contacts=JSON.parse(localStorage.getItem("contacts")) || [];

contacts.push({

name,

email,

message,

date:new Date().toLocaleString()

});

localStorage.setItem("contacts",JSON.stringify(contacts));

document.getElementById("success").textContent=

"✅ Message Saved Successfully!";

this.reset();

});