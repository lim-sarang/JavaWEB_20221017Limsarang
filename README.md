# JavaWEB_20221017Limsarang
자바 웹 프로그래밍 4-6   20221017   임사랑

## 2023년 3월 15일 2주차 홈페이지 수정 완료   

### 1. 꾸글.com 화면 구현
1) 구글 화면 분석
2) 타이틀, 구글 로고 이미지, 검색 창 등 구현.
    - 문자
        - text-align
            - 정렬에 사용되는 스타일.
            - left : 좌측 정렬
            - center : 가운데 정렬
            - right : 우측 정렬
        - font
            - size
                - 크기 지정.
                - px : 절대값
                - em : 상대값
            - color
                - 색 지정
                - 기본 제공되는 dark, green, yellow 등의 색이 있음.
                - RGB 컬러값으로 지정 가능.
    - 이미지
        - img 태그 사용
            - src : 이미지 경로
            - alt : 이미지 출력이 불가능할 때, alt 내의 값 출력
    - 입력창
        - input 태그 사용
        - type : 입력창의 속성 지정.
        - name : input의 이름 지정.
        - size : 입력창의 크기 지정.
        - value : 입력창 안의 값 지정.
    - 버튼
        - button 태그 사용
        - type : 버튼의 속성 지정.
        - onclick : 버튼의 이벤트
        - alert : 경고창(메시지 창) 띄움.
    - 기타
        - br : 줄 바꿈
        - hr : 밑줄
### 2. 추가 구현
 1) 표 글자 가운데 정렬
 
## 2023년 3 월 22 일 3 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 이론
     - 웹 브라우저와 웹 서버 통신
         - 웹 서버
             - 인터넷을 통해 웹 페이지를 제공하는 컴퓨터 프로그램.
             - 클라이언트(웹 브라우저)의 요청에 따라 HTML 페이지, 이미지, 동영상 등 전송.
             - goormIDE 등.
         - 웹 브라우저
             - 인터넷을 통해 웹 페이지를 볼 수 있는 소프트웨어.
             - 크롬, 엣지 등.
         - HTTP 프로토콜을 사용해 통신
             - 웹 브라우저는 웹 서버에 연결 요청.
             - 웹 서버는 이를 수락하고, HTML 페이지, 이미지, 동영상 등 전송.
             - 웹 브라우저는 전송받은 HTML 코드를 해석해 화면 데이터 출력.
    - 메타 데이터와 하이퍼링크
        - 메타데이터
            - head 태그 내부에 삽입됨.
            - 웹 페이지의 세부 정보를 표현하는데 사용됨.
            - 저자 정보, 언어셋, 키워드(검색 엔진용) 등을 포함함.
            - 페이지 로딩에 필요한 표준 데이터 로딩.
            - 외부에 노출할 페이지의 전역 정보 : 페이지 내부의 필요한 정보를 정의하는 역할을 함.
            - 일반적으로 사용하는 태그 : base, title, link, meta, script, style 사용.
                - title : 문서의 전역 타이틀 정보.
                - meta : 저자 정보, 설명, 인코딩 방식 등.
                - link : 기존 링크와 동일하지만 외부 자원을 추가할 때 사용.
                - script : 데이터 입력 및 이벤트 처리를 위한 자바스크립트.
                - style : CSS 스타일 시트를 적용하기 위한 태그.
                - base : 웹 페이지의 기본 URL 지정.
        - 하이퍼링크
            - 웹 페이지에서 다른 웹 페이지로 이동할 수 있는 링크를 의미함.
            - HTML에서 a 태그를 사용해 구현할 수 있음.
            - 내부 문서들은 모두 링크를 통해 연결됨.
            - Link : 마우스 클릭 시 이동할 주소(경로 포함) 지정.
        - 메타 데이터의 링크와 하이퍼 링크의 차이점
            - 메타 데이터 링크 : head에 삽입.
            - 하이퍼 링크 : body에 삽입.
        - 링크의 4가지 속성.
            - href : 클릭 시 이동할 주소(경로 포함) 지정.
            - target : 링크 클릭 시, 이동 위치 지정.
                - blank : 새로운 윈도우, 탭(새 창으로 열림).
                - self : 기본값(현재 창에서 열림).
                - parent : 이전 부모 창.
                - top : 현재 윈도우 전체.
            - title : 링크에 대한 설명을 지정.
            - download : 링크 클릭 시, 다운로드 할 파일의 이름 지정.
    - Table
        - HTML에서 데이터 표현 시 사용되는 태그.
        - table 태그로 시작
        - tr 태그로 행 표시, td 태그로 칼럼(셀) 표시
        - 테이블 주요 태그
            - table : 테이블 정의
            - tr : 테이블의 행 정의
            - td : 테이블의 셀(칼럼) 정의
            - th : 테이블의 헤더 셀 정의
            - caption : 테이블의 제목 정의
        - 테이블 꾸미기 속성
            - border : 테두리 굵기 지정
            - cellpadding : 셀과 셀 사이의 간격 지정
            - cellspacing : 셀의 안쪽 여백 지정
            - width : 테이블의 너비 지정
    - 부트스트랩
        - HTML, CSS, JavaScript로 구성된 프론트엔드 개발 프레임워크.
        - 반응형 웹 디자인을 쉽게 구현할 수 있도록 도와줌.
        - 다양한 브라우저와 기기에서 일관된 디자인 제공.
        - 특징
            - 모바일 우선 디자인 : 모바일 환경에서도 적절한 디자인 제공.
            - 그리드 시스템 : 반응형 웹 디자인 구현을 위한 그리드 시스템 제공.
            - CSS 스타일 : 다양한 CSS 스타일을 제공해 디자인 쉽게 구현 가능.
            - JavaScript 플러그인 : 다양한 JavaScript 플러그인을 제공해 인터랙티브한 웹 페이지 구현 가능.
            - 커스터마이징 : 필요한 기능만 선택해 사용 가능.
            - 오픈 소스로 제공
            - 무료 사용 가능.
 2) 구현
     - 네비게이션 바 추가
