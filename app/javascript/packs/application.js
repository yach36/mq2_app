// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("jquery");
require("jquery-easing");


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).on("turbolinks:load", function() {
  /* headerのボタン動作 */
  // クリックするごとにクラスを取り外しする
  const $hamburgerBtn = $(".js_hamburger");
  const $hamburgerBar = $(".js_hamburger-bar");
  $hamburgerBtn.on("click", function() {
    $(this).children($hamburgerBar).toggleClass("is_active");
  });
  
    /* footerのボタン動作 */
  // ポインタの位置の初期化
  const $pointer = $(".js_footer_item-pointer");
  // URLによってセレクタを選択
  let $initSelector;
  let href = location.href; // 現在のURLを取得
  let localURL = "https://10c04ef926f34ba287b26bfa645b38a4.vfs.cloud9.us-west-2.amazonaws.com/";
  let hrefList = href.split(localURL); // URLをスラッシュで区切る
  let hrefLast = hrefList[hrefList.length - 1]; // URLの末尾を取得
  if (hrefLast == "") {
    $initSelector = $("#js_footer_item-1");
  } else if (hrefLast == "hoge/index") {
    $initSelector = $("#js_footer_item-2");
  }
  
  const initPos = $initSelector.offset();
  const initWidth = $initSelector.width();
  $pointer.css({
    top: 0,
    left: initPos.left + initWidth / 2
  });
  
  // クリックするとその要素をポイントする
  const $footerItem = $(".js_footer_item");
  $footerItem.on("click", function() {
    const itemPos = $(this).offset();
    const itemWidth = $(this).width();
    $pointer.animate({
      top: 0,
      left: itemPos.left + itemWidth / 2
    },
    250,
    "easeOutQuart");
  });
});