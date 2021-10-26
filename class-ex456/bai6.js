$(document).ready(function () {
    

    $("#table_register").on("click", ".dangKy", function () {
      var date = (new Date()).toISOString().split('T')[0];
      var ngayDangKy = date;
      var hoTenKhach = $(".tenKhach").val();
      var diaChi = $(".diaChi").val();
      var ghiChu = $(".ghiChu").val();
      var nguoiLon = $(".slnguoilon").val();
      var treEm = $(".sltreem").val();
      (thongTinDangKy ={
        ngayDangKy,
        nhanVien: "Nguyễn Văn C",
        hoTenKhach,
        diaChi,
        tour: {
          value: $(".tour").find(":selected").val(),
          text: $(".tour").find(":selected").text(),
        },
        ghiChu,
        nguoiLon,
        treEm
      });
      localStorage.setItem("thongTinDangKy", JSON.stringify(thongTinDangKy));
      window.location.href = "Bai6_2.html";
      return false;
      });
  });








  /*
  var hoTen = $(".tenKhach").text();
    var diaChi = $(".diaChi").text();
    var Tour = $(".tenKhach").val();
    var hoTen = $(".tenKhach").text();
    var soluongnguoilon = parseInt($(".slnguoilon").text());
    var soluongtreem = parseInt($(".sltreem").text()); 

    onclick="window.open('Bai6_2.html', '_blank')"


    $(".hoTen_2").text(hoTen);
        $(".diaChi_2").text(diaChi);
        $(".tour_2").val(Tour);


        var 
    hoTen = $(".tenKhach").text(),
    diaChi = $(".diaChi").text(),
    Tour = $(".tour").val(),
    var hoTen = $(".tenKhach").text(),
    soluongnguoilon = parseInt($(".slnguoilon").text()),
    soluongtreem = parseInt($(".sltreem").text()),
    thanhTienNguoiLon = soluongnguoilon * 3500000,
    thanhTienTreEm = soluongtreem * 1750000,
    tongTien = thanhTienNguoiLon + thanhTienTreEm;
  */