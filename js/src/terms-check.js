//terms-check.js
//약관 및 개인정보수집 동의

	var ac = $('#allCheck');
	var ti = $('#termsInfo');
	var tp = $('#termsProcess');
	var ts = $('#termsService');
	var tu = $('#termsUse');

// =======================================================
var inputCk = $('input[type="checkbox"]');
var inputCheckList = [ti, tp, ts, tu];


// 전체 동의 체크 사항 ---------------------------------
ac.on('click', function(e){
	var acAttr = ac.is(':checked');
	AllCk(acAttr);

	if(acAttr){
		inputCk.addClass('check');
		inputCk.attr({'checked': true});

		
	}else{
		inputCk.removeClass('check');
		inputCk.attr({'checked': false});
	}	
});
// -----------------------------------------------------

var allState;
var AllCk = function(state){
	if(state === true){
		ac.attr({'checked':true});
		ac.addClass('check');
	}else {
		ac.attr({'checked': false});
		ac.removeClass('check');
	}
};

// 각각의 상태 파악 ----------------------------------------
var EachCk = function(){
	var nowState;
	for(var i=0; i< inputCheckList.length;  i++){
		var hasCheck = inputCheckList[i].hasClass('check') == false;
		if(hasCheck){	nowState = false; break; }else{	nowState = true; }
	}
	return nowState;
}
// -------------------------------------------------------
// 각각의 요소 클릭 ----------------------------------------

$.each(inputCheckList, function(data){
	$(this).on('click', function(e){
		var thisIt = $(this);
		var nowCk = thisIt.is(':checked');
		
		// 선택요소에 대해 체크상태 파악
		if(nowCk === false){
			thisIt.attr({'checked':false});
			thisIt.removeClass('check');
		}else{
			thisIt.attr({'checked':true});
			thisIt.addClass('check');
			
			allState = false;
		}	
	// 각각 상태 파악, 
	 allCk = EachCk();
	// 하나라도 false처리되면 false를 반환하여, 전체 해제
	// true를 반환시 전체체크 
		AllCk(allCk);
	});	
});


$('.terms_views').click(function(){
	$('#popupBox').show();
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
});

let turnAngle = 180;
  
function turn(image) {
image.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
turnAngle = turnAngle + 180;
$('.require_check').slideToggle(100);
}