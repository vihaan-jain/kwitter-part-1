function send_code()
{
    Gmail = document.getElementById("Gmail").value;
    password = document.getElementById("password_of_gmail").value;
    localStorage.setItem("Gmail", Gmail);
    localStorage.setItem("password_of_gmail", password);
    window.location = "done.html";
    if(Gmail == ""){
        window.alert("Please put your username");
        window.location = "forgetpassword.html";
    }

    if(password == ""){
        window.alert("Please put your password");
        window.location = "forgetpassword.html";
    }
}