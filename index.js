function goToHomePage() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;
  
    if (username.trim() === "") {
      alert("Vui lòng nhập tài khoản");
      return;
    }
  
    if (password.trim() === "") {
      alert("Vui lòng nhập mật khẩu");
      return;
    }
  
    if (username.trim() === "nguyentiendat" && password.trim() === "nguyentiendat12@") {
        alert("Đăng nhập thành công")
      // Successful login, redirect to the home page
      window.location.href = "home.html";
    } else {
        
      alert("Sai tài khoản hoặc mật khẩu");
      // Clear the input fields
      document.getElementById("login").value = "";
      document.getElementById("password").value = "";
    }
  }
  
  
  
  
  
  
  