var startBtn = document.querySelector(".startBtn");
var counter = document.querySelector("#counter");
var choices1= document.querySelector("#choices1");
var choices2= document.querySelector("choices2");
var choice= document.querySelector(".choice");
var counter= document.querySelector("#counter");
var secondsLeft= 10;

startBtn.addEventListener("click", function() {
    console.log(startBtn);
    var timeInterval = setInterval(function() {
        secondsLeft--;
        counter.textContent= secondsLeft + "seconds left till quiz over";
        if(secondsLeft===0){
            clearInterval(timeInterval);
            alert("You are out of time!");
        }
        
        console.log(secondsLeft);
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
    }, 1000)
     
    
   
})