- onChange
    
    ```jsx
    const [author, setAuthor] = useState("홍길동");
    
    onChange={(e) => { // 매개변수인 이벤트 객체 e
    	console.log(e.target.value);
    	setAuthor(e.target.value);
    }}
    ```

- 여러 줄 입력 받기 위해 textarea 태그 사용 → 사용 방법은 input 태그와 비슷
    
    ```jsx
    <textarea
    	value={content}
    	onChange={(e) => {
    		setContent(e.target.value);
    	}}
    />
    ```

- alert
    
    ```jsx
    const handleSubmit = () => {
    	if (state.author.length < 1) { // 조건문
    		alert("작성자는 최소 1글자 이상 입력해주세요");
    		// focus
    		return;
    }
    ```

- 작성자 input에 대한 focus
    
    ```jsx
    const authorInput = useRef();
    ```
    
    ```jsx
    <input
    	ref={authorInput} 
    	name="author"
    	type="txt"
    	value={state.author}
    	onChange={handleChangeDiary}
    />
    ```

- 데이터 사용하는 방법
    - it에는 diaryList 배열의 요소 하나하나가 it으로 바뀌어 들어옴
    - 객체의 점 표기법으로 작성자에 접근 가능
        
        ```jsx
        {diaryList.map(it) => (
        	<div>
        		<div>작성자 : {it.author}</div>
        	</div>
        )}
        ```

- 컴포넌트 트리
    - App 컴포넌트
      - → DiaryList 컴포넌트
      - → DiaryEditor 컴포넌트
    - 다음과 같을 때, 같은 레벨끼리는 데이터를 주고받을 수 없음
    - 즉, DiaryList 컴포넌트와 DiaryEditor 컴포넌트가 서로 데이터 주고받을 수 없음
    - React는 단방향으로만 데이터가 흐름
    - 그러면 DiaryList 컴포넌트에서 작성한 일기를 DiaryEditor 컴포넌트에 추가 불가?
        - 가능함
        - 리액트의 상태인 state를 Editor와 List의 공통 부모 요소로 끌어올려서 해결
            1. DiaryList 컴포넌트와 DiaryEditor 컴포넌트의 공통 부모인 <App/> 컴포넌트가 일기 데이터를 state로 가지고 있음 → [data,setData]
            2. 이 데이터 state 값을 DiaryList 컴포넌트에게 전달하면서 List를 렌더링하도록 함
            3. 상태 변화 함수인 setData를 DiaryEditor 컴포넌트에게 prop으로 전달해줌
