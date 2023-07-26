
let qNum = 1;   // 문제 넘버링

// 정답, 오답 횟수
let correctCount = 0;
let wrongCount = 0;

while(true) {

    // 랜덤 정수 2개를 생성
    let firstNumber = Math.floor(Math.random() * 20) + 1;
    let secondNumber = Math.floor(Math.random() * 20) + 1;

    userAnswer = +prompt(`Q${qNum++}. ${firstNumber} + ${secondNumber} = ??`)

    if (userAnswer === 0) {
        alert('게임을 종료합니다!');
        break;
    }

    // 정답확인
    if (userAnswer === firstNumber + secondNumber) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('틀렸습니다!');
        wrongCount++;
    }
} // end while

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);