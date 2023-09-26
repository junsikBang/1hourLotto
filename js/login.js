const loginBtn = document.getElementById('loginBtn');
const input_id = document.getElementById('id');
const input_pwd = document.getElementById('pwd');

let id = ['admin'];
let pwd = ['1234'];

loginBtn.addEventListener('click', () => {
    if(input_id.value == id[0] && input_pwd.value == pwd[0]) {
        let link = 'index.html';
        location.href = link;
    }
    else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.'); 
        input_id.value = null;
        input_pwd.value = null;
    }
});