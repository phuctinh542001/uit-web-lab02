$(document).ready(function () {
  var tinhTien = function () {
    var tongTien = 0;
    $(".result").each(function () {
        tongTien += parseInt($(this).text()) || 0;
    });
    $(".tongTien").text(tongTien);
  };

  $("#gioHang").on("change input", ".soLuong", function () {
    var dongHienTai = $(this).closest("tr");
    var soLuong = $(this).val();
    var donGia = dongHienTai.find(".donGia")[0].value;
    var thanhTien = dongHienTai.find(".result");
    var res = soLuong * parseInt(donGia);
    thanhTien.text(isNaN(res) ? "" : res);
    tinhTien();
  });

  $("#gioHang").on("change input", ".donGia", function () {
    var dongHienTai = $(this).closest("tr");
    var donGia = $(this).val();
    var soLuong = dongHienTai.find(".soLuong")[0].value;
    var thanhTien = dongHienTai.find(".result");
    var res = soLuong * parseInt(donGia);
    thanhTien.text(isNaN(res) ? "" : res);
    tinhTien();
  });

  $("#gioHang").on("click", ".delete", function () {
    var dongHienTai = $(this).closest("tr");
    dongHienTai.find(".soLuong")[0].value = "";
    dongHienTai.find(".donGia")[0].value = "";
    dongHienTai.find(".result").text("");
    tinhTien();
  });
  
});
