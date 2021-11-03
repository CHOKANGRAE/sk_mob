//terms-check.js
//약관 및 개인정보수집 동의

(function($){
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
		$("#confirmBtn").prop("disabled",false);
		$('#confirmBtn').css({"background-color":"black", "color":"white"});
	}else{
		inputCk.removeClass('check');
		inputCk.attr({'checked': false});
		$("#confirmBtn").prop("disabled",true);
		$('#confirmBtn').css({"background-color":"#eee", "color":"#ccc"});
		$('#nextBtn').attr("disabled",true);
	}	
});
// -----------------------------------------------------

var allState;
var AllCk = function(state){
	if(state === true){
		ac.attr({'checked':true});
		ac.addClass('check');
		$("#confirmBtn").prop("disabled",false);
		$('#confirmBtn').css({"background-color":"black", "color":"white"});
	}else {
		ac.attr({'checked': false});
		ac.removeClass('check');
		$("#confirmBtn").prop("disabled",true);
		$('#nextBtn').attr("disabled",true);
		$('#confirmBtn').css({"background-color":"#eee", "color":"#ccc"});
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

})(jQuery);