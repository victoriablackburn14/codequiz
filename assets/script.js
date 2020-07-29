var startBtn = document.querySelector(".startBtn");
var counter = document.querySelector("#counter");
var choices1= document.querySelector("#choices1");
var choices2= document.querySelector("choices2");
var choice= document.querySelector(".choice");
var counter= document.querySelector("#counter");
var secondsLeft= 10;
console.log("sdkjhskjhdjkshsdkj")
startBtn.addEventListener("click", function() {
    console.log(startBtn);
    var timeInterval = setInterval(function() {
        secondsLeft--;
        counter.textContent= secondsLeft + "seconds left till quiz over";
        console.log(secondsLeft);
    }, 1000)
    choice.addEventListener("click", function(){   

    if(secondsLeft===0 && choices1!=='D' || choices2!=='C'){
        clearInterval(timeInterval);
        alert("Wrong answer, you are out of time");
        console.log(choices1);
        console.log(choices2);
        }    
    
   if( choices1=='D' && choices2=='C'){
    alert("You are correct!");
    prompt("Enter your intials and high score:");
    };
    })
})