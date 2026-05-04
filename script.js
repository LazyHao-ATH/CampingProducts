function register(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email && password){
        localStorage.setItem("user_email", email);
        localStorage.setItem("user_password", password);

        alert("Sign up successful!");
    } else {
        alert("Fill all fields");
    }
}

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    let savedEmail = localStorage.getItem("user_email");
    let savedPassword = localStorage.getItem("user_password");

    if(email === savedEmail && password === savedPassword){

        // REMEMBER ME SYSTEM
        if(remember){
            localStorage.setItem("remembered", "true");
            localStorage.setItem("remember_email", email);
        } else {
            localStorage.setItem("remembered", "false");
            localStorage.removeItem("remember_email");
        }

        alert("Login successful!");
        window.location.href = "index.html";

    } else {
        alert("Wrong email or password");
    }
}