
let num1 = +prompt('첫번째 숫자');
let num2 = +prompt('두번째 숫자');
let num3 = 0;

if (num1<num2) {
    for (i = num1; i <= num2; i++){
    num3 = num3 + i
    }
    alert(`${num1}~${num2}까지의 누적합: ${num3}`);
} else if (num1>num2) {
    for (i = num2; i <= num1; i++){
        num3 = num3 + i
        }
    alert(`${num2}~${num1}까지의 누적합: ${num3}`);
}


// 1 ~ 10까지의 총합
// let x = +prompt('첫번째 숫자를 입력!');
// let y = +prompt('두번째 숫자를 입력!');

// if (x > y) {
//   let t = x;
//   x = y;
//   y = t;
// }

// let total = 0; // 총합저장
// for (let n = x; n <= y; n++) {
//   total += n; // 0 + 1 = 1
// }
// alert(`${x} ~ ${y}까지의 총합: ${total}`);

