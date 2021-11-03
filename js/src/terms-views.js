//terms-views.js
//각 약관 별 내용 변환

(function($){

	$('.terms_views').click(function(){
		$('#popupBox').show();
		$('#nextBtn').hide();
	});

	$('.tv-1').click(function(){
		$('.popupH').find('h2').text("개인정보 수집/이용 동의");
		$('.popupC').find('p').text("개인정보 수집 및 이용 동의에 대한 약관내용입니다.");
	});

	$('.tv-2').click(function(){
		$('.popupH').find('h2').text("고유식별정보처리 동의");
		$('.popupC').find('p').text("고유식별 정보처리 약관내용입니다.");
	});

	$('.tv-3').click(function(){
		$('.popupH').find('h2').text("서비스 이용약관 동의");
		$('.popupC').find('p').text("서비스 이용 약관내용입니다.");
	});

	$('.tv-4').click(function(){
		$('.popupH').find('h2').text("통신사 이용약관 동의");
		$('.popupC').find('p').text("통신사 이용 약관내용입니다.");
	});

	$('.termsE').click(function(){
		$('#popupBox').hide();
		$('#nextBtn').show();
	});


})(jQuery);