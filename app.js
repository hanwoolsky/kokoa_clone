const loginBtn = document.getElementById("login-btn");

function onLoginBtnClick(){
    const userName = document.getElementById("login-id").value;
    const password = document.getElementById("login-pw").value;

    if (userName == "hello" && password == "1234"){
        location.replace("friends.html");
    }
}

loginBtn.addEventListener("click", onLoginBtnClick);