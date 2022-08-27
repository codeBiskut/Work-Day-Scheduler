//step 1: put current date on web page using moment()
//step 2: compare the current hour with time-blocks
//ste  3: translate time-blocks to military times
//step 4: use the css classes for present, past or future
//compare the time-blocks with moment()
// if moment() > time-blocks =>past
// if moment() == time-block => Present
// if  moment() < time-blokcs => future
//step 4: grap the textarea value and store it in localstorage

var timeBlocksArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] //translate time-blocks to military times

var currenthour= moment().hour()
           
var currentDay =$("#currentDay")  // document.querySelector("#currentDay")
console.log(currenthour)

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)   // currentDay.textContent=systemTime

function displayTimeBlockColors(){
    for(var i=0; i < timeBlocksArr.length;i++){
        //this would be past 
        var currentTextEl = $("#" +timeBlocksArr[i])

        if(currenthour>timeBlocksArr[i]){
          
           currentTextEl.addClass("past")
         }
         else if(currenthour=== timeBlocksArr[i]){
            currentTextEl.addClass("present")
         }
         else if(currenthour < timeBlocksArr[i]){
            currentTextEl.addClass("future") 
         }
    }
}

displayTimeBlockColors()