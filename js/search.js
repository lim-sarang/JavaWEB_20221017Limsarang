
function search_message(){
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if (search_str.value.length === 0) { // 문자 길이, 엄격한 비교
        alert("검색어가 비었습니다. 입력해주세요"); 
    } else if (no_str(search_str.value)) {
        alert(search_str.value+'은/는 검색어로 적절하지 않습니다.');
    } else {
        alert("검색을 수행합니다!");
        let text = document.getElementById("search_message").innerHTML = search_str.value;
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