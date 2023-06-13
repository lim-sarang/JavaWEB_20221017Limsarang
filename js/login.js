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

  if (login_check(id.value, password.value)) {
    form.action = "../index_login.html";
    form.method = "get";
    session_set(); // 세션 생성
    form.submit();
  }
}

function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
}

function get_id(){
    var getParameters = function(paramName){
        var returnValue;
        var url = location.href;
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        for(var i = 0; i < parameters.length; i++) { 
            var varName = parameters[i].split('=')[0];

            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    };

    var email = getParameters('id');
    var username = email.split('@')[0]; // @ 기호를 기준으로 문자열 나누기
    alert(username + '님 방갑습니다!');
}

function login_check(id, password){
    // 이메일 형식 검사
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 비밀번호 형식 검사
    var passwordRegex = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    // 이메일
    if(!emailRegex.test(id)){
        alert("이메일 형식이 맞지 않습니다.");
        alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        return false;
    }
    //패스워드
    if(!passwordRegex.test(password)){
        var message = "비밀번호 ";
        if(password.length < 8 || password.length > 20){;
            message += "는 8자 이상 20자 이내여야 합니다."
            alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        }
        else if (!/\d/.test(password)){
            message += "에는 숫자가 포함되어야 합니다."
            alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
        }
        else if(!/[$@$!%*#?&]/.test(password)){
                message += "에는 특수 기호가 포함되어야 합니다."
                alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
            }
        alert(message);
        return false;
    }

    return true;
}

function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";        
    }

function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
                }
            }
        }
        return ;
}
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function createTimer() {
  let timer_div = document.createElement("div");
  timer_div.style.color = "white";
  timer_div.style.backgroundColor = "black";
  timer_div.style.border = "1px solid white";
  timer_div.style.padding = "10px";
  timer_div.style.position = "fixed";
  timer_div.style.top = "50%";
  timer_div.style.left = "50%";
  timer_div.style.transform = "translate(-50%, -50%)";
  timer_div.style.zIndex = "9999";
  document.body.appendChild(timer_div);

  let remaining_time = login_attempt_timeout;
  timer_div.innerHTML = "로그인 시도 제한 시간: " + remaining_time + "초 남았습니다.";

  let timer_id = setInterval(function() {
    remaining_time--;
    if (remaining_time === 0) {
      clearInterval(timer_id);
      timer_div.remove();
      login_button.disabled = false; // 로그인 버튼 활성화
    } else {
      timer_div.innerHTML = "로그인 시도 제한 시간: " + remaining_time + "초 남았습니다.";
    }
  }, 1000);
}

function login_count() {
  let count = parseInt(getCookie("login_cnt")); // 기존 쿠키의 값 가져오기
  if (isNaN(count)) { // 쿠키가 존재하지 않으면
    count = 0; // 초기값 설정
  }
  setCookie("login_cnt", count+1, 1); // 로그인 횟수 쿠키에 저장

  login_attempt_count++; // 로그인 시도 횟수 증가
  
  if(login_attempt_count >= login_attempt_limit) { // 로그인 시도 횟수가 제한 횟수를 초과한 경우
    login_button.disabled = true; // 로그인 버튼 비활성화
    createTimer(); // 타이머 창 생성
    setTimeout(function() { // 일정 시간이 지난 후에 로그인 시도 횟수와 쿠키를 초기화
      login_attempt_count = 0;
      deleteCookie("login_cnt");
    }, login_attempt_timeout * 1000); // setTimeout 함수의 시간 인자는 밀리초 단위이므로 1000을 곱해줌
    return false;
  }
  return true;
}

let login_button = document.getElementById("login-button");
login_button.addEventListener("click", login_count);

function logout_count() {
    let count = parseInt(getCookie("logout_cnt")); // 기존 쿠키의 값 가져오기
    if (isNaN(count)) { // 쿠키가 존재하지 않으면
    count = 0; // 초기값 설정
    }
    setCookie("logout_cnt", count+1, 1); // 로그아웃 횟수 쿠키에 저장
}

function session_set() { //세션 저장
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_get() { //세션 읽기
    if (sessionStorage) {
       return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href='index_login.html'; // 로그인된 페이지로 이동
    }
}

function session_del() {//세션 삭제
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
};

function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b); 
}




function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
    session_check(); // 세션 유무 검사

}