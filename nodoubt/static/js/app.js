function fnMove(seq){
    var offset = $(".content_" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

const category_first = document.querySelector(".category_list_first");
const category_first_h3 = category_first.querySelector("h3");
const category_second = document.querySelector(".category_list_second");
const category_second_h3 = category_second.querySelector("h3");
const category_third = document.querySelector(".category_list_third");
const category_third_h3 = category_third.querySelector("h3");
const category_fourth = document.querySelector(".category_list_fourth");
const category_fourth_h3 = category_fourth.querySelector("h3");
const first = document.querySelector(".list_first");
const second = document.querySelector(".list_second");
const third = document.querySelector(".list_third");
const fourth = document.querySelector(".list_fourth");
const fifth = document.querySelector(".list_fifth");
const sixth = document.querySelector(".list_sixth");
const category_border = document.querySelectorAll(".list_content");
for (let index = 0; index < category_border.length; index++) {
    const element = category_border[index];
    element.classList.add("list_content_border");
}
category_first.style.color = "orange";
category_second.style.color = "black";
category_third.style.color = "black";
category_fourth.style.color = "black";
category_first_h3.style.borderBottom = "2px solid black";
first.innerHTML = "<a class='list_content_link' href='https://daily.siwonschool.com/?s=event&t=dailyenglish' target='_blank'><h2>시원스쿨</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>영어가 안되면 시원스쿨!</h3>";
second.innerHTML = "<a class='list_content_link' href='http://toeic.ybmclass.com/event/210618_toeic/?utm_source=Google&utm_medium=CPC&utm_campaign=ybmtoeic_web&utm_content=toeic_madtoeic_2106&ACE_REF=adwords_g&ACE_KW=ybm' target='_blank'><h2>YBM</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>TOEIC 공식 사이트</h3>";
third.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
fourth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
fifth.innerHTML = "";
sixth.innerHTML = "";

function paintList(event){    
    if(event === 1){
        category_first.style.color = "orange";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        category_first_h3.style.borderBottom = "2px solid black";
        category_second_h3.style.borderBottom = "";
        category_third_h3.style.borderBottom = "";
        category_fourth_h3.style.borderBottom = "";
        first.innerHTML = "<a class='list_content_link' href='https://daily.siwonschool.com/?s=event&t=dailyenglish' target='_blank'><h2>시원스쿨</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>영어가 안되면 시원스쿨!</h3>";
        second.innerHTML = "<a class='list_content_link' href='http://toeic.ybmclass.com/event/210618_toeic/?utm_source=Google&utm_medium=CPC&utm_campaign=ybmtoeic_web&utm_content=toeic_madtoeic_2106&ACE_REF=adwords_g&ACE_KW=ybm' target='_blank'><h2>YBM</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>TOEIC 공식 사이트</h3>";
        third.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        fourth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        fifth.innerHTML = "";
        sixth.innerHTML = "";
    }
    if(event === 2){
        category_first.style.color = "black";
        category_second.style.color = "orange";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        category_first_h3.style.borderBottom = "";
        category_second_h3.style.borderBottom = "2px solid black";
        category_third_h3.style.borderBottom = "";
        category_fourth_h3.style.borderBottom = "";
        first.innerHTML = "<a class='list_content_link' href='https://www.youtube.com/channel/UC0MVv0wGYB078pISgHFwhzQ' target='_blank'><h2>최태성 1TV</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>한국사 강의 1위 최태성의 유튜브 무료 강의</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://www.ebsi.co.kr/ebs/lms/lmsx/retrieveSbjtDtl.ebs?courseId=S20130000116' target='_blank'><h2>NCS</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>NCS 수리와 비슷한 대입적성검사 수리 유형의 무료 강의 입문자 추천</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://www.namucpa.com/main/main.asp' target='_blank'><h2>나무경영아카데미</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>CPA 재무 관련 인강으로 금융공기업 준비생에게 추천</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        fifth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        sixth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
    }
    if(event === 3){        
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "orange";
        category_fourth.style.color = "black";
        category_first_h3.style.borderBottom = "";
        category_second_h3.style.borderBottom = "";
        category_third_h3.style.borderBottom = "2px solid black";
        category_fourth_h3.style.borderBottom = "";
        first.innerHTML = "<a class='list_content_link' href='http://www.qulab.co.kr/que/board.php?board=home' target='_blank'><h2>퀘스천랩</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>사경환 강사의 사회 조사분석사 인강으로</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://fn.hackers.com/site/event_master/?evt_id=17042800&_C_=139999&gclid=Cj0KCQjwvaeJBhCvARIsABgTDM6yG6ScesEVKSbxT7e3DzsL7lewNuhkr50b9rHHfqhZo7cFfZjyQaAaAnKDEALw_wcB' target='_blank'><h2>해커스</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>금융관련 취업 준비생들에게 추천</h3>";
        third.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        fourth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        fifth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
        sixth.innerHTML = "<a class='list_content_link' href='' target='_blank'><h2></h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'></h3>";
    }
    if(event === 4){     
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "orange";
        category_first_h3.style.borderBottom = "";
        category_second_h3.style.borderBottom = "";
        category_third_h3.style.borderBottom = "";
        category_fourth_h3.style.borderBottom = "2px solid black";
        first.innerHTML = "<a class='list_content_link' href='https://brunch.co.kr/@kindoublej#articles' target='_blank'><h2>하리하리</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>자소서 예시 및 정보를 공유하는 블로그</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://publy.co/' target='_blank'><h2>퍼블리</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>취업, 이직은 물론 여러 직무에 관한 정보를 제공하는 뉴스레터 플랫폼</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://blog.naver.com/darddong' target='_blank'><h2>옴스잡스</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>자소서 및 면접에 관한 팁을 공유하는 블로그</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://cafe.daum.net/breakjob' target='_blank'><h2>취업뽀개기</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/dokchi/' target='_blank'><h2>독하게 취업하는 사람들</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티 </h3>";
        sixth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/specup' target='_blank'><h2>스펙업</h2></a><h3 style='opacity: 0.5; margin: -10px 0px 0px 10px;'>취업정보 및 스펙을 위한 정보를 공유하는 커뮤니티</h3>";
    }
}

window.onload = function() {
    
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }

    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);

};