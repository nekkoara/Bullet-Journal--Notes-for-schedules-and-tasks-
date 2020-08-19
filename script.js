$(function () {
  // $("html,body").animate({ scrollTop: 0, scrollLeft: 0 }, "1");

  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var position = target.offset().top - 100;
    // スムーススクロール
    $("body,html").animate(
      { scrollTop: position + 95, scrollLeft: 0 },
      speed,
      "swing"
    );
    $(".header-sp-nav").css("display", "none");
    $(".header-sp-icon-wrap").removeClass("is-open");
    $(".header-sp-nav").css("display", "none");
    return false;
  });

  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-icon-wrap").removeClass("is-open");
      $(".header-sp-nav").css("display", "none");

      $("html,body").removeAttr("style");
      $(window).off("touchmove.noscroll");
    } else {
      $(".header-sp-icon-wrap").addClass("is-open");
      $(".header-sp-nav").css("display", "block");

      $("html,body").css("overflow", "hidden");
      $(window).on("touchmove", function (event) {
        event.preventDefault();
      });
    }
  });

  $(".header-sp-nav").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass("is-open");

      $("html,body").removeAttr("style");
      $(window).off("touchmove.noscroll");
    }
  });
});
