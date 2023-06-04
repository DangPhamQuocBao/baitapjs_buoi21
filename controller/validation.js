function kiemTraRong(checkInput, idThongBao) {
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Xin nhập vào ô này";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}
function kiemTraTaiKhoan(checkInput, idThongBao) {
  var soLuongKyTu = /^[a-z0-9_-]{4,6}$/;
  console.log(checkInput.length);
  var hopLe = soLuongKyTu.test(checkInput);
  console.log(`tài khoản: ${hopLe}`);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào tối thiểu 4 ký tự và tối đa 6 ký tự";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var emailHople = regexEmail.test(checkInput);
  if (emailHople) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng text@text.text";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraTenNV(checkInput, idThongBao) {
  var letters = /^([a-zA-Z ]){1,30}$/;
  var hopLe = letters.test(checkInput);
  console.log(`tenNV: ${hopLe}`);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraPass(checkInput, idThongBao) {
  var passValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/;
  var hopLe = passValid.test(checkInput);
  console.log(`passValid: ${hopLe}`);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraDate(checkInput, idThongBao) {
  var dateValid = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;
  var hopLe = dateValid.test(checkInput);
  console.log(`dateValid: ${hopLe}`);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraLuong(checkInput, idThongBao) {
  // /^1000000*(?:[1-9][0-9]?|20000000)$/;
  if (checkInput >= 1000000 && checkInput <= 20000000) {
    console.log(`luong: true`);
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    console.log(`luong: false`);
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraChucVu(checkInput, idThongBao) {
  if (
    checkInput == "Sếp" ||
    checkInput == "Trưởng phòng" ||
    checkInput == "Nhân viên"
  ) {
    console.log(`chuc vu: true`);
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    console.log(`chuc vu: false`);
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}

function kiemTraGiolam(checkInput, idThongBao) {
  if (checkInput >= 80 && checkInput <= 200) {
    console.log(`gio lam: true`);
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    console.log(`gio lam: false`);
    document.getElementById(idThongBao).innerHTML =
      "Xin nhập vào đúng định dạng";
    document.getElementById(idThongBao).style.display = "block";
    return false;
  }
}
