const submitBtn = document.getElementById('submit');
function onSubmitHandlar(event) {
  event.preventDefault(); // 새로고침 방지
  
  // input 값 가져오기
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const tel = document.getElementById('tel').value;

  if(name.length == 0 || Number(name)) {
    alert('이름을 다시 입력하세요');
    return;
  }
  else if(!Number(age)) {
    alert('숫자만 입력해주세요');
    return;
  }
  else if(gender.length == 0 || Number(gender)) {
    alert('성별을 다시 입력하세요');
    return;
  }
  else if(!Number(tel)) {
    alert('숫자만 입력해주세요');
    return;
  }

  const list = document.getElementById('list');
  const ul = document.createElement('ul');
  list.appendChild(ul);

  ul.innerHTML = '<li>' + name + '</li><li>' + gender + '</li><li>' + age + '</li><li>' + tel + '</li>';
};
submitBtn.addEventListener('submit', onSubmitHandlar);