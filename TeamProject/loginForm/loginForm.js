/**
 * & 쿼리 쓰지 않고 오직 자바스크립트로만 해보기
 */

const btn = document.getElementById('submit')

btn.addEventListener('click', function () {
  const email = document.getElementById('email')
  const password = document.getElementById('pwd')
  const regExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

  // email에 @가 안 들어가거나, .com으로 끝나지 않으면 input.value를 지우고 알림창을 띄움
  if (regExp.test(email.value)) {
    console.log('correct')
  }
  else{
    alert('올바른 이메일을 입력하세요.')
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
  }
})
