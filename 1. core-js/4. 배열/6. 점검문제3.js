/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

let members = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];


while(true) {

    let delTarget = prompt(`현재 멤버: [${members}]\n수정할 멤버의 이름을 입력하세요!`);

    // delTarget을 삭제
    if (members.includes(delTarget)) {
        // 수정 
        // 새로운 이름을 입력받아야 함
        let newName = prompt(`새로운 이름을 입력해주세요!`);
        let index = members.indexOf(updateTarget);

        members[index] = newName

        members.splice(index,1);
        alert(`수정 완료!\n남은 멤버: [${members}]`);
    } else {
        alert(`${updateTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`)
    }
}


// while(true) {
//     let upmember = prompt(`삭제할 멤버의 이름을 입력하세요!\n현재멤버 [${members}]`)

//     // members와 dmember의 이름이 같은것의 인데스번호를 추출
//     let index = members.indexOf(upmember);
//     if (index === -1) {
//         alert('이름이 맞지않습니다 다시 입력해주세요!'); continue;
//     } else {
//         let rename = prompt('바꿀 이름을 입력해주세요!')
//         members.splice(index, 1, rename);
//     }
// }