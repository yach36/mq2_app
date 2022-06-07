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
  let $pointingItem;
  // ボタンをクリックすると発火
  $footerItem.on("click", function() {
    const itemPos = $(this).offset();
    const itemWidth = $(this).width();
    $pointer.animate({
      top: 0,
      left: itemPos.left + itemWidth / 2
    },
    250,
    "easeOutQuart");
    
    // let cursorNum;
    // // クリックしたitemのidを取得
    // const pointingItemId = $(this).attr("id");
    // if (pointingItemId == "js_footer_item-1") {
    //   cursorNum = 1;
    // } else if (pointingItemId == "js_footer_item-2") {
    //   cursorNum = 2;
    // }
    // $.ajax({
    //   type: "GET", // HTTPメソッド
    //   url: process.env.LOCAL_URL, // リクエスト送信先
    //   data: { cursor: cursorNum }, //送信するデータ
    //   dataType: "json"
    // })
    // .done(function(cursor) {
    //   /* レスポンス受信後の処理 */
    //   console.log(cursor);
      
    //   $pointingItem = $(`#js_footer_item-${cursor}`);
    //   const itemPos = $pointingItem.offset();
    //   const itemWidth = $pointingItem.width();
    //   // アニメーション
    //   $pointer.animate({
    //     top: 0,
    //     left: itemPos.left + itemWidth / 2
    //   },
    //   250,
    //   "easeOutQuart");
    // });
  });
});

/* ------------ posts ------------*/