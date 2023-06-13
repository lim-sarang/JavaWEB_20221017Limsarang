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
        else if (!/\d/.test(password)){
                message += "에는 숫자가 포함되어야 합니다."
            }
        else if(!/[$@$!%*#?&]/.test(password)){
                message += "에는 특수 기호가 포함되어야 합니다."
            }
        alert(message);
        return false;
    }

    return true;
}