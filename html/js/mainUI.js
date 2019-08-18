$(function(){

	//브라우저 업데이트
	if (navigator.userAgent.match(/MSIE 7/)) {
		$('.ie7').show();
    };

	//스킵 네비게이션
	$('.skip a').click(function(){
		$('#content').attr('tabindex', '0').focus();
		return false;
	});
	
	//서브페이지 상단 이미지 제어
	function sub_move() {
		var w_width = $(window).width();
		if(w_width < 1920){
			if(w_width > 1065){
				$('.wrap').css('margin-left',(w_width - 1920)/2);
			} else {
				$('.wrap').css('margin-left', -427.5);
			};
		} else {
			$('.wrap').css('margin-left','auto');
		};
	};
	
	sub_move();
	
	$(window).resize(function(){
		sub_move();
	});
	
	//FAQ 제어
	$('dl.qna dd').hide();
	$('dl.qna > dt > a').click(function(){
		$('dl.qna > dt > a').removeClass('on');
		if($(this).parent().next().css('display')=='none'){
			$('dl.qna dd').hide();
			$(this).parent().next('dd').show();
			$(this).parent().children('a').addClass('on');
		} else if($(this).parent().next().css('display')=='block'){
			$('dl.qna dd').hide();
			$(this).parent().children('a').removeClass('on');
		};
	});
});