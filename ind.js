document.getElementById("form").addEventListener("submit", function(event) {

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
  
    if (username === "csec" && password === "csec ") {
        alert("Login successful!");
        window.location.href = "welcome.html";
   
    } else {
        alert("Invalid credentials. ");
        
        event.preventDefault();
       
    }
  });