### 2. 추가 구현
 1) 표 배경 색상 지정
 
## 2023년 3 월 29 일 4 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 이미지를 반응형 웹으로 구현
     - img 태그를 감싸는 div 태그에 class="mx-auto"와 "style="width:200(원하는 크기)px;"를 추가해줌.
         - 이미지 중앙 정렬
         - 최대 너비 200(원하는 크기)px 제한.
         - mx-auto : 가로 방향으로 중앙 정렬을 수행하는 클래스.
     - img 태그에 class="img-fluid"를 추가해줌.
         - 이미지를 반응형으로 만들어줌.
         - 부모 요소의 너비에 맞게 자동 조정됨.
 2) 반응형 웹 구현 이유
     - 다양한 해상도의 디바이스에서 일관된 UI 제공을 위함.
         - 모바일 기기와 데스크탑 PC는 화면 크기가 다르기 때문에, 동일한 UI 제공 시, 사용자가 불편을 느낌.
         - 반응형 웹을 구현해 디바이스의 해상도에 맞게 UI를 최적화하면, 사용자가 더욱 편리하게 웹 사용 가능.
     - 검색 엔진 최적화(SEO)를 위함.
         - 검색 엔진은 웹 사이트의 콘텐츠를 수집할 떄, 모바일 버전과 데스크탑 버전을 모두 수집함.
         - 만약, 모바일 버전과 데스크탑 버전이 다르면, 검색 엔진은 중복된 콘텐츠로 인식해 검색 순위가 하락할 수 있음.
         - 반응형 웹 구현으로 모바일 버전과 데스크탑 버전을 하나의 URL로 통합 시, 검색 엔진 최적화에 도움이 됨.
 3) 구현
     - img를 반응형 웹으로 구현.
     - 검색 버튼을 클릭하면, search.js 파일이 실행되며, 메시지창 뜸.

## 2023년 4 월 5 일 5 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 테이블 수정
     - 레이아웃, 호버, 분리선, td 색상 변경
 2) 이론
     - form
         - 사용자의 입력 정보를 서버로 전송
             - action : 전송 서버 url
             - method : 전송 방식
         - method
             - get : 링크에 중요 정보가 없는 경우
             - post : id/password 등 중요 정보가 있는 경우
         - 실제 구글 서버가 하는 일
             - 검색 결과를 웹 브라우저에 리턴.
     - JS
         - 기본 구조
             - 특별히 정해진 구조가 없음.
             - 기능별 영역은 확실히 구분되어야 함.(파일로 구분시 편함.)
         - 구현 방법
             - html 내에서 script 태그를 사용해 입력
             - html head에 js 파일로 연동
 3) 꾸글.com 구현
     - basic_test 파일로 js의 주석 처리 방법.
     - var와 let, const의 차이점
     - caption의 위치를 align을 사용해 top으로 지정.
     - data_type 파일을 통해 data 타입의 사용법.
     - 구글 이미지 위에 마우스를 hover를 인식해 지정.
     - ===은 문자 값, 자료형 비교
         - 변수 value의 length가 0인지 ===로 엄격하게 비교
### 2. 추가 구현
 1) 표 가운데 정렬 및 사이즈 지정
    -     <div class="table-responsive" style="background-color: #; width: 500px; margin: auto;">

## 2023년 4 월 12 일 6 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 이론
     - 팝업창
         - pop_up html 생성
         - 새 창 띄우거나 닫는 함수
             -     window.open
             -     window.close
         - 문서 로드 시 팝업 함수 호출
             -     <body onload ="pop_up();">    
         
         - setTimeout을 사용해 시간 마다 갱신.
             -     setTimeout(show_clock, 1000);
         - 팝업창 디자인을 위한 코드 삽입
             - index html에서 사용한 stylesheet, cdn 링크 가져옴.
     - 검색창
         - 검색창이 비었을 때, 검색이 되지 않도록 검사.
         - 그렇지 않다면, 실행
### 2. 추가 구현
 1) 비속어 입력 시, 출력이 불가능하도록 필터링.
      -     function no_str(search_str) {
                const stopwords = ["바보", "멍청이", "등신","병신"]; // 검색 제한 단어
                for (let i = 0; i < stopwords.length; i++) {
                    if (search_str.includes(stopwords[i])) {
                        return true;
                    }
                }
                return false;
            }

## 2023년 4 월 19 일 7 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 팝업창
     - close_window js 파일 추가
     - 1초마다 닫히기 까지의 초를 갱신
 2) 배열
     - 배열 접근, 삽입, 사용 방법 등
     - 배열 제어
 3) 검색창
     - 검색어 목록 출력
### 2. 추가 구현
 1) 검색어 목록 10개 출력 제한
     - 큐를 사용해 배열 앞의 요소 삭제.
     -     search_array.shift();
 2) 비속어 검색어 출력 시 붉은 메시지 창 출력
     -     else if (no_str(search_str.value)) {
                 let message = document.createElement("div");
                    message.innerHTML = search_str.value+'은/는 검색어로 적절하지 않습니다.';
                    message.style.color = "red";
                    message.style.backgroundColor = "white";
                    message.style.border = "1px solid red";
                    message.style.padding = "10px";
                    message.style.position = "fixed";
                    message.style.top = "50%";
                    message.style.left = "50%";
                    message.style.transform = "translate(-50%, -50%)";
                    message.style.zIndex = "9999";
                    document.body.appendChild(message);
                    setTimeout(function() {
                        message.remove();
                    }, 2000);
            }
 3) 카운트 다운 문자열 표기
     -     divClock.innerText = "남은 시간은 "+close_time2+" 초 입니다.";
     
## 2023년 4 월 26 일 8 주차 중간고사

## 2023년 5 월  3 일 9 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 로그인
     - login html 생성
         - 부트스트랩 signin 샘플 코드 body 수정
         - 필요없는 자바 스크립트 연동 삭제
         - 검색 창 삭제
         - 구글 이미지, 최하단 Footer
         - 가독성을 위한 한글 수정
     - login js 생성
         - 아이디, 패스워드 모두 입력하지 않으면 메시지창 출력
     - index_login html 생성
         - index html과 거의 동일한 코드
         - 팝업창 해제
         - 로그아웃 버튼 수정
         - 로그인 창에 입력한 아이디를 가져와 메시지 띄우기.
### 2. 추가 구현
 1) 아이디 패스워드
     - 아이디 패스워드 문자열 검사 기능 추가
         -     function login_check(id, password){
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
    - 로그인 후 아이디+반갑습니다 띄울 때, 아이디의 @를 기준으로 앞부분만 출력
        -     function get_id(){
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
 
 2) 로그인 입력창 사이즈 조절 및 가운데 정렬
     - 사이즈 조절 및 가운데 정렬을 원하는 곳에 삽입.
         -     style="margin: 0 auto; max-width: 800px; width: 100%;"             

## 2023년 5월 10일 10 주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 팝업창
     - x 일간 보지 않기
         - 쿠키를 통해 체크박스에 체크가 되어 있으면 x일 동안 실행이 되지 않도록 함.
         - 체크가 되지 않는다면 쿠키를 삭제함.
     - ID 저장하기
         - 쿠키를 통해 체크박스에 체크가 되어 있으면 아이디 저장
### 2. 추가 구현
 1) 로그인 시도 횟수 제한
     - 로그인 시도 5회 초과 시, 1분간 로그인 불가능. 로그인 버튼 비활성화
         -     function login_count() {
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
    - 로그인 시도 5회 초과 시, 1분간 로그인 불가능. 남은 시간 알려주는 타이머
        -     function createTimer() {
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
    - 로그인 실패 시, 시도 횟수 알려줌
        -     alert("현재 로그인 시도 횟수: " + (login_attempt_count + 1));
## 2023년 5월 17일 11주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) 로그인/로그아웃
 2) 암호화/복호화
 3) 아이디/ 패스워드 처리
### 2. 추가 구현
 1) 로그인 성공 시, 아이디의 @를 기준으로 앞부분만 출력
     -      var email = getParameters('id');
            var username = email.split('@')[0]; // '@'를 기준으로 앞부분 추출
            alert(username + '님 방갑습니다!');
 2) 로그인 유지 1분 제한
     - 남은 로그인 유지 시간 알려주는 타이머 및 자동 로그아웃 및 세션 삭제
         - get_id 함수에 Timer 작동 추가
         -      sessionTimer();
         -      타이머 및 로그아웃.
         -      ## function sessionTimer() {
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
## 2023년 5월 24일 12주차 홈페이지 수정 완료
### 1. 꾸글.com
 1) login js 스크립트 분리
     - session
     - security
     - cookie
 2) 웹 세션 객체 저장
 3) 회원가입 창 생성
     - js 필터링
     - 회원가입 완료 화면
     - 세션 객체
     - 클래스구현 
### 2. 추가 구현
 1) 회원가입 입력 창
     - placeholder를 통해 입력창 예시를 추가 
     - 분반 디폴트 값 지정
     
 
 

