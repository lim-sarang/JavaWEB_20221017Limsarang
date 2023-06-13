let login_attempt_count = 0; // 로그인 시도 횟수 초기화
let login_attempt_limit = 5; // 로그인 시도 제한 횟수
let login_attempt_timeout = 60; // 로그인 제한 시간(초)
function login() {
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
    // 쿠키 저장
    if (check.checked) {
        alert("쿠키를 저장합니다.");
        setCookie("id", id.value, 1); // 1일 저장
        alert("쿠키 값: " + id.value);
    } else {
        setCookie("id", id.value, 0); // 쿠키 삭제
    }
    // 로그인 시도 제한 처리
    if (login_check(id.value, password.value)) {
        form.action = "../index_login.html";
        form.method = "get";
        session_set(); // 세션 생성
        form.submit();
    }
}
function logout() {
    session_del(); // 세션 삭제
    location.href = '../index.html';
}
function get_id() {
    decrypt_text();
    var getParameters = function (paramName) {
        var returnValue;
        var url = location.href;
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        for (var i = 0; i < parameters.length; i++) {
            var varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    };
    var email = getParameters('id');
    var username = email.split('@')[0]; // '@'를 기준으로 앞부분 추출
    alert(username + '님 방갑습니다!');
    sessionTimer();
}
function login_check(id, password) { // 이메일 형식 검사
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 비밀번호 형식 검사
    var passwordRegex = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    // 이메일
    if (! emailRegex.test(id)) {
        alert("이메일 형식이 맞지 않습니다.");
        alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        return false;
    }
    // 패스워드
    if (! passwordRegex.test(password)) {
        var message = "비밀번호 ";
        if (password.length < 8 || password.length > 20) {;
            message += "는 8자 이상 20자 이내여야 합니다."
           alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        } else if (!/\d/.test(password)) {
            message += "에는 숫자가 포함되어야 합니다."
           alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        } else if (!/[$@$!%*#?&]/.test(password)) {
            message += "에는 특수 기호가 포함되어야 합니다."
            alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        }
        alert(message);
        return false;
    }
    return true;
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수


function init() { // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    if (get_id) {
        id.value = get_id;
        check.checked = true;
    }
    session_check(); // 세션 유무 검사
}



