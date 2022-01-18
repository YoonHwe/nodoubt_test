const contentIssueFirst = document.querySelector("#content_issue_first");
const contentIssueSecond = document.querySelector("#content_issue_second");
const contentIssueThird = document.querySelector("#content_issue_third");
const controls = document.querySelector(".controls");
const prevButton = document.querySelector(".prev");
const presentButton = document.querySelector(".present");
const nextButton = document.querySelector(".next");

let totalPages = 3;
let currentPage = 1;

const contentIssueFirstTablet = document.querySelector("#content_issue_tablet_first");
const contentIssueSecondTablet = document.querySelector("#content_issue_tablet_second");
const contentIssueThirdTablet = document.querySelector("#content_issue_tablet_third");
const contentIssueFourthTablet = document.querySelector("#content_issue_tablet_fourth");
const contentIssueFifthTablet = document.querySelector("#content_issue_tablet_fifth");
const controlsTablet = document.querySelector("#tablet_controls");
const prevButtonTablet = document.querySelector("#tablet_prev");
const presentButtonTablet = document.querySelector("#tablet_present");
const nextButtonTablet = document.querySelector("#tablet_next");

let totalPagesTablet = 5;
let currentPageTablet = 1;

const contentIssueFirstMobile = document.querySelector("#content_issue_mobile_first");
const contentIssueSecondMobile = document.querySelector("#content_issue_mobile_second");
const contentIssueThirdMobile = document.querySelector("#content_issue_mobile_third");
const contentIssueFourthMobile = document.querySelector("#content_issue_mobile_fourth");
const contentIssueFifthMobile = document.querySelector("#content_issue_mobile_fifth");
const contentIssueSixthMobile = document.querySelector("#content_issue_mobile_sixth");
const contentIssueSeventhMobile = document.querySelector("#content_issue_mobile_seventh");
const contentIssueEighthMobile = document.querySelector("#content_issue_mobile_eighth");
const contentIssueNinthMobile = document.querySelector("#content_issue_mobile_ninth");
const controlsMobile = document.querySelector("#mobile_controls");
const prevButtonMobile = document.querySelector("#mobile_prev");
const presentButtonMobile = document.querySelector("#mobile_present");
const nextButtonMobile = document.querySelector("#mobile_next");

let totalPagesMobile = 9;
let currentPageMobile = 1;

prevButton.style.visibility = "hidden";
presentButton.innerText = ` ${currentPage} / ${totalPages} `
prevButtonTablet.style.visibility = "hidden";
presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
prevButtonMobile.style.visibility = "hidden";
presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
prevButtonTablet.addEventListener("click", goPrevTablet);
nextButtonTablet.addEventListener("click", goNextTablet);
prevButtonMobile.addEventListener("click", goPrevMobile);
nextButtonMobile.addEventListener("click", goNextMobile);

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

function checkPageTablet(){
    if(currentPageTablet === 1){
        prevButtonTablet.style.visibility = "hidden";
        contentIssueFirstTablet.style.display = "flex"
        contentIssueSecondTablet.style.display = "none";
        contentIssueThirdTablet.style.display = "none"
        contentIssueFourthTablet.style.display = "none"
        contentIssueFifthTablet.style.display = "none"
    }
    if(currentPageTablet === 2){
        prevButtonTablet.style.visibility = "visible";
        nextButtonTablet.style.visibility = "visible";
        contentIssueFirstTablet.style.display = "none"
        contentIssueSecondTablet.style.display = "flex";
        contentIssueThirdTablet.style.display = "none"
        contentIssueFourthTablet.style.display = "none"
        contentIssueFifthTablet.style.display = "none"
    }
    if(currentPageTablet === 3){
        prevButtonTablet.style.visibility = "visible";
        nextButtonTablet.style.visibility = "visible";
        contentIssueFirstTablet.style.display = "none"
        contentIssueSecondTablet.style.display = "none";
        contentIssueThirdTablet.style.display = "flex"
        contentIssueFourthTablet.style.display = "none"
        contentIssueFifthTablet.style.display = "none"
    }
    if(currentPageTablet === 4){
        prevButtonTablet.style.visibility = "visible";
        nextButtonTablet.style.visibility = "visible";
        contentIssueFirstTablet.style.display = "none"
        contentIssueSecondTablet.style.display = "none";
        contentIssueThirdTablet.style.display = "none"
        contentIssueFourthTablet.style.display = "flex"
        contentIssueFifthTablet.style.display = "none"
    }
    if(currentPageTablet === 5){
        prevButtonTablet.style.visibility = "visible";
        nextButtonTablet.style.visibility = "visible";
        contentIssueFirstTablet.style.display = "none"
        contentIssueSecondTablet.style.display = "none";
        contentIssueThirdTablet.style.display = "none"
        contentIssueFourthTablet.style.display = "none"
        contentIssueFifthTablet.style.display = "flex"
    }
}

function checkPageMobile(){
    if(currentPageMobile === 1){
        prevButtonMobile.style.visibility = "hidden";
        contentIssueFirstMobile.style.display = "flex"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 2){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "flex";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 3){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "flex"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 4){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "flex"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 5){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "flex"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 6){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "flex"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 7){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "flex"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 8){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "visible";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "flex"
        contentIssueNinthMobile.style.display = "none"
    }
    if(currentPageMobile === 9){
        prevButtonMobile.style.visibility = "visible";
        nextButtonMobile.style.visibility = "hidden";
        contentIssueFirstMobile.style.display = "none"
        contentIssueSecondMobile.style.display = "none";
        contentIssueThirdMobile.style.display = "none"
        contentIssueFourthMobile.style.display = "none"
        contentIssueFifthMobile.style.display = "none"
        contentIssueSixthMobile.style.display = "none"
        contentIssueSeventhMobile.style.display = "none"
        contentIssueEighthMobile.style.display = "none"
        contentIssueNinthMobile.style.display = "flex"
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

function goPrevTablet(){
    currentPageTablet -= 1;
    presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
    checkPageTablet();
}
function goNextTablet(){
    currentPageTablet += 1;
    presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
    checkPageTablet();
}

function goPrevMobile(){
    currentPageMobile -= 1;
    presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `
    checkPageMobile();
}
function goNextMobile(){
    currentPageMobile += 1;
    presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `
    checkPageMobile();
}
