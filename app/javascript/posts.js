$(document).on("turbolinks:load", function() {
  $(".posts_input").on("keyup", function() {
    let seq = $(this).val();
    if (!seq) {
      $(".result").find("li").remove();
    }
    $.ajax({
      type: "GET",
      url: "https://10c04ef926f34ba287b26bfa645b38a4.vfs.cloud9.us-west-2.amazonaws.com",
      data: { search: seq },
      dataType: "json" // レスポンスのデータ形式
    })
    .done(function(tracks) {
      $(".result").find("li").remove();
      for (let i = 0; i < tracks.length; i++) {
        $(".result").append(`<li>${tracks[i]["name"]}</li>`);
      }
    });
  });
});