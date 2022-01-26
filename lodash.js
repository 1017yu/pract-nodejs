import _ from 'lodash'
import myData from './myData.json'

const usersA = [
  { userId: '1', name: 'Kled'},
  { userId: '2', name: 'Tokyo'}
]

const usersB = [
  { userId: '1', name: 'Kled'},
  { userId: '3', name: 'Berlin'}
]

const user = {
  name: 'Kled',
  age: 25,
  emails: [
    '1017yu@daum.net'
  ]
}

const usersC = usersA.concat(usersB)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// _.uniqBy: 하나의 배열 데이터에서 특정 속성의 이름으로 고유화 ( 사용 배열 데이터 1 )

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
// _.unionBy:  여려개의 배열 데이터에서 특정 속성의 이름으로 고유화

console.log(myData)

const str = JSON.stringify(user)
console.log('str', str)

const obj = JSON.parse(str)
console.log('obj', obj)