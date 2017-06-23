$(document).ready(function(){
  $('.label-check').on('click', function(){
    $(".label-check").parent().css({"border": "1px solid #EFF2F7"});
    var check = $('input[type=radio]:checked');
    if (check) {
      $(this).parent().css({"border": "2px solid #00AAE4"});
    }
  });
});