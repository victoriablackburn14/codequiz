var startBtn = document.querySelector(".startBtn");
var counter = document.querySelector("#counter");
var choices1= document.querySelector("#choices1");
var choices2= document.querySelector("choices2");
var choice= document.querySelector(".choice");
var counter= document.querySelector("#counter");
var secondsLeft= 10;

startBtn.addEventListener("click", function setTime() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        counter.textContent= secondsLeft + "seconds left till quiz over";
        console.log(secondsLeft);

    if(secondsLeft===0){
        clearInterval(timeInterval);
        sendMessage("Quiz has ended, you are out of time");
        }    
    }, 1000);
    

})

setTime();