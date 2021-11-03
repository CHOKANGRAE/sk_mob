/* pinpad.js (보안키패드) */

(function () {
  //비밀번호 클릭 시 핀패드 슬라이드업/다운
  
  //핀패드 비밀번호 작동
  var input = '';

  var dots = document.getElementsByClassName('dot'),
  numbers = document.getElementsByClassName('number');
  dots = Array.from(dots);
  numbers = Array.from(numbers);

  var numbersBox = document.getElementsByClassName('numbers')[0];

  $(numbersBox).on('click', '.number', function (evt) {
    var number = $(this);

    number.addClass('grow');
    input += number.index() + 1;
    $(dots[input.length - 1]).addClass('active');

    setTimeout(function () {
      number.className = 'number';
    }, 1000);
  });

  // 지우기(backspace)
  $('.backspace').click(function(e){
    e.preventDefault();

    
    
  });

  // 재배열
  
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '&nbsp;', '&nbsp;' ];

  console.log(arr);
  
  $('.reload').click(function($){

    const shuffleArray = arr => {
      for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

  });
	
})(jQuery);