$(document).ready(function() {
  $(".sidebar .nav-link").click(function(e) {
      // e.preventDefault(); 有加的話，連結會被取消動作
      $(this).parent().siblings().find(".nav-link").removeClass("active"); // 回到父層 > 同層其他項目 > 找到目標
      $(this).addClass("active");
  });
});