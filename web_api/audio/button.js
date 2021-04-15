// 무료 효과음 소스
// https://www.soundjay.com/

// 사용된 버튼 소스
//  https://www.soundjay.com/button-sounds-2.html
// button-16.mp3 다운로드

// 생성자 함수로 Audio 객체 생성
function button_click() {
  var audio = new Audio('button-16.mp3');
  audio.play();
}

// DOM api로 audio element 얻기
function button2_click() {
  var node = document.querySelector('#audio1');
  node.play();
}
