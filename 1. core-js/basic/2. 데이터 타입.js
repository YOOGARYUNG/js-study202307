
let age1 = 5; // 10진수: 5, 2진수: 101
let age2 = '5';   // 10진수: 85, 2진수: 1010101

age1 + age2;

// js는 정수, 실수 구분하지 않고 모두 실수처리
let num = 2;
console.log(typeof num);
console.log(5 / num);

// 문자 타입
let s1 = 'str1';
let s2 = "str2";
let s3 = `str3`; // 백틱 ``
console.log(typeof s3);

let tag = '<ul>\n<li><a href="#">link</a></li></ul>';
console.log(tag);

let tag_ = `<ul>
<li>
<a href="#">link2</a>
</li>
</ul>`;
console.log(tag_);

let userName = '뽀로로';
let userAge = 5;

// let message = '제이름은 ' + userName + '나이는' + userAge + '살이에요~';

let message = `제 이름은 ${userName}이고 나이는 ${userAge}살이에요!`;

console.log(message);

// 논리 타입
let flag = false;
console.log(typeof flag);

// undefined타입과 null타입
// undefined : 변수만들고 값 안넣어놓은 상태     (실수)
// null : 의도적으로 값이 없다는 표현을 하는 상태 (고의)

let address = '충남 청양군 읍내리';

address = null;

console.log(address);