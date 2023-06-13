function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");

    form.action = "../index_login.html";
    form.method = "get";

    if(login_check(id.value, password.value)){
        form.submit();
    }
}

function logout(){
    location.href='../index.html';
}

function get_id(){
    var getParameters = function(paramName){ // 변수 = 함수(이름)
        var returnValue; // 리턴값을 위한 변수 선언
        var url = location.href; // 현재 접속 중인 주소 정보 저장
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
            var varName = parameters[i].split('=')[0];

            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
                // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
            }
        } // 2중 for문 끝
    }; // 함수 끝
    alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
}

function login_check(id, password){
    // 이메일 형식 검사
    var emailRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
    if(!emailRegex.test(id)){
        alert("이메일 형식이 맞지 않습니다.");
        return false;
    }

    // 비밀번호 형식 검사
    var passwordRegex = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    if(!passwordRegex.test(password)){
        var message = "비밀번호 ";
        if(password.length < 8 || password.length > 20){
            message += "는 8자 이상 20자 이내여야 합니다."
        }
        else{
            if(!/\d/.test(password)){
                message += "에는 숫자가 포함되어야 합니다."
            }
            if(!/[$@$!%*#?&]/.test(password)){
                message += "에는 특수 기호가 포함되어야 합니다."
            }
        }
        alert(message);
        return false;
    }

    return true;
}