var search_array = []; // 빈 배열 – 전역 변수
const MAX_SEARCH_COUNT = 10; // 검색어 최대 개수

function search_message(){
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if (search_str.value.length === 0) { // 문자 길이, 엄격한 비교
        alert("검색어가 비었습니다. 입력해주세요"); 
    } else if (no_str(search_str.value)) {
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
    } else {
        alert("검색을 수행합니다!");
        if (search_array.length >= MAX_SEARCH_COUNT) { // 검색어 개수가 최대 개수 이상이면
            search_array.shift(); // 맨 앞의 요소 삭제
        }
        search_array.push(search_str.value); // 배열에 검색어 추가
        let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
}

function no_str(search_str) {
    const stopwords = ["바보", "멍청이", "등신","병신"]; // 검색 제한 단어
    for (let i = 0; i < stopwords.length; i++) {
        if (search_str.includes(stopwords[i])) {
            
            return true;
        }
    }
    return false;
}

document.getElementById("search_btn").addEventListener('click', search_message);