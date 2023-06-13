function session_set(){ //세션 저장(객체)    
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let random = new Date(); // 랜덤 타임스탬프
    
    const obj = { // 객체 선언
    id : id.value,
    otp : random
    }
    
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}

function session_set_password() { // 세션 저장
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_join_set(){ //세션 저장(객체)    
    let f_name = document.querySelector("#firstName").value;
    let l_name = document.querySelector("#lastName").value;
    let b_day = document.querySelector("#birthdayDate").value;
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress").value;
    let p_number = document.querySelector("#phoneNumber").value;
    let class_check = document.querySelector(".select form-control-lg");
    let random = new Date(); // 랜덤 타임스탬프
    
    const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
    console.log(newSignUp.fullName); // John Doe
    console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890
    
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encryted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}

function session_get() { // 세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_encrypted");
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

function sessionTimer() {
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
    timer_div.innerHTML = "로그인 시간: " + remaining_time + "초 남았습니다.";
    let timer_id = setInterval(function () {
        remaining_time--;
        if (remaining_time === 0) {
            clearInterval(timer_id);
            timer_div.remove();
            logout();
        } else {
            timer_div.innerHTML = "로그인 시간: " + remaining_time + "초 남았습니다.";
        }
    }, 1000);
}