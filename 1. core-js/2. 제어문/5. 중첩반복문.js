
let cnt = 0;
for (let i = 0; i < 3; i++) {       // 3회
    for (let j = 0; j < 2; j++) {   // 2회
        // console.log(`${i}, ${j}`);  // 3 x 2 = 6회 반복
        for (let k = 0; k < 4; k++) {
            cnt++;
        }
    }
}
console.log(`총 반복 횟수: ${cnt}회`);


// 구구단 출력
let level;

for(level = 2; level <= 9; level++) {
    console.log(`==== 구구단 ${level}단 ====`);
    for (let line =1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
}
console.log('====================');
// console.log(`==== 구구단 2단 ====`);
// console.log(`2 x 1 = 2`);
// console.log(`2 x 2 = 4`);
// console.log(`2 x 3 = 6`);
// console.log(`2 x 4 = 8`);
// console.log(`2 x 5 = 10`);
// console.log(`2 x 6 = 12`);
// console.log(`2 x 7 = 14`);
// console.log(`2 x 8 = 16`);
// console.log(`2 x 9 = 18`);
// console.log('====================');