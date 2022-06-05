// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).on("turbolinks:load", function() {
  // headerのボタン動作
  const $hamburgerBtn = $(".js_hamburger");
  const $hamburgerBar = $(".js_hamburger-bar");
  $hamburgerBtn.on("click", function() {
    $(this).children($hamburgerBar).toggleClass("is_active");
  });
  
  // footerのボタン動作
  const $footerItem = $(".js_footer_item");
  $footerItem.on("click", function() {
    $footerItem.not(this).removeClass("is_active");
    $(this).addClass("is_active");
  });
});