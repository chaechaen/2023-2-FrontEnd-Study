# Hello World

- 웹사이트는 HTML, CSS, JavaScript 3가지 언어로 만들어짐
    - HTML5: 요소들의 배치와 내용을 기술하는 언어
    - CSS3: 색, 크기, 애니메이션 등을 정의하는 스타일링을 위한 언어
    - JavaScript: 웹사이트에 활력을 부여하는 언어
- 개발자 도구를 활성화 시켜 console 탭의 프롬포트에 자바스크립트 사용 가능
    
    ```jsx
    console.log("안녕 자바스크립트");
    ```
    

---

# 변수와 상수

- 변수 선언
    
    ```jsx
    let age = 25;
    console.log(age); // 변수의 값 출력
    ```
    
- 변수명 규칙
    - 언더스코어, $는 변수명에 사용 가능
        
        ```jsx
        let ag_$e = 25;
        console.log(ag_$e);
        ```
        
    - 숫자 사용하고 싶으면 뒤에 붙이기
    - 자바스크립트가 쓰는 키워드 (예약어) 사용 불가
- let 대신 var 사용 가능
    
    ```jsx
    var age = 25;
    console.log(age);
    ```
    
    - let은 var와 달리 변수를 중복해서 선언하는 것을 허용하지 X
- 상수는 let의 자리에 const 사용
    
    ```jsx
    const age = 25;
    age = 30; // 선언 이후 값을 절대 바꿀 수 없음
    ```
    
    - 선언과 동시에 초기화 해야 함

---

# 자료형과 형 변환

- Primitive Type (원시 타입)
    - 한 번에 하나의 값만 가질 수 있음
    - 하나의 고정된 저장 공간 이용
    
    ```jsx
    let number = 12;
    ```
    
- Non-Primitive Type (비 원시 타입)
    - 한 번에 여러 개의 값을 가질 수 있음
    - 여러 개의 고정되지 않은 동적 공간 사용
    
    ```jsx
    let array = [1, 2, 3, 4];
    ```
    
- 숫자형 원시 타입
    
    ```jsx
    let age = 25; // 정수
    let tall = 175.9 // 실수
    
    console.log(age + tall); // 연산 가능
    
    let inf = Infinity; // 무한대
    let minusInf = -Infinity; // 음의 무한대
    let nan = NaN; // 수학적인 계산 실패
    ```
    
- 문자열 원시 타입
    
    ```jsx
    let name = "winter";
    let name2 = "홍길동";
    let name3 = `winter ${name2}`; // 백틱 사용
    ```
    
- boolean형 원시 타입
    
    ```jsx
    let isSwitchOff = false;
    ```
    
- Null형 원시 타입
    
    ```jsx
    let a;
    console.log(a); // 이 경우는 not defined
    
    let a = null; // null은 이렇게 써줘야 함
    ```
    
- 묵시적 형 변환
    
    ```jsx
    let numA = 12;
    let numB = "2"; // 자바스크립트가 묵시적으로 숫자 2로 변환시킴
    console.log(numA * numB); // 숫자 * 문자열 가능
    ```
    

---

# 연산자

- 산술 연산자
    
    ```jsx
    let a = 1;
    let b = 2;
    console.log(a + b);
    console.log(a * b);
    console.log(a - b);
    console.log(a / b);
    console.log(a % b);
    ```
    
- 연결 연산자
    
    ```jsx
    let a = "1";
    let b = "2";
    coonsole.log(a + b); // 출력: 12
    ```
    
- 비교연산자
    
    ```jsx
    let compareA = 1 == "1";
    console.log(compareA); // 출력: true
    // =은 대입 연산자, ==은 비교 연산자
    // ==은 값만 비교
    ```
    
    ```jsx
    let compareA = 1 ==="1";
    console.log(compareA); // 출력: false
    // ===은 자료형까지 비교
    ```
    

---

# 조건문

- if문
    
    ```jsx
    let a = 3;
    
    if (a >= 7) {
    	console.log("7 이상입니다.");
    } else if (a >= 5) {
    	console.log("5 이상입니다.");
    } else {
    	console.log("5 미만입니다.");
    }
    ```
    
- switch case문
    
    ```jsx
    let country = "ko";
    
    switch (country) {
    	case "ko":
    		console.log("한국");
    		break;
    	case "cn":
    		console.log("중국");
    		break;
    	case "jp":
    		console.log("일본");
    		break;
    	default:
    		console.log("미분류");
    		break;
    }
    ```
    

---

# 함수

- function
    
    ```jsx
    function getArea(width, height) { // 매개변수
    	let area = width * height;
    	console.log(area);
    } // 함수 선언식, 함수 선언 방식의 함수 생성
    
    getArea(100, 200);
    console.log("함수 실행 완료");
    ```
    

---

# 함수 표현식 & 화살표 함수

- 함수 호이스팅
    - 함수 선언식으로 만들어진 함수는 프로그램 실행 전 코드의 최상단으로 끌어올려짐
    
    ```jsx
    console.log(helloB())
    
    let helloA = function() {
    	return "안녕하세요 여러분";
    } // 함수 표현식
    
    function helloB() {
    	return "안녕하세요 여러분";
    } // 함수 선언식
    ```
    
- 화살표 함수
    
    ```jsx
    let helloA = () => {
    	return "안녕하세요 여러분";
    }
    ```
    

---

# 콜백 함수

- 함수의 파라미터로 함수를 넘기는 것
    
    ```jsx
    function checkMood(mood, goodCallback, badCallback) {
    	if (mood === "good") {
    		goodCallback();
    	} else {
    		badCallback();
    	}
    }
    
    function cry() {
    	console.log("ACTION :: CRY");
    }
    
    function sing() {
    	console.log("ACTION :: SING");
    }
    
    checkMood("sad", sing, cry);
    ```
    

