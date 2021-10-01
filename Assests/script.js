var submitBtn=$(".btn");
// submission listener for search page

$(".btn").on("click",searchRun);
function searchRun(){
// trying to get text inside what user put inside of search bar, we need to place that into a variable. Since the format is already there, we can put data attributes into "a" elements. if no attribute then we handle that case as well. 
//create a variable that pulls in "a" elements
    var dropDownEl=document.getElementByClass(".dropdown-item");
    var format=dropDownEl.getAttribute("format");

    console.log(format);
}

