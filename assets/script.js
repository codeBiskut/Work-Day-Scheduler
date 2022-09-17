var timeBlocksArr=[9,10,11,12,13,14,15,16,17] //translate time-blocks to military times

var currenthour= moment().hour()
           
var currentDay =$("#currentDay")  
console.log(currenthour)

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)   

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

function saveData(event){
   event.preventDefault();

   console.log(event.target)
}

displayTimeBlockColors()

$(".container").on('click', '.saveBtn', saveData)