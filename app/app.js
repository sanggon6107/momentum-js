const logInInput = document.querySelector("#logInForm input");
const logInBtn = document.querySelector("#logInForm #logInBtn");


function onClickLogInBtn(){
    console.log("Hello, " + logInInput.value);
}

logInBtn.addEventListener("click", onClickLogInBtn);