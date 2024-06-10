/*
1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다
2. 자바스크립트 함수는 함수의 반환 값이 될 수 있다
3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다
4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다
*/

// 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다

function a(arg) {
  arg();
}

function bar() {
  console.log("bar");
}

a(bar); // bar

// 2. 자바스크립트 함수는 함수의 반환 값이 될 수 있다

function b(arg) {
  return arg;
}

function bar() {
  console.log("bar");
}

b(bar)(); // bar

// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다
// 4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다

const c = function (arg) {
  return arg;
};

c(1); // 1

/*
1. 기본값 매개변수 default function parameter
2. 나머지 매개변수 rest parameter
3. arguments 객체
*/

// 1. 기본값 매개변수 default function parameter
function d(arg = 1) {
  console.log(arg); // 1
}

// 2. 나머지 매개변수 rest parameter
function e(arg, ...rest) {
  console.log(rest); // [2, 3, 4, 5]

  return arg; // 1
}
e(1, 2, 3, 4, 5);

// 3. arguments 객체
function f() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
}
f(1, 2, 3, 4, 5);

/*
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수
*/

// 1. 함수 선언문
function g() {
  console.log("g");
}

// 2. 함수 표현식
const h = function () {
  console.log("h");
};

// 3. Function 생성자 함수
const i = new Function("console.log('foo')");
i(); // foo

// 4. 화살표 함수
const j = () => {
  console.log("foo");
};
j(); // foo

/*
1. IIFE (즉시 실행 함수)
2. 재귀 함수
3. 중첩 함수
4. 콜백 함수
*/

// 1. IIFE (즉시 실행 함수)
(function () {
  console.log("IIFE");
})(); // IIFE

// 2. 재귀 함수
function k(arg) {
  if (arg === 3) return;
  console.log(arg);
  k(arg + 1);
}
k(1);

// 3. 중첩 함수
function l(arg) {
  function m() {
    console.log(arg);
  }
  m();
}
l(1); // 1

// 4. 콜백 함수
function n(arg) {
  arg();
}

n(() => {
  console.log(1);
});
