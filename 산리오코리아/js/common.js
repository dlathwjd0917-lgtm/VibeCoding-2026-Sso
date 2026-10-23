// common.js — 모든 페이지에서 쓰는 공통 기능 (햄버거 메뉴)
console.log('안뇽!');

//////////// 햄버거버튼 클릭시 메뉴 보이기/숨기기 //////////////
// 대상선정
// 1-1. 이벤트 대상 : 햄버거버튼(.menu-btn)
let 햄버거 = document.querySelector('.menu-btn');

// 1-2. 변경대상 : 상단영역(.top-area)
let 상단박스 = document.querySelector('.top-area');

// 햄버거 버튼과 상단영역이 있는 페이지에서만 실행!
// (없는 페이지에서 .onclick 을 쓰면 null 오류가 나기 때문)
if (햄버거 && 상단박스) {
  // 2. 이벤트 함수 만들기
  // 햄버거 클릭시 상단박스 클래스 on넣기
  햄버거.onclick = () => {
    상단박스.classList.toggle('on');
    // classlist 객체는 클래스를 넣고 빼는 기능을 가짐
    // add(클래스명) - 클래스넣기
    // remove(클래스명) - 클래스빼기
    // toggle(클래스명) - 클래스넣기/빼기 전환
  }; /////// 클릭함수 ///////////

  console.log('선택확인:', 햄버거);
}
