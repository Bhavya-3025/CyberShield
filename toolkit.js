const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

slider.addEventListener("input", function () {
    lengthValue.textContent = this.value;
});

function generatePassword(){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<slider.value;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("password").value=password;

}

function checkStrength(){

const password=document.getElementById("checkPassword").value;

let strength="Weak";

if(password.length>=8){

strength="Medium";

}

if(

password.length>=12 &&

/[A-Z]/.test(password) &&

/[a-z]/.test(password) &&

/[0-9]/.test(password) &&

/[^A-Za-z0-9]/.test(password)

){

strength="Strong";

}

document.getElementById("strength").textContent=

"Password Strength : "+strength;

}

function checkURL(){

let url = document.getElementById("urlInput").value.trim();

if(url.startsWith("https://")){

document.getElementById("urlResult").innerHTML=

"✅ Secure URL";

document.getElementById("urlResult").style.color="#22c55e";

}

else{

document.getElementById("urlResult").innerHTML=

"⚠ Not Secure (HTTPS not found)";

document.getElementById("urlResult").style.color="#ef4444";

}

}

generatePassword();

function copyPassword(){

    const password = document.getElementById("password");

    password.select();
    password.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password.value);

    alert("✅ Password copied!");
}