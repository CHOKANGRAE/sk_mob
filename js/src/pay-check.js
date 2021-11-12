//payment.js
//consent.js
//구매진행 및 서비스 가입 이용 동의
function checkForm() {

	//결제수단 선택
		if($(":input:radio[id='phone']:checked").val()){
			return true;
		}else if($(":input:radio[id='credit-card']:checked").val()){
			return false;
		}

}

//-- pay ----------------------------------------------
	//구매진행 동의 체크
	var pc = $('#payCheck');
	var inputCk = $('input[type="checkbox"]');

	pc.on('click', function(e){
		var pcAttr = pc.is(':checked');

		if(pcAttr){
			inputCk.addClass('check');
			inputCk.attr({'checked': true});
			$(".payBtn").prop("disabled",false);
			$('.payBtn').addClass('action');
		}else{
			inputCk.removeClass('check');
			inputCk.attr({'checked': false});
			$(".payBtn").prop("disabled",true);
			$('.payBtn').removeClass('action');
		}	
	});

//-- consent ------------------------------------------
	//이용 동의 체크
	var cc = $('#consentCheck');
	var inputCk = $('input[type="checkbox"]');

	cc.on('click', function(e){
		var ccAttr = cc.is(':checked');

		if(ccAttr){
			inputCk.addClass('check');
			inputCk.attr({'checked': true});
			$(".nextBtn").prop("disabled",false);
			$('.nextBtn').addClass('action');
		}else{
			inputCk.removeClass('check');
			inputCk.attr({'checked': false});
			$(".nextBtn").prop("disabled",true);
			$('.nextBtn').removeClass('action');
		}	
	});

