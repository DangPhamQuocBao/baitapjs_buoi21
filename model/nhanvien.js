function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tinhTongLuong = function () {
    var tongLuong = this.luongCoBan;
    if ((chucVu = "sep")) {
      tongLuong = this.luongCoBan * 3;
    } else if ((chucVu = "tP")) {
      tongLuong = this.luongCoBan * 2;
    } else if ((chucVu = "nV")) {
      tongLuong = this.luongCoBan;
    }
    return tongLuong;
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "nhan vien xuat sac";
    } else if (this.gioLam < 192 && this.gioLam >= 176) {
      return "nhan vien gioi";
    } else if (this.gioLam < 176 && this.gioLam >= 160) {
      return "nhan vien kha";
    } else if (this.gioLam < 160) {
      return "nhan vien trung binh";
    }
  };
}
