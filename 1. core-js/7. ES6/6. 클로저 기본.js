
// 자바스크립트의 함수는 또 다른 함수를 리턴 할 수 있음.
// function add(n1, n2) {
//     return n1 + n2;
// }

const Calculator = () => (n1, n2) => n1 + n2;


const result = Calculator();
console.log(result(5, 8));

console.log((Calculator())(7, 4));

console.log('===========================');

/*
let count = 0; // 전역변수

// 카운트를 증가시키는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());
count = 999;
console.log(increase());    // ??
*/

/*
const increase = () => {
    let count = 0;
    return ++count;
}
console.log(increase());
console.log(increase());
console.log(increase());
*/

// 카운트를 증가시키는 함수를 리턴하는 클로저를 생성
// const increaseClosure = () => {
//     let count = 0;
//     return () => ++count;
// };

// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());
// count=999;
// console.log(increase());

// 즉시실행 함수 : 1회성 호출 함수를 만들 때 주로 사용

// function add(n1, n2) {
//     return n1 + n2;
// }

const r1 = (function (n1, n2) {
    return n1 + n2;
})(10, 20);

console.log(`r1: ${r1}`);


const increase = (() => {
    let count = 0;
    return () => ++count;   // 리턴에 있는 함수가 increase로 들어감
})();

console.log(increase());
console.log(increase());
count=999;
console.log(increase());
