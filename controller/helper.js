function ganGiaTriChoInput(
  taiKhoan,
  tenNhanVien,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = tenNhanVien;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

function layGiaTriInput() {
  var taiKhoan = document.getElementById("tknv").value;
  console.log(`Số lượng ký tự ô tài khoản: ${taiKhoan.length}`);
  var tenNhanVien = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;

  var valid = true;
  valid =
    kiemTraRong(taiKhoan, "tbTKNV") &
    kiemTraRong(tenNhanVien, "tbTen") &
    kiemTraRong(email, "tbEmail") &
    kiemTraRong(matKhau, "tbMatKhau") &
    kiemTraRong(ngayLam, "tbNgay") &
    kiemTraRong(luongCoBan, "tbLuongCB") &
    kiemTraRong(chucVu, "tbChucVu") &
    kiemTraRong(gioLam, "tbGiolam");

  valid &= kiemTraTaiKhoan(taiKhoan, "tbTKNV");
  valid &= kiemTraTenNV(tenNhanVien, "tbTen");
  valid &= kiemTraEmail(email, "tbEmail");
  valid &= kiemTraPass(matKhau, "tbMatKhau");
  valid &= kiemTraDate(ngayLam, "tbNgay");
  valid &= kiemTraLuong(luongCoBan, "tbLuongCB");
  valid &= kiemTraChucVu(chucVu, "tbChucVu");
  valid &= kiemTraGiolam(gioLam, "tbGiolam");

  if (!valid) {
    return;
  }

  var nhanVien = new NhanVien(
    taiKhoan,
    tenNhanVien,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  return nhanVien;
}

function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}
