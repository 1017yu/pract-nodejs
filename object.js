import _ from 'lodash';
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
const userAge = {
  name: 'Kled',
  age: 25
}

const userEmail = {
  name: 'Kled',
  email: ['1017yu@daum.net']
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)
// expected output: true

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b)
// expected output: false

const values = Object.values(userAge)
console.log(values)

// 전개 연산자 (Spread)

console.log(...fruits)
// expected output: Apple Banana Cherry

const toObject = (a, b, c) =>  ({a, b, c})

console.log(toObject(...fruits))
// expected output: {a: 'Apple', b: 'Banana', c: 'Cherry'}


// lodash를 이용한 깊은 복사: 내부의 참조형 데이터까지 복사하여 새로운 메모리에 할당 (참조 데이터 내부에 또다른 참조 데이터가 있을 때 사용 고려 )
const copyUser = _.cloneDeep(target)
target.email.push('qwe123@korea.co.kr')
target.age = 27

console.log(copyUser)
console.log(target)
console.log(copyUser.email === target.email)
// expected output: false