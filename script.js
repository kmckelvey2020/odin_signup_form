const validatePassword = () => {
    const confirm_pw = document.getElementById("confirm_password");
    const pw = document.getElementById("password");
    const err_msg = document.querySelector(".error");

    if(`${confirm_pw.value}`!==`${pw.value}`) {
        err_msg.innerHTML = "*Passwords do not match.";
        err_msg.style.color = "rgba(210, 20, 20, 0.75)";
    } else {
        err_msg.innerHTML = "";
        err_msg.style.color = "rgba(255, 255, 255, 0.75)";
    }
}

const addListeners = () => {
    const confirm_pw = document.getElementById("confirm_password");
    confirm_pw.addEventListener('input', validatePassword);
}

addListeners();