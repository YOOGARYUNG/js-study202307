const $btn = document.querySelector('button');

function trackHandler() {
    console.log('Click');
}

$btn.addEventListener('click', trackHandler)

// let total = 0;
// for (let i = 0; i < 100000000; i ++) {
//     total += i;
// }
// console.log(total);

setTimeout(() => {
    console.log('3번코드!');
}, 1000);
setTimeout(() => {
    console.log('2번코드!');
}, 3000);
setTimeout(() => {
    console.log('1번코드!');
}, 5000);