const contentIssueFirst = document.querySelector("#content_issue_first");
const contentIssueSecond = document.querySelector("#content_issue_second");
const contentIssueThird = document.querySelector("#content_issue_third");
const controls = document.querySelector(".controls");
const prevButton = document.querySelector(".prev");
const presentButton = document.querySelector(".present");
const nextButton = document.querySelector(".next");

let totalPages = 3;
let currentPage = 1;

prevButton.style.visibility = "hidden";
presentButton.innerText = ` ${currentPage} / ${totalPages} `

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
function checkPage(){
    if(currentPage === 1){
        prevButton.style.visibility = "hidden";
        contentIssueFirst.style.display = "flex"
        contentIssueSecond.style.display = "none";
        contentIssueThird.style.display = "none"
    }
    if(currentPage === 2){
        prevButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
        contentIssueFirst.style.display = "none"
        contentIssueSecond.style.display = "flex";
        contentIssueThird.style.display = "none"
    }
    if(currentPage === 3){
        nextButton.style.visibility = "hidden";
        contentIssueFirst.style.display = "none"
        contentIssueSecond.style.display = "none";
        contentIssueThird.style.display = "flex"
    }
}
function goPrev(){
    currentPage -= 1;
    presentButton.innerText = ` ${currentPage} / ${totalPages} `
    checkPage();
}

function goNext(){
    currentPage += 1;
    presentButton.innerText = ` ${currentPage} / ${totalPages} `
    checkPage();
}


