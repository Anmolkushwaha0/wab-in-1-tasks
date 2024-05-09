function signup() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    // Here you can perform validation and send signup data to the server
    console.log("Sign Up:", username, email, password);
}

function signin() {
    var username = document.getElementById("signin-username").value;
    var password = document.getElementById("signin-password").value;

    // Here you can perform validation and send signin data to the server
    console.log("Sign In:", username, password);
}
