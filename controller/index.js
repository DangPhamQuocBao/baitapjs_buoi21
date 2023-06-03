// // console.log("asd");
// // var nhanVien = new NhanVien();

// var arrNhanVien = [];
// //render
// function render() {
//   var content = "";

//   for (var i = 0; i < arrNhanVien.length; i++) {
//     var nhanVien = arrNhanVien[i];
//     var phanLoai = nhanVien.xepLoai();
//     var tinhLuong = nhanVien.tinhTongLuong();
//     content += `
//   <tr>
//   <td>${nhanVien.taiKhoan}</td>
// <td>${nhanVien.hoTen}</td>
// <td>${nhanVien.email}</td>
// <td>${nhanVien.ngayLam}</td>
// <td>${nhanVien.chucVu}</td>
// <td>${tinhLuong}</td>
// <td>${phanLoai}</td>
// <td><em class="fa fa-cog"></em></t  d>
// </tr>
// `;
//   }

//   document.getElementById("tableDanhSach").innerHTML = content;
// }
// //them nhan vien
// function themNhanVien() {
//   var _taiKhoan = document.getElementById("tknv").value;
//   var _hoTen = document.getElementById("name").value;
//   var _email = document.getElementById("email").value;
//   var _matKhau = document.getElementById("password").value;
//   var _ngayLam = document.getElementById("datepicker").value;
//   var _luongCoBan = document.getElementById("luongCB").value * 1;
//   var _chucVu = document.getElementById("chucvu").value;
//   var _gioLam = document.getElementById("tbGiolam").value * 1;
//   var nhanVien = new NhanVien(
//     _taiKhoan,
//     _hoTen,
//     _email,
//     _matKhau,
//     _ngayLam,
//     _luongCoBan,
//     _chucVu,
//     _gioLam
//   );
//   arrNhanVien.push(nhanVien);
//   render();
// }
// document.getElementById("btnThemNV").onclick = themNhanVien;
// {
// }

//

//

//

var arrSinhVien = [];

getStorage();

renderGiaoDien();

function renderGiaoDien() {
  var content = "";

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();

    var nhanVienItem = arrNhanVien[i];

    Object.assign(nhanVien, nhanVienItem);

    var tinhTien = nhanVien.tinhTongLuong();
    var xepLoai = nhanVien.xepLoai();
    content += `
  <tr>
    <td>${nhanVien.taiKhoan}</td>
   <td>${nhanVien.hoTen}</td>
  <td>${nhanVien.email}</td>
  <td>${nhanVien.ngayLam}</td>
   <td>${nhanVien.chucVu}</td>
   <td>${tinhTien}</td>
   <td>${xepLoai}</td>
   <td><em class="fa fa-cog"></em></t  d>
              <td>
                <button onclick="xoaSinhVien('${nhanVien.taiKhoan}')" class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
               
              </td>
            </tr>
  `;
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}

function themNhanVien() {
  var nhanVien = layGiaTriInput();

  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveStorage(arrNhanVien);

    renderGiaoDien();

    ganGiaTriChoInput("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = themNhanVien;

function xoaNhanVien(taiKhoan) {
  var index = timViTriSinhVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveStorage(arrNhanVien);
    renderGiaoDien();
  }
}

function editNhanVien(taiKhoan) {
  document.getElementById("btnCapNhat").style.display = "inline-block";
  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
  document.getElementById("tknv").readOnly = true;
}

function capNhatThongTinNhanVien() {
  var nhanVienDaChinhSua = layGiaTriInput();

  var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);

  arrNhanVien[index] = nhanVienDaChinhSua;
  saveStorage(arrNhanVien);
  renderGiaoDien();
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;
