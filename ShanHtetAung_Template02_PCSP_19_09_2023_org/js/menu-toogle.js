$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = -1999;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }

    $('#global-navi').stop().animate({
      right: rightVal
    }, 200);
  });
});