function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var checkbox = document.getElementById("agreeCheckbox");

  if (username === "") {
    alert("Vui lòng nhập Username");
    return;
  }

  if (email === "") {
    alert("Vui lòng nhập Email");
    return;
  }

  if (/\s/.test(email)) {
    alert("Email không được chứa khoảng trắng");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (password === "") {
    alert("Vui lòng nhập mật khẩu");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp. Vui lòng nhập lại");
    return;
  }

  if (!checkbox.checked) {
    alert("Vui lòng chọn 'I Agree To The Terms & Conditions'");
    return;
  }

  // Đoạn mã sau này sẽ chuyển hướng người dùng đến "dannhap.html"
  // Có thể thay thế bằng đoạn mã tương ứng với chức năng của bạn
  goToHomePage();
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function goToHomePage() {
  alert("Đăng ký thành công");
  // Chuyển hướng người dùng đến "dannhap.html"
  window.location.href = "dannhap.html";
}
