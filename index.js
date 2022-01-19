import _ from 'lodash'; // '_' 라는 변수에 할당해서 활용
import getType from './getType'
import random from './getRandom'

// console.log('Hello World!')
// console.log(_.camelCase('hello world!')) // lodash module의 camelCase method 실행

/* function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
} */

// console.log(getType(123)) Number
// console.log(getType(false)) Boolean
// console.log(getType(null)) Null
// console.log(getType({})) Object
// console.log(getType([])) Array


const hero = {
  name: 'KLED',
  age: 25,
  getName: function () {
    return this.name;
  }
};

const hisName = hero.getName();
console.log(hisName);
// or
console.log(hero.getName());

// 조건문 
const a = random()

if (a === 0) {
  console.log('a is 0')
} else if (a === 2 || a === 3) {
  console.log('a == 2 or 3')
} else {
  console.log('rest...')
}

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  li.addEventListener('click', function() {
    console.log(li.textContent)
  })
  ulEl.appendChild(li)
}

// 화살표 함수
// () => {}
const double = (x) => x * 2

console.log('seven double:', double(7))

// 즉시실행 함수 (Immediately-Invoked Function Expression)
const c = 2;

(function(){
  console.log(c * 2)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

tripple(c)

// error!
// const tripple = function() {
//   console.log(c * 3)
// }

function tripple() {
  console.log(c * 3)
}
