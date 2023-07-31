
// 1~10사이의 랜덤정수를 생성

// Math.random() : 0.0이상 1.0미만의 랜덤실수 생성
// Math.random() * 10 : 0.0이상 10.0미만 랜덤실수 생성
// Math.floor(Math.random() * 10) 0이상 10미만 소수점을 버림
// Math.floor(Math.random() * 10) + 1   1이상 11미만 랜덤실수 생성

// x이상 y이하이 랜덤 정수 생성 공식
// Math.floor(Math.random() * (y - x +1)) + x;

// 117 ~ 123
let rn = Math.floor(Math.random() * 7) + 117;
console.log(rn);

// let rn = Math.floor(Math.random() * 10)
// console.log(rn);