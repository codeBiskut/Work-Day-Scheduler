var timeBlocksArr = [9, 10, 11, 12, 13, 14, 15, 16, 17] //translate time-blocks to military times

var currenthour = moment().hour()

var currentDay = $("#currentDay")
console.log(currenthour)

var systemTime = moment().format("dddd, MMMM Do")
currentDay.text(systemTime)

function displayTimeBlockColors() {
   for (var i = 0; i < timeBlocksArr.length; i++) {
      //this would be past 
      var currentTextEl = $("#" + timeBlocksArr[i])

      if (currenthour > timeBlocksArr[i]) {

         currentTextEl.addClass("past")
      }
      else if (currenthour === timeBlocksArr[i]) {
         currentTextEl.addClass("present")
      }
      else if (currenthour < timeBlocksArr[i]) {
         currentTextEl.addClass("future")
      }
   }
}

function loadAppointments() {
   //check if the day is still the same
   var lastUpdatedTime = localStorage.getItem('lastUpdated')
   
   //if it is, loop through timeblocks
   if (systemTime === lastUpdatedTime) {
      for (var i = 0; i < timeBlocksArr.length; i++) {
         //if there's a value, then change the value of the corresponding textarea
         if (localStorage.getItem(timeBlocksArr[i])) {
            var timeblockTextEl = $("#" + timeBlocksArr[i])
            timeblockTextEl.text(localStorage.getItem(timeBlocksArr[i]))
         }
      }
   }
   //if it's not the same day, then wipe local and reset last updated time
   else {
      localStorage.clear()
      localStorage.setItem('lastUpdated', systemTime)
   }
   
}


displayTimeBlockColors()
loadAppointments()

//upon click of a save button
$(".saveBtn").on('click', function () {
   //grab the timeblock
   timeblockEl = $(this).parent().siblings('.col-sm-10').children()

   //set user's text paired with timeblock hour in localstorage, then update time
   localStorage.setItem(timeblockEl.attr('id'), timeblockEl.val())
   localStorage.setItem('lastUpdated', systemTime)
})
