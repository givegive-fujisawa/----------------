//タブ切り替えボタンをクリックした場合の処理
$(".tab_switch").on("click", ".tab_btn div", function () {
  // 選んだタブ名を取得
  var selection = $(this).data("tabname");
  console.log(selection);
  //activeクラスを解除
  $(".tab_content div").removeClass("active");
  //選んだタブをactiveに
  $(".tab_content")
    .find("*[data-tabname=" + selection + "]")
    .addClass("active");
});
