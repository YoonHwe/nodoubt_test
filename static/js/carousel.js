const controls = document.querySelector(".content_issue_controls");
// const prevButton = document.querySelector(".content_issue_prev");
// const prevButton = document.querySelector(".content_issue_present");
// const nextButton = document.querySelector(".content_issue_next");
const prev = document.getElementsByClassName("content_issue_prev");
let present = document.getElementsByClassName("content_issue_present");
const next = document.getElementsByClassName("content_issue_next");

next.addEventListener("click", goNext);
function goNext(){
    console.log("Go next!");
}
let totalPage = 3;
let currentPage = 2;

present.innerText = ` ${currentPage} / ${totalPage} `