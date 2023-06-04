arrNhanVien = [];

function renderGiaoDien() {
  var content = "";

  for (i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arrNhanVien[i];
    Object.assign(nhanVien, nhanVienItem);
    var tinhLuong = nhanVien.tongLuong();
    var xepLoai = nhanVien.xepLoai();
    content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.tenNhanVien}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${tinhLuong}</td>
        <td>${xepLoai}</td>
        <td>
          <button onclick="editNhanVien('${nhanVien.taiKhoan}')" class="btn btn-warning" data-toggle="modal"
      data-target="#myModal">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
        </tr>
        `;
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien() {
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    renderGiaoDien();
  }
}

function xoaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderGiaoDien();
  }
}

function editNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.tenNhanVien,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
}

function capNhatThongTin() {
  var nhanVienDaSua = layGiaTriInput();
  var index = timViTriNhanVien(nhanVienDaSua.taiKhoan);
  arrNhanVien[index] = nhanVienDaSua;
  renderGiaoDien();
}

function kiemTraNV() {
  var obj = { arr: arrNhanVien };
  var txtSearch = document.getElementById("searchName").value;
  var filterArray = obj.arr.filter(function (e) {
    if (txtSearch == "Nhân viên xuất sắc") {
      return e.gioLam >= 192;
    } else if (txtSearch == "Nhân viên giỏi") {
      return e.gioLam >= 176 && e.gioLam < 192;
    } else if (txtSearch == "Nhân viên khá") {
      return e.gioLam >= 160 && e.gioLam < 176;
    } else if (txtSearch == "Nhân viên trung bình") {
      return e.gioLam < 160;
    }
  });

  var content = "";
  for (i = 0; i < filterArray.length; i++) {
    var nhanVien = filterArray[i];
    var tinhLuong = nhanVien.tongLuong();
    var xepLoai = nhanVien.xepLoai();
    content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.tenNhanVien}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${tinhLuong}</td>
        <td>${xepLoai}</td>
        <td>
          <button onclick="suaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-warning" data-toggle="modal"
      data-target="#myModal">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
        </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
