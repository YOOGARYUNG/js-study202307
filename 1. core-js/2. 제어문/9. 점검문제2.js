// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 
// 난이도별 입력 횟수제한이 다르다.





let dif = +prompt('~~~~~~~~~~~~~~재미있는 UP&DOWN 게임~~~~~~~~~~~~~~\n [ 난이도를 설정하세요~~~!]\n[ 1. 상 (기회 3번) | 2. 중 (기회 5번) | 3. 하 (기회 10번) ]');

if (dif === 1){
    let rn = Math.floor(Math.random() * 50);
    for (i=0; i<3; i++) {
        let num = +prompt('[ 1 ~ 50 사이의 무작위 숫자를 3번 안에 맞춰보세요!!! ]');
        if (num === rn) {
            alert('딩동댕~~~');
            break;
        } else if (num > rn) {
            alert('DOWN')
        } else if (num < rn) {
            alert('UP')
        }
    }
    alert('틀렸습니다!');
} else if (dif === 2) {
    let rn = Math.floor(Math.random() * 50);
    for (i=0; i<5; i++) {
        let num = +prompt('[ 1 ~ 50 사이의 무작위 숫자를 3번 안에 맞춰보세요!!! ]');
        if (num === rn) {
            alert('딩동댕~~~');
            break;
        } else if (num > rn) {
            alert('DOWN')
        } else if (num < rn) {
            alert('UP')
        }
    }
    alert('틀렸습니다!');
} else if (dif === 3) {
    let rn = Math.floor(Math.random() * 50);
    for (i=0; i<10; i++) {
        let num = +prompt('[ 1 ~ 50 사이의 무작위 숫자를 3번 안에 맞춰보세요!!! ]');
        if (num === rn) {
            alert('딩동댕~~~');
            break;
        } else if (num > rn) {
            alert('DOWN')
        } else if (num < rn) {
            alert('UP')
        }
    }
    alert('틀렸습니다!');
}


