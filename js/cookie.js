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
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");
            if (cookie_name[0] == "id") {
                return cookie_name[1];
            }
        }
    }
    return;
}
function deleteCookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function login_count() {
    let count = parseInt(getCookie("login_cnt")); // 기존 쿠키의 값 가져오기
    if (isNaN(count)) { // 쿠키가 존재하지 않으면
        count = 0; // 초기값 설정
    }setCookie("login_cnt", count + 1, 1); // 로그인 횟수 쿠키에 저장
    login_attempt_count++; // 로그인 시도 횟수 증가
    if (login_attempt_count >= login_attempt_limit) { // 로그인 시도 횟수가 제한 횟수를 초과한 경우
        login_button.disabled = true; // 로그인 버튼 비활성화
        createTimer(); // 타이머 창 생성
        setTimeout(function () { // 일정 시간이 지난 후에 로그인 시도 횟수와 쿠키를 초기화
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
    }setCookie("logout_cnt", count + 1, 1); // 로그아웃 횟수 쿠키에 저장
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
    timer_div.innerHTML = "로그인 제한 시간: " + remaining_time + "초 남았습니다.";
    let timer_id = setInterval(function () {
        remaining_time--;
        if (remaining_time === 0) {
            clearInterval(timer_id);
            timer_div.remove();
            login_button.disabled = false; // 로그인 버튼 활성화
        } else {
            timer_div.innerHTML = "로그인 제한 시간: " + remaining_time + "초 남았습니다.";
        }
    }, 1000);
}