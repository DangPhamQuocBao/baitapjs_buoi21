// Hàm kiểm tra xem người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
  // check xem input đó được nhập dữ liệu vô hay không, nếu không có thì báo lỗi và trả về một kết quả false, nếu có thì trả về true
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập trường dữ liệu này";
    return false;
  }
}

function kiemTraEmail(checkInput, idThongBao) {
  // kiểm tra email bằng một regex
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // sử dụng phương thức .test để kiểm tra xem email nhập vào có phù hợp hay không
  // khi sử dụng .test sẽ trả về giá trị true hoặc false
  var hopLe = regexEmail.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email";
    return false;
  }
}