---

# 객체

- 객체 프로퍼티
    
    ```jsx
    let person = {
    	key: "value", // 프로퍼티 (객체 프로퍼티)
    	key1: 123,
    	key2: true,
    	key3: undefined,
    	key4: [1, 2],
    	key5: function () {}
    }; // 객체 리터럴 방식
    
    console.log(person);
    ```
    

---

# 배열

- 배열 인덱스
    
    ```jsx
    let arr = [1, 2, 3, 4, 5]; // 배열 리터럴
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    ```
    
- 프로퍼티
    
    ```jsx
    let arr = [1, 2, 3, 4, 5]
    arr.push({key: "value"}); // 요소 추가
    console.log(arr);
    console.log(arr.length); // 프로퍼티를 객체처럼 저장
    ```
    

---

# 반복문

- for문
    
    ```jsx
    for (let i = 1; i <= 100; i++) {
    	console.log("winter");
    }
    ```
    

---

# 배열 내장 함수

- forEach
    
    ```jsx
    const arr = [1, 2, 3, 4];
    arr.forEach(function (elm) {
    	console.log(elm * 2);
    });
    ```
    
- map
    
    ```jsx
    const arr = [1, 2, 3, 4];
    const newArr = arr.map((elm) => {
    	return elm * 2;
    });
    
    console.log(newArr);
    ```
    
- find
- findIndex
- sort
- slice
- join

# Truthy & Falsy

- 빈 배열, 문자열, 숫자 등을 모두 참으로 인식
    
    ```jsx
    let a = {}; // 빈 괄호
    if (a) {
    	console.log("True");
    } else {
    	console.log("False");
    } // 출력: True
    ```
    
- null, 변수에 아무것도 할당하지 X 상태, 0, NaN, 빈 문자열은 모두 거짓으로 인식

---

# 삼항 연산자

- ? 키워드는 조건식, ? 이후 참일 때 수행할 식, : 이후 거짓일 때 수행할 식
    
    ```jsx
    let a = -3;
    a >= 0 ? console.log("양수") : console.log("음수"); // 출력: 음수
    ```
    

---

# 비 구조화 할당

- 배열의 선언 분리
    
    ```jsx
    let [one, two, three] = ["one", "two", "three"];
    console.log(one, two, three);
    ```
    
- swap
    
    ```jsx
    let a = 10;
    let b = 20;
    [a, b] = [b, a];
    console.log(a, b);
    ```
    

---

# Spread 연산자

- spread

```jsx
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allCookies);
```

---

# 동기 & 비동기

- 자바스크립트의 싱글 스레드 작업 수행 방식
    - 동기 방식의 처리
        - 자바스크립트는 코드가 작성된 순서대로 작업 처리
        - 이전 작업이 진행 중일 때는 다음 작업 수행 않고 기다림
        - 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드 실행
    - 동기 처리 방식의 문제점
        - 하나의 작업이 너무 오래 걸리게 되면 모든 작업이 이 작업이 종료되기 전까지 모두 스탑되기 때문에 전반적인 흐름이 느려짐
    - 비동기 작업
        - 싱글 쓰레드 방식을 이용하면서 동기적 작업의 단점 극복을 위해 여러 개의 작업을 동시에 실행

---

# Promise

- 비동기 작업이 가질 수 있는 3가지 상태
    - Pending (대기 상태)
    - Fulfilled (성공): resolve
    - Rejected (실패): reject

---

# async & await

- 직관적인 비동기 처리 코드 작성하기
    
    ```jsx
    function delay(ms) {
    	return new Promise((resolve) => {
    		setTimeout(resolve, ms);
    	});
    }
    
    async function helloAsync() {
    	await delay(3000);
    	return "hello async";
    }
    
    async function main() {
    	const res = await helloAsync();
    	console.log(res);
    }
    
    main();
    ```
    

---

# API 호출하기

- API란?
    - Application Programming Interface (응용 프로그램 프로그래밍 인터페이스)
    - 응용 프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스
        - 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스 제공

# Node.js란?

- 자바스크립트 코드는 브라우저 내장 자바스크립트 엔진을 이용하여 실행
- Node.js는 자바스크립트를 브라우저가 아닌 곳에서도 실행시킬 수 있도록 만든 자바스크립트의 실행 환경

---

# Node.js 패키지 생성 및 외부 패키지 사용하기

- Package?
    - 로그인 모듈
    - 전화인증 모듈
    - 메일 발송 모듈

# Why React?

- 중복 코드 작성으로 인한 문제 발생 (Shotgun Surgery) → 유지보수에 문제 발생
- 기존 방식보다 컴포넌트화 방식을 사용하면 공통으로 사용되는 요소에 수정 사항이 있을 때 수정하기가 수월함
- React는 Component 기반의 UI 라이브러리
- 명령형 프로그래밍: 절차를 하나하나 다 나열해야 함
- 선언형 프로그래밍: 그냥 목적을 바로 말함 → React
- Virtual DOM: 렌더링 과정을 거치지 않아 그만큼의 연산 X, 한 번에 Real DOM에 업데이트

---

# JSX

- 최상위 태그 규칙
    - JSX의 표현식은 반드시 하나의 부모를 가져야 함
    - 반드시 하나의 최상위 태그로 다른 모든 태그들을 묶어줘야 함
    - <></>로 묶어줘도 됨

---

# State

- 컴포넌트가 갖는 계속 값이 바뀌는 동적인 데이터
    
    ```jsx
    const [count, setCount] = useState(0);
    // count로 상태의 값을 불러올 수 있음
    // setCount로 이 상태를 변화시킬 수 있음
    ```
    
---

# Props

- 속성을 나타내는 데이터