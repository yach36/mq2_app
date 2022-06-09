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
require("posts");

window.$ = jQuery;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/* ------------ layout ------------*/
$(document).on("turbolinks:load", function() {
  /* headerのボタン動作 */
  // クリックするごとにクラスを取り外しする
  const $hamburgerBtn = $(".js_hamburger");
  const $hamburgerBar = $(".js_hamburger-bar");
  $hamburgerBtn.on("click", function() {
    $(this).children($hamburgerBar).toggleClass("is_active");
  });
  
  /* footerのボタン動作(ajaxを用いたカーソルの移動) */
  const $pointer = $(".js_footer_item-pointer"); // フッターのカーソル
  const $footerItem = $(".js_footer_item"); // フッターのボタン
  // カーソル位置の初期化
  const $initItem = $("#js_footer_item-1");
  const initPos = $initItem.offset();
  const initWidth = $initItem.width();
  $pointer.css({
    top: 0,
    left: initPos.left + initWidth / 2
  });
  
  // カーソルが指し示すアイテム
  let $pointingItem = $initItem;
  let itemPos;
  let itemWidth;
  // ボタンをクリックすると発火
  $footerItem.on("click", function() {
    $pointingItem = $(this);
    itemPos = $(this).offset();
    itemWidth = $(this).width();
    $pointer.animate({
      top: 0,
      left: itemPos.left + itemWidth / 2
    },
    250,
    "easeOutQuart");
  });
  
  /* 画面幅が変わればカーソルを移動 */
  $(window).on("resize", function() {
    itemPos = $pointingItem.offset();
    itemWidth = $pointingItem.width();
    $pointer.css({
      top: 0,
      left: itemPos.left + itemWidth / 2
    });
  });
});

/* ------------ posts ------------*/