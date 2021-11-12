//sms-certi.js
	//내.외국인 버튼 클릭
	$('#loc-btn').click(function(){
		$(this).addClass('active');
		$('#for-btn').removeClass('active');

		$(this).attr({'checked':true});
		$('#for-btn').attr({'checked':false});
	});

	$('#for-btn').click(function(){
		$(this).addClass('active');
		$('#loc-btn').removeClass('active');

		$(this).attr({'checked':true});
		$('#loc-btn').attr({'checked':false});
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

	//주민번호 앞자리 입력 시 칸 좁게 및 유효성검사
	var birthF = /^([0-9]{2})-?([0-1]{1})-?([0-2]{1})-?([0-3]{1})-?([0-9]{1})$/;

	$('#birthday-front').on('input',function(e){
		if(birthF.test(this.value)){
			$(this).css({'width':'70px'});
		}else{
			$(this).css({'width':'110px'});
			return false;
		}
	});

	//주민번호 뒷자리 입력 시 나머지 secret 숫자 검은색 처리
	var secret = $('.secret').find('li');
	$('#birthday-back').on('input',function(){
		if(/[0-9]/g.test(this.value)){
			secret.css({'background-color':'#333333'});
			$(this).css({'width':'20px'});
		}else{
			secret.css({'background-color':'#dadada'});
			$(this).css({'width':'20%'});
		}
	});

	//-- phoneNumber -------------------------------------
	//휴대폰번호 숫자키만 받기
	var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

	$('#phoneNumber').on('input',function(e){
		if(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(this.value)){ //한글 막기
			e.preventDefault();
			this.value = "";
		}else if (e.which != 8 && e.which != 0 //영문 e막기
							&& e.which < 48 || e.which > 57    //숫자키만 받기
							&& e.which < 96 || e.which > 105)  //텐키 받기
		{ e.preventDefault();
			this.value = "";
		}else if(regPhone.test(this.value) == false){
			$('.phoneconfirmText').show();
		}else{
			$('.phoneconfirmText').hide();
		}
			
	});


	//-- certiNumber -------------------------------------
	//인증번호 숫자만 받기
	$('#certiNumber').on('input',function(e){
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

	//실시간으로 input 값 입력되는것 확인하기
		$("#name").on("propertychange change keyup paste", function() {
			checkAll();
		});

		$('input[type="radio"]').on("propertychange change keyup paste", function() {
			checkAll();
		});
	
		$("#birthday-front").on("propertychange change keyup paste", function() {
			checkAll();
		});

		$("#birthday-back").on("propertychange change keyup paste", function() {
			checkAll();
		});
	
		$("#phoneNumber").on("propertychange change keyup paste", function() {
			checkAll();
		});

		$('input[type="checkbox"]').on("propertychange change keyup paste", function() {
			checkAll();
		});


	//유효성검사
	function checkAll(){
		var uname = document.getElementById("name");
		var inputRadio = $('input[type="radio"]');
		var nowCk = inputRadio.is(':checked');
		var birthday = document.getElementById("birthday-front");
		var birthday_back = document.getElementById("birthday-back");
		var phoneN = document.getElementById("phoneNumber");

		console.log(phoneN.value);

		var nameExp = /^[가-힣]{2,4}|[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/;
		var birthF = /^([0-9]{2})-?([0-1]{1})-?([0-2]{1})-?([0-3]{1})-?([0-9]{1})$/;
		var birthB = /^[0-9]{1}$/;
		var phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

		//이름
		if (nameExp.test(uname.value) === false){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			return;
		}

		//내.외국인
		if(nowCk === false){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			return;
		}

		//생년월일
		if (birthF.test(birthday.value) === false){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			return;
		}

		//주민번호 뒷자리
		if (birthB.test(birthday_back.value) === false){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			return;
		}

		//핸드폰번호
		if (phoneReg.test(phoneN.value) === false){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			return;
		} 

		//약관 체크여부
		if ($("#allCheck").hasClass("check") === false ){
			$("#certiBtn").prop("disabled",true);
			$('#certiBtn').css({"background-color":"#EBEBEB", "color":"#D8D8D8"});
			
			return;
		}


		//버튼 활성화
		$("#certiBtn").prop("disabled",false);
		$('#certiBtn').css({"background-color":"#333333", "color":"#FFFFFF"});
		
	}
	

	
	//==인증번호 받기 눌렀을때.=================
	$('#certiBtn').click(function(){

		$('#certiBtn').hide();

		$('#nextBtn').show();
		$(".certiDL").show();
		$('.checkconfirmText').hide();

		var display = $('#timer');
		var leftSec = 179;

		if (isRunning){
			clearInterval(timer);
			display.html("");
			startTimer(leftSec, display);
		}else{
			startTimer(leftSec, display);
		}
	});

	//==타이머======================================
	var timer = null;
	var isRunning = false;

	$("#resend").click(function(e){
					$('#timer').show();

				var display = $('#timer');
				var leftSec = 179;
				// 남은 시간
				// 이미 타이머가 작동중이면 중지
				if (isRunning){
					clearInterval(timer);
					display.html("");
					startTimer(leftSec, display);
				}else{
				startTimer(leftSec, display);
					
				}
			});
	
	function startTimer(count, display) {
							
					var minutes, seconds;
							timer = setInterval(function () {
							minutes = parseInt(count / 60, 10);
							seconds = parseInt(count % 60, 10);
			
							minutes = minutes < 10 ? "0" + minutes : minutes;
							seconds = seconds < 10 ? "0" + seconds : seconds;
			
							display.html(minutes + ":" + seconds);
			
							// 타이머 끝
							if (--count < 0) {
						clearInterval(timer);
						isRunning = false;
            $('#resend').show();
							}
					}, 1000);
							isRunning = true;
	}

	//=인증번호 입력 시 인증 확인 버튼 활성화==========
	function certiCheck(){
		var certiN = document.getElementById("certiNumber");

		var regCerti = /^([0-9]{6})$/;

		if (regCerti.test(certiN.value)===false){
			$('.confirmText').show();
			
			return false;
		}else{
			$('#nextBtn').attr("disabled",false);
		}


	}
	