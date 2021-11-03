//sms-certi.js

(function($){

	//-- name -------------------------------------------
	//이름 유효성검사
	/*
	var NM = $('#name');
	NM.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		var ck  = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
		var relTest = ck.test( rel );

		if(rel == ""){
			$('.userName_area').find('div').addClass('action');
			return false;
		}else if( !relTest ){
			$('.userName_area').find('div').addClass('action');
			return false;
		}else{
			$('.userName_area').find('div').removeClass('action');
			return true;
		}
	});
	*/

	//내.외국인 버튼 클릭
	$('#local').click(function(){
		$(this).addClass('active');
		$('#foreigner').removeClass('active');
	});

	$('#foreigner').click(function(){
		$(this).addClass('active');
		$('#local').removeClass('active');
	});

	//-- birthday ----------------------------------------
	//생년월일 숫자만 입력
	var birth = $('.birthday_area').find('input');
	birth.on('input', function(e){
		e.preventDefault();

		if(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(this.value)){ //한글 막기
			e.preventDefault();
			this.value = "";
		}else if (e.which != 8 && e.which != 0 //영문 e막기
			&& e.which < 48 || e.which > 57    //숫자키만 받기
			&& e.which < 96 || e.which > 105){ //텐키 받기
			e.preventDefault();
			this.value = "";
			}
	});

	//-- phoneNumber -------------------------------------
	//휴대폰번호 유효성 검사
	/*
	var BTF = $('#birthday-front');
	BTF.on('blur', function(e){
		e.preventDefault();

		var rel = $(this).val();
		var bk = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
		var relTest = bk.test( rel );

		if(rel == ""){
			return false;
		}else if( !relTest ){
			return false;
		}else{
			return true;
		}
	});
	*/

	//휴대폰번호 인증 버튼 활성화
		$('#phoneNumber').on('input',function(e){
			if(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(this.value)){ //한글 막기
				e.preventDefault();
				this.value = "";
			}else if (e.which != 8 && e.which != 0 //영문 e막기
				&& e.which < 48 || e.which > 57    //숫자키만 받기
				&& e.which < 96 || e.which > 105){ //텐키 받기
				e.preventDefault();
				this.value = "";
			}else if(this.value.length >= this.maxLength){
				this.value = this.value.slice(0, this.maxLength);
				if($('#phoneNumber').length > 10){
					$('#phoneCerti').attr("disabled",true);
					$('#phoneCerti').addClass('active');
					
				}else{
					$('#phoneCerti').attr("disabled",false);
					$('#phoneCerti').removeClass('active');
				}
			}
		});

	//-- certiNumber -------------------------------------
	//인증번호 확인 버튼 활성화
	//휴대폰번호 인증 버튼 활성화
	$('#certiNumber').on('input',function(e){
		if(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(this.value)){ //한글 막기
			e.preventDefault();
			this.value = "";
		}else if (e.which != 8 && e.which != 0 //영문 e막기
			&& e.which < 48 || e.which > 57    //숫자키만 받기
			&& e.which < 96 || e.which > 105){ //텐키 받기
			e.preventDefault();
			this.value = "";
		}else if(this.value.length >= this.maxLength){
			this.value = this.value.slice(0, this.maxLength);
			if($('#certiNumber').length >= 6){
				$('#certiButton').attr("disabled",true);
			}else{
				$('#certiButton').attr("disabled",false);
			}
		}
	});

	//인증번호 확인 버튼 클릭 시 색 변화
	$('#certiButton').click(function(){
		$(this).addClass('active');
	});

	//--확인-------------------------------------

	$('#confirmBtn').click(function(){
		$('#nextBtn').attr("disabled",false);
		$('#nextBtn').addClass('action');

	});

	

})(jQuery);