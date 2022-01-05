let myName = 'Kled'
let hi = `Hi ${myName}?!`

console.log(myName);
console.log(hi);
console.log(new Date('2022-01-05').getDay()); // 3 (= 수요일)

// 기명 - 익명 함수 정리
// 기명 함수 <함수 선언>
function hello() {
  console.log('Hello~');
}

// 익명 함수 <함수 표현>
let world = function () {
  console.log('World!');
}

hello(); // Hello~
world(); // World!