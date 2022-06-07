$(document).on("turbolinks:load", function() {
  $(".posts_input").on("keyup", function() {
    /* 非同期通信でspotifyの曲検索の結果を表示する */
    // 検索文字列
    let seq = $(this).val();
    // 空文字ならば結果を表示しない
    if (!seq) {
      $(".result").find("li").remove();
    }
    $.ajax({
      /* ajaxを用いて非同期通信 */
      type: "GET", //HTTPメソッド
      url: process.env.LOCAL_URL, //リクエスト先のURL
      data: { search: seq }, // 送信するデータ
      dataType: "json" // レスポンスのデータ形式
    })
    .done(function(tracks) {
      /* レスポンスを受信したときの処理 */
      console.log(tracks);
      // 検索結果をクリア
      $(".result").find("li").remove();
      // 検索結果を表示
      for (let i = 0; i < tracks.length; i++) {
        $(".result").append(`<li>${tracks[i]["name"]}</li>`);
      }
    });
  });
});