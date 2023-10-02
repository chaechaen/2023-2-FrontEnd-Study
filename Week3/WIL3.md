# 투두리스트를 구현하며 배운 내용 정리

- 글자 위에 마우스 커서를 올릴 때 커서 모양이 바뀌도록 하는 것을 css에서 지정할 수 있는 것을 알게 되었다. todo 리스트의 아이템에 커서를 올렸을 때 손가락으로 가리키는 모양이 되도록 cursor: pointer를 작성하였다.

- getElementByID(‘’).value를 이용해 html에서 해당 id 값을 가진 요소의 값을 가져오고, .value를 통해 사용자가 입력한 값을 가져올 수 있다는 것을 배웠다. 따라서 getElementByID(‘inputTodo’).value를 통해 사용자가 입력한 todo 아이템 값을 가져올 수 있었다.

- 버튼을 만들 때 onclick=“function()”을 이용해 클릭했을 때 실행되는 함수를 나타낼 수 있다는 것을 배웠다. html에서 onclick=“addTodoList()”를 이용해 자바스크립트의 함수 addTodoList를 호출했고, 이를 통해 새로운 리스트의 아이템을 추가하도록 했다.

- 자바스크립트의 textContent는 텍스트를 추가하는 프로퍼티이며, element.textContent=‘’로 사용할 수 있다는 것을 알게 되었다. deleteButton.textContent=“x”를 이용해 자바스크립트에서 delete 버튼의 내용을 x로 설정했다.

- css에서 list-style 속성을 이용해 리스트의 불릿 모양을 지정할 수 있다는 것을 배웠다. 불릿을 없애기 위해 list-style: none를 사용하였다.