function linkscroll(target) {
  $("html, body").animate({ scrollTop: $(target).offset().top }, 800, "swing");
}

$("#link_about").click(function () {
  linkscroll("#About");
});
$("#link_bicycle").click(function () {
  linkscroll("#Bicycle");
});
