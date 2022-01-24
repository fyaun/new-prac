$(function() {
// drawer.js
 $( '.drawer' ).drawer();


// ページ内リンク
  $('a[href^="#"]').on('click', function(){

    //headerの高さを取得
    let header = $('.header').innerHeight();
    // idを取得
    let id = $(this).attr('href');
    // 位置を取得
    let position = $(id).offset().top - header;
    

      $("html, body").animate({
          scrollTop: position
      }, 500);

      return false;
  });
  // wowjs

  new WOW().init()

  //google form
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  // 全部入力したら色を変える
  let $submit = $( '#js-submit' )

  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
      if(
          $( '#js-form input[type="text"]' ).val() !== "" &&
          $( '#js-form input[type="email"]' ).val() !== "" &&
          $( '#js-form input[name="entry.114012828"]' ).prop( 'checked' ) === true
      ) {
          //入力されたとき
          $submit.prop( 'disabled', false )
          $submit.addClass( '-active' )
      } else {
          //入力されていないとき
        $submit.prop( 'disabled', true )
        $submit.removeClass( '-active' )
      }
  })




});

