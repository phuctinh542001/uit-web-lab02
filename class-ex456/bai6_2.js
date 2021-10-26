$(document).ready(function () {
  var thongTinDangKy = JSON.parse(localStorage.getItem("thongTinDangKy"));
  console.log(thongTinDangKy);
  $(".ngayDangKy").text(thongTinDangKy.ngayDangKy);
  $(".nhanVien").text(thongTinDangKy.nhanVien);
  $(".hoTen_2").text(thongTinDangKy.hoTenKhach);
  $(".diaChi_2").text(thongTinDangKy.diaChi);
  $(".tour_2").text(thongTinDangKy.tour.text);
  $(".ghiChu_2").text(thongTinDangKy.ghiChu);
  $(".slnguoilon_2").text(thongTinDangKy.nguoiLon);
  $(".sltreem_2").text(thongTinDangKy.treEm);

  var tienNguoiLon = parseFloat(thongTinDangKy.tour.value);
  var tienTreEm = parseFloat(thongTinDangKy.tour.value) / 2;

  var noNguoiLon = parseFloat(thongTinDangKy.nguoiLon);
  var noTreEm = parseFloat(thongTinDangKy.treEm);

  var thanhTienNguoiLon = tienNguoiLon * noNguoiLon;
  var thanhTienTreEm = tienTreEm * noTreEm;

  var tongTien = thanhTienNguoiLon + thanhTienTreEm;

  $(".donGiaNguoiLon").text(tienNguoiLon+" đ");
  $(".donGiaTreEm").text(tienTreEm+" đ");

  $(".thanhTienNguoiLon").text(isNaN(thanhTienNguoiLon) ? "0 đ" : thanhTienNguoiLon+" đ");
  $(".thanhTienTreEm").text(isNaN(thanhTienTreEm) ? "0 đ" : thanhTienTreEm+" đ");

  $(".tongTien").text(isNaN(tongTien) ? "0 đ" : tongTien+" đ");
});

//isNaN(res) ? "" : res
//$(".thanhTienNguoiLon").text(thanhTienNguoiLon+" đ");