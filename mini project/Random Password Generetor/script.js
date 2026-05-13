const passwordInput = document.getElementById("password");

const lengthSlider = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const strengthText = document.getElementById("strength");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");



lengthSlider.addEventListener("input", () => {

  lengthValue.innerText = lengthSlider.value;

});



generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyPassword);



function generatePassword(){

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  const numbers = "0123456789";

  const symbols = "!@#$%^&*()_+<>?/[]{}";



  let allCharacters = "";



  if(document.getElementById("uppercase").checked){

    allCharacters += uppercase;

  }



  if(document.getElementById("lowercase").checked){

    allCharacters += lowercase;

  }



  if(document.getElementById("numbers").checked){

    allCharacters += numbers;

  }



  if(document.getElementById("symbols").checked){

    allCharacters += symbols;

  }



  if(allCharacters === ""){

    alert("Please select at least one option!");

    return;

  }



  let password = "";



  for(let i = 0; i < lengthSlider.value; i++){

    const randomIndex = Math.floor(

      Math.random() * allCharacters.length

    );



    password += allCharacters[randomIndex];

  }



  passwordInput.value = password;



  checkStrength(password);

}



function copyPassword(){

  if(passwordInput.value === ""){

    alert("Generate password first!");

    return;

  }



  navigator.clipboard.writeText(passwordInput.value);



  alert("Password Copied!");

}



function checkStrength(password){

  let strength = "Weak";



  if(password.length >= 8){

    strength = "Medium";

  }



  if(

    password.length >= 12 &&

    /[A-Z]/.test(password) &&

    /[0-9]/.test(password) &&

    /[\W]/.test(password)

  ){

    strength = "Strong";

  }



  strengthText.innerText = "Strength: " + strength;

}