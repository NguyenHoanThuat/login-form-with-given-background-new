admin = {
  tenDangNhap: "admin",
  password: "admin"
}


function checkForm() {
if(document.form.tenDangNhap.value === "") {
  document.getElementById("passError").innerHTML = "Vui lòng nhập lại tên đăng nhập của bạn.";
  document.form.tenDangNhap.focus();
  return false;
}

if(document.form.password.value === "") {
  document.getElementById("passError").innerHTML = "Vui lòng nhập lại mật khẩu của bạn.";
  document.form.password.focus();
  return false;
}

if(document.form.tenDangNhap.value !== admin.tenDangNhap) {
  document.getElementById("passError").innerHTML = "Tên đăng nhập hoặc mật khẩu của bạn không đúng.";
  document.form.tenDangNhap.focus();
  return false;
}

if(document.form.password.value !== admin.password) {
  document.getElementById("passError").innerHTML = "Tên đăng nhâp hoặc mật khẩu của bạn không đúng.";
  document.form.password.focus();
  return false;
}
}

function onChange() {
  if(document.form.tenDangNhap.value === "") {
    document.getElementById("passError").innerHTML = "Vui lòng nhập lại tên đăng nhập của bạn.";
    document.form.tenDangNhap.focus();
    return false;
  }
  
  if(document.form.password.value === "") {
    document.getElementById("passError").innerHTML = "Vui lòng nhập lại mật khẩu của bạn.";
    document.form.password.focus();
    return false;
  }
}
