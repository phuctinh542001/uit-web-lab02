$(document).ready(function () {
  $("#table_register").on("click", ".muaVe", function () {
    var ngayChieu = $(".ngayChieu").val(), phim = $(".phim").find(":selected").text(), ghe = $(".choNgoi").val();

        
      (thongTinDatVe = {
        khachHang: "Nguyen Van A",
        ngayChieu,
        phim,
        suatChieu: {
          value: $(".suatChieu").find(":selected").val(),
          text: $(".suatChieu").find(":selected").text(),
        },
        phongChieu: {
          value: $(".phongChieu").find(":selected").val(),
          text: $(".phongChieu").find(":selected").text(),
        },
        ghe,
      });

    localStorage.setItem("thongTinDatVe", JSON.stringify(thongTinDatVe));
    window.location.href = "Bai4_2.html";
    return false;
  });
});



//(ghe = $(".choNgoi").val()),