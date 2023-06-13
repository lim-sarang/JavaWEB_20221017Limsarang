// 한줄 주석: 임시 자바 스크립트 파일을 생성했습니다.
var jb = 'hi'; // 변수 선언 뒤 주석 처리 가능
var a = 1;
var b;
b = 5;

if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
}
// console.log(c);//Error-->let이 지역변수 이므로, if문 블록 내에서 찍도록 하지 않았으므로 에러가 나게 됨. 
console.log(c_1);

let d = 5;
// let d =  '값 재할당';//Errorr?
console.log(d);

const e = '상수1 접근';
// e = 5;
// const f //Error 상수(const)는 초반에 선언 시에 무조건 초기화(값 부여)를 시켜주어야 함
console.log(e);

/*
여러 줄 주석: 여러 줄에 걸쳐 주석을 처리합니다.
*/