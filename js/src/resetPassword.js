//keypadConfirm.js
//결제 비밀번호 등록 확인

// 슬라이드토글
$('#pin').click(function(){
	$('.pw').slideToggle();
});

// 보안키패드
class FastPin {
constructor() {
	this.input = "";
	this.loader = false;
	this.pinLength = 6;
	this.submit;

	this.submitCondition();
	this.removeLastCondition();

	$(document).delegate(".pin__numbers--item", "click", (e) => {
		let _this = $(e.currentTarget);
		let type = _this.data("type");
		switch (type) {
			case "number":
				if (this.input.length < this.pinLength) {
					let number = _this.text();
					this.clickNumber(number);
				}
				break;
			case "remove-last":
				if (this.input.length > 0) {
					this.removeLast();
				}
				break;
			case "submit":
				if (this.input.length === this.pinLength) {
					this.submit(this.input);
				}
				break;
		}
		this.submitCondition();
		this.removeLastCondition();
	});
}

onSubmit(func) {
	this.submit = func;
}

submitCondition() {
	if (this.input.length === this.pinLength) {
		$('.pin__numbers--item[data-type="submit"]').removeClass("disabled");
	} else {
		$('.pin__numbers--item[data-type="submit"]').addClass("disabled");
	}
}

removeLastCondition() {
	if (this.input.length > 0) {
		$('.pin__numbers--item[data-type="remove-last"]').removeClass("disabled");
	} else {
		$('.pin__numbers--item[data-type="remove-last"]').addClass("disabled");
	}
}

clickNumber(number) {
	this.input += number;
	this.setDot(this.input.length);
}

removeLast() {
	this.removeDot(this.input.length);
	this.input = this.input.slice(0, -1);
}

getInput() {
	return this.input;
}

setDot(index) {
	$(`.pin__dots--item:nth-child(${index})`).addClass("active");
}

removeDot(index) {
	$(`.pin__dots--item:nth-child(${index})`).removeClass("active");
}

resetFastPin() {
	$(`.pin__dots--item`).removeClass("active");
	this.input = "";
	this.submitCondition();
	this.removeLastCondition();
}

correct() {
	$(".pin__dots").addClass("correct");
	setTimeout(() => {
		$(".pin__dots").removeClass("correct");
	}, 500);
	this.resetFastPin();
}

wrong() {
	$(".pin__dots").addClass("wrong");
	setTimeout(() => {
		$(".pin__dots").removeClass("wrong");
	}, 500);
	this.resetFastPin();
}

}
let pin = new FastPin();
pin.onSubmit((input) => {
if (input.length === pin.pinLength) {

	setTimeout(() => {

		if (pin.getInput() === "000000") {
			pin.correct();
			location.href="resetPasswordConfirm.html";
		} else {
			pin.wrong();
		}
	});
}
});

// 재배열
var pN = $('.pin__number__div')
var nA = $('.number_area');
var len = $('.number_area').length;

$('.reload').click(function(){

    pN.each(function(){

        nA.sort(function(){
            var temp = parseInt(Math.random()*len);
            var temp1 = parseInt(Math.random()*len);
            return temp1-temp;
        }).appendTo(pN);
		});
});