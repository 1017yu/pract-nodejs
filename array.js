// .concat() 두 개의 배열 데이터를 병합해서 새로운 배열 데이터를 반환
// 원본의 데이터는 보존

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits))


// .forEach()

fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})