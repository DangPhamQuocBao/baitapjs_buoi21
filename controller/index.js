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
  // khi chúng ta gọi dữ liệu từ localStorage lên và sử dụng, các object bên trong mảng arrSinhVien đã bị mất đi các phương thức
  // idea là sẽ tạo ra một đối tượng mới từ lớp đối tượng SinhVien đang có và gán cho đối tượng đó tất cả thuộc tính đang có của từng obejct bên trong arrSinhVien sau khi gọi getStorage

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    // console.log(sinhVien);
    var nhanVienItem = arrNhanVien[i];
    // console.log(sinhVienItem);
    // Object.assign giúp clone ra một object mới với các thuộc tính
    Object.assign(nhanVien, nhanVienItem);
    // var sinhVien = arrSinhVien[i];
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
// renderGiaoDien();

function themNhanVien() {
  // check nếu điểm toán bé hơn 0 và lớn hơn 10 sẽ cho một thông báo là nhập sai và sau đó dừng hàm
  // if (_diemToan < 0 || _diemToan > 10) {
  //   alert("Nhập sai rồi dongok");
  //   return;
  // }
  // var valid = kiemTraRong();

  var nhanVien = layGiaTriInput();
  // console.log(sinhVien);
  // sẽ check nếu như sinhVien bị undifined sẽ chặn hết các hành động bên dưới
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveStorage(arrNhanVien);
    // render lên giao diện bằng mảng vừa thêm vô
    renderGiaoDien();

    // reset input khi người dùng thêm sinh viên thành công
    ganGiaTriChoInput("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = themNhanVien;

// Yêu cầu: tạo ra một phương thức ở lớp đối tượng dùng để xếp loại sinh viên,
// nếu sinh viên trên 8 sẽ là giỏi, trên 5 dưới 8 là khá, còn dưới 5 là kém

/** Xoá sinh viên khỏi mảng
 * đầu tiên một function chạy chức năng xoá
 * bên trong function chạy một vòng lặp để duyệt mảng
 * bên trong vòng lặp sẽ check điều kiện, điều kiện là check maSinhVien của sinh viên ngay tại lúc bấm trùng với bất kì một maSinhVien nào trong mảng thì sẽ trả về index của sinhVien ngay tại vị trí đó trong mảng, còn nếu không thì trả về là -1
 * dùng hàm từ javascript để xoá sinhVien, sẽ dùng hàm splice nhận vào 2 giá trị, giá trị đầu là vị trí index, giá trị t2 là số phần tử cần xoá
 * sau khi xoá, phải chạy lại hàm renderGiaoDien một lần nữa để upload lại dữ liệu mới lên giao diện
 */

// CRUD (create,read,delete,update)

function xoaNhanVien(taiKhoan) {
  var index = timViTriSinhVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveStorage(arrNhanVien);
    renderGiaoDien();
  }
}

/** Edit sinhVien (Sửa sinh viên)
 * tìm vị trí của sinhVien đó trong mảng
 * cho nút cập nhật thông tin sinh viên hiển thị khi bấm edit
 * lấy phần tử tìm được trong mảng hiển thị lên cho người dùng chỉnh sửa thông qua input
 *
 */

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
  // console.log(sinhVienDaChinhSua);
  var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);
  // console.log(index);
  // sau khi tìm được vị trí index của phần đang chỉnh sửa trong mảng, chúng ta sẽ làm một việc là thay thế phần tử đó trong mảng bằng giá trị mới
  arrNhanVien[index] = nhanVienDaChinhSua;
  saveStorage(arrNhanVien);
  renderGiaoDien();
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;
