// hàm giúp gán giá trị mới cho input
function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

// hàm tìm vị trí sinh viên dựa vào mã sinh viên
function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    // item ở đây là một sinhVien nằm trong array arrSinhVien nên mới chấm tới thuộc tính maSinhVien
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}

function layGiaTriInput() {
  // lấy dữ liệu người dùng

  var _taiKhoan = document.getElementById("tknv").value;
  //   console.log(_maSinhVien.length);
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value;
  //   console.log(_khoaHoc);
  var _chucVu = document.getElementById("chucvu").value * 1;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  valid =
    kiemTraRong(_taiKhoan, "tbTKNV") &
    kiemTraRong(_hoTen, "tbTen") &
    kiemTraRong(_email, "tbEmail") &
    kiemTraRong(_matKhau, "tbMatKhau") &
    kiemTraRong(_ngaySinh, "tbNgay") &
    kiemTraRong(_khoaHoc, "tbLuongCB") &
    kiemTraRong(_diemToan, "tbChucVu") &
    kiemTraRong(_diemLy, "tbGiolam");

  valid &= kiemTraEmail(_email, "tbEmail");

  // ở đây chúng ta kiểm tra biến valid, nếu valid là false thì sẽ return không chạy những đoạn lệnh bên dưới
  if (!valid) {
    return;
  }

  // khi lấy được dữ liệu, gọi tới lớp đội tượng sinh viên và tạo ra đối  tượng sinh viên
  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

// Hàm lưu dữ liệu xuống local
function saveStorage(arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

// Hàm lấy giá trị từ local lên và sử dụng
function getStorage() {
  // check điều kiện nếu như key gọi tới không có dưới local
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    // nếu như arrSinhVienLocal có giá trị sẽ lấy giá trị đó gán mới vào cho mảng arrSinhVien đang có
    arrNhanVien = arrNhanVienLocal;
  }
}
