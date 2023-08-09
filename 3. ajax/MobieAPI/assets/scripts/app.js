
// 할일 목록 렌더링 - db.json에 있는 todos를 get요청으로 fetch해서 가져와서 렌더링
// 새로운 할일 추가 - 할일을 쓰고 더하기 누르면 post요청으로 db.json에 객체 추가, 렌더링
// 할일 삭제 - 엑스 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
// 할일 체크 기능 - 체크박스를 누르면 put, patch요청으로 db.json에 done값을 반대값으로 수정
// 할일 수정 기능 - 초록색 버튼을 누르면 수정모드로 진입(인풋창 활성화)
//                 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고 db.json에서도 수정

const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');

// step1. db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos = (url, method='GET', payload=null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById('single-todo');

  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector('li').dataset.id = id; // data-id 속성 부여
    $newLi.querySelector('.text').textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
    // console.dir($checkbox);
    $checkbox.checked = done;

    // if (done) $checkbox.parentNode.classList.add('checked');
    done && $checkbox.parentNode.classList.add('checked');
    
    $todoList.appendChild($newLi);
  });
};

// =========== 앱 실행 =========== //
const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();