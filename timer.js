// 타이머 함수
// setTimeout(함수, 시간): 일정 시간(ms) 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const h1El = document.querySelector('h1')
const timer = setTimeout(() => {
  console.log('kled!')
}, 3000);

h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const interval = setInterval(() => {
  console.log('kled!')
}, 3000);

h1El.addEventListener('click', () => {
  clearInterval(interval)
})


// 콜백(Callback): 함수의 인수로 사용하는 함수

function timeout(callback) {
  setTimeout(() => {
    console.log('!delk')
    callback()
  }, 3000);
}

// timeout()을 호출할 때 하나의 익명함수를 인수로 사용
timeout(() => {
  console.log('Done!')
})
