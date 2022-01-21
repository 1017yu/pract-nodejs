const result = 'Hello World!'.indexOf('World!')

console.log(result)
// expected output: 6

const wrong = 'Hello World!'.indexOf('kled')

console.log(wrong)
// expected output: -1

const str = 'Hello World!'

console.log(str.slice(0,6))
// expected output: Hello

console.log(str.replace('World!', 'Kled!'))
// expected output: Hello Kled!

const email = '1017yu@daum.net'

console.log(email.match(/.+(?=@)/)) 


