function login() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Simple validation (You should add more secure validation)
        if (password < 8 && email < 6) {
            alert("email or password incorrect");
        } else {
            alert("Invalid email or password. Please try again.");
        }
        if (password === null){
            alert("please input your password");
        }
        if(email === "" && password === "") {
            alert("please enter your codeX email and password");
        }
    }