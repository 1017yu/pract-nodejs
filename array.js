// .concat() 두 개의 배열 데이터를 병합해서 새로운 배열 데이터를 반환
// 원본의 데이터는 보존

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits))


// .forEach()

fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})


// map: 인수로 사용하는 콜백의 내부에서 반환하는 하나의 object 데이터를 배열로 반환

const a = fruits.map((fruits, index) => {
  return `${fruits}-${index}`
})

const b = fruits.map((fruits, index) => ({
  id: index,
  name: fruits
}))

console.log(a)
console.log(b)

const c = numbers.filter(number => number < 3)

console.log(c)

// .push() .unshift()
// 원본 수정됨 주의

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)