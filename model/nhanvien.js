function NhanVien(
  taiKhoan,
  tenNhanVien,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam,
  loaiNhanVien
) {
  this.taiKhoan = taiKhoan;
  this.tenNhanVien = tenNhanVien;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.loaiNhanVien = loaiNhanVien;

  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      return this.luongCoBan * 2;
    } else if (this.chucVu == "Nhân viên") {
      return this.luongCoBan * 1;
    }
  };
  this.xepLoai = function () {
    var gioLam = 8 * 30;

    if (this.gioLam < 160) {
      return "Nhân viên trung bình";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      return "Nhân viên khá";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    }
  };
}
