import _ from 'lodash'; // '_' 라는 변수에 할당해서 활용
import getType from './getType'

console.log('Hello World!')
console.log(_.camelCase('hello world!')) // lodash module의 camelCase method 실행

/* function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
} */

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))


const hero = {
  name: 'KLED',
  age: 25,
  getName: function() {
    return this.name;
  }
};

const hisName = hero.getName();
console.log(hisName);
// or
console.log(hero.getName());