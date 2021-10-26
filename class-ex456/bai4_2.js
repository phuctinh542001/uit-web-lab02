$(document).ready(function () {
  var thongTinDatVe = JSON.parse(localStorage.getItem("thongTinDatVe"));
  $(".khachhang").text(thongTinDatVe.khachHang);
  $(".ngayChieu").text(thongTinDatVe.ngayChieu);
  $(".phim").text(thongTinDatVe.phim);
  $(".suatChieu").text(thongTinDatVe.suatChieu.text);
  $(".phongChieu").text(thongTinDatVe.phongChieu.text);
  var tongTien = 0;
  thongTinDatVe.ghe.forEach((element) => {
    var tien =
      parseFloat(thongTinDatVe.phongChieu.value) *
      parseFloat(thongTinDatVe.suatChieu.value);
    var tr = `<tr><td>${element}</td><td>${tien} đ</td></tr>`;
    tongTien += tien;
    $("#table_ticket_info > tbody:last-child").append(tr);
  });
  $(".tongTien").text(tongTien+" đ");
});
