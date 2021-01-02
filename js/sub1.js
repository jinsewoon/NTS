//sub1
$(function(){
  $(".numbering > li > a").click(function(){
    if( $(this).hasClass("on")  == false ){
      $(".numbering > li > a").removeClass("on");
      $(this).addClass("on");
    }else{
      $(this).removeClass("on");
    }
    return false;
  });
  //ellipsis
  $("table > tbody > tr > td:nth-child(2) > a").each(function(){
        var length = 30; //표시할 글자수 정하기
        $(this).each(function(){
            if( $(this).text().length >= length ){
                $(this).text( $(this).text().substr(0,length)+'...')
                //지정할 글자수 이후 표시할 텍스트
            }
        });
    });
});
