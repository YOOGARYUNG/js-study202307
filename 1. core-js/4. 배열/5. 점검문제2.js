/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

let members = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while(true) {

    // 탈출 조건
    if(members.length === 0) {
        alert(`모든 멤버가 삭제되었습니다.`);
        break;
    }
    let delTarget = prompt(`현재 멤버: [${members}]\n삭제할 멤버의 이름을 입력하세요!`);

    // delTarget을 삭제
    if (members.includes(delTarget)) {
        // 삭제 진행
        let index = members.indexOf(delTarget);
        members.splice(index,1);
        alert(`삭제 완료!\n남은 멤버: [${members}]`);
    } else {
        alert(`${delTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`)
    }
}

// while(true) {
//     // 전부 삭제되면 members길이가 0이됨
//     if (members.length === 0){
//         alert('전부 삭제되었습니다!')
//         break;
//     }
//     let dmember = prompt(`삭제할 멤버의 이름을 입력하세요!\n현재멤버 [${members}]`)

//     // members와 dmember의 이름이 같은것의 인데스번호를 추출
//     let index = members.indexOf(dmember);

//     // 이름이 맞지 않으면 인덱스 번호가 -1이 됨
//     if (index === -1) {
//         // 맞지 않을경우 continue로 코드가 스킵됨
//         alert('이름이 맞지않습니다 다시 입력해주세요!'); continue;
//     } else {
//         // 이름이 맞을경우 (인덱스번호, 1)하여 삭제
//         members.splice(index,1);
//     }
// }