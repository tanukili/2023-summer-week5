$(document).ready(function() {
  $(".sidebar .nav-link").click(function(e) {
      e.preventDefault();
      $(this).parent().siblings().find(".nav-link").removeClass("active"); // 回到父層 > 同層其他項目 > 找到目標
      $(this).addClass("active");
  });
});