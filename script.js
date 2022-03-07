//creating random words to appear
const colours = {
    red: 'merah',
    blue: 'biru',
    pink: 'merah jambu',
    purple:'ungu',
    yellow:'kuning',
    black:'hitam',
    white:'putih',
    green:'hijau',
    brown:'perang',
    orange:'jingga',
  };
  
const random = Math.floor(Math.random() * 10); 
const malayWords = Object.keys(colours);
const randomWords = malayWords[random];

//append random words to div
const para = document.querySelector("p");    
para.textContent = "CLICK START BUTTON!";

//random style.color for each word
const styleColours = ["black", "purple", "yellow", "orange", "pink", "white", "red", "blue", "green", "brown"];
const randomStyleColours = styleColours[random]; 

// setting random style.color for every word in "p"
document.querySelector("p").style.color = randomStyleColours 
const styleColorOfRandomWords = document.querySelector("p").style.color;

// creating choice buttons for player to click
const choices = ["hitam", "perang", "putih", "kuning", "merah jambu", "jingga", "biru", "hijau", "merah", "ungu"]
const choices2 = ["merah", "ungu", "hitam", "putih", "biru", "kuning", "hijau", "perang", "jingga", "merah jambu"]

let correctWordAnswer = randomWords; // randomWords in ML
let correctChoiceAnswer = document.querySelector("p").style.color; console.log(correctChoiceAnswer); //stylecolors  in EL
let correctChoiceAnswerMalay = colours[correctChoiceAnswer]; console.log(correctChoiceAnswerMalay); //stylecolors in ML
// console.log(correctChoiceAnswer);/ console.log(correctChoiceAnswerMalay);

let choiceBtn = document.querySelectorAll('.choiceBtn'); //array of my choicBtn 

//by default all choice buttons are disabled
document.getElementById("choiceBtn1").disabled = true; 
document.getElementById("choiceBtn2").disabled = true;
document.getElementById("choiceBtn3").disabled = true;

choiceBtn.forEach(function(value){
    const random = Math.floor(Math.random() * 10);
    const randomChoices =  choices[random]; // list of words in ml
    const randomBtn = Math.floor(Math.random() * 3); // inding the index of correct answ
    const button1 = document.getElementById("choiceBtn1");
    const button2 = document.getElementById("choiceBtn2");
    const button3 = document.getElementById("choiceBtn3");

   if ((choiceBtn[randomBtn]) === (choiceBtn)[0]){
button1.innerHTML = colours[correctChoiceAnswer];
button2.innerHTML = randomChoices;
button3.innerHTML = choices2[random];
   } else if((choiceBtn[randomBtn]) === (choiceBtn)[1]){
    button1.innerHTML = randomChoices;
    button2.innerHTML = colours[correctChoiceAnswer];
    button3.innerHTML = choices2[random];
     } else if ((choiceBtn[randomBtn]) === (choiceBtn)[2]){
      button1.innerHTML = randomChoices;
      button2.innerHTML = choices2[random];
      button3.innerHTML = colours[correctChoiceAnswer];  
     }});

// checking for correct answer

choiceBtn[0].addEventListener("click", checkColour);
choiceBtn[1].addEventListener("click", checkColour);
choiceBtn[2].addEventListener("click", checkColour);

function checkColour (e){
  if(correctChoiceAnswerMalay === e.currentTarget.innerHTML ) {
     points +=10;
    showPoints();

      const correctAns = e.currentTarget;
      correctAns.style.background = "green";
      setTimeout(()=>{correctAns.style.background="black"},200);
    

} else {
  const correctAns = e.currentTarget;
  correctAns.style.background = "red";
  setTimeout(()=>{correctAns.style.background="black"},200);
}

game();
}

// adding a scoreboard
let points = 0;
const scoreboard = document.createElement("div");
scoreboard.innerHTML = "Total Score: 0 Points";
const topBar = document.getElementsByClassName("top-bar") 
topBar[0].appendChild(scoreboard);

function showPoints() {
  scoreboard.innerHTML = "Total Score: " + points + " Points";
}

function showPointsModal() {
  let gameOverMsg =  document.getElementById("gameOverMsg");
   gameOverMsg.innerHTML = "You've got " + points + " Points!";
}

// adding a timer
const time= document.getElementsByClassName("time"); 
const span = document.createElement("span")
span.setAttribute("id", "timer");
time[0].appendChild(span);

const playAgainButton = document.getElementById("playAgainButton"); 
playAgainButton.addEventListener("click", start);
if(gameType = 1){
  playAgainButton.addEventListener("click", game);
} else{
  playAgainButton.addEventListener("click", gameRound2);
}

let timer; 
let timeLeft = 11;

// What to do when the timer runs out
function gameOver() {
clearInterval(timer); 
openModal();
playAgainButton.style.visibility = 'visible';  // re-show the button, so they can start it again
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    span.innerHTML= (timeLeft);
  else {
    gameOver();
  }
}

function start() {
  timeLeft = 11;
  
document.getElementById("choiceBtn1").disabled = false; 
document.getElementById("choiceBtn2").disabled = false;
document.getElementById("choiceBtn3").disabled = false;
timer = setInterval(updateTimer, 1000);

updateTimer();
  
playAgainButton.style.visibility = 'hidden';   // so hide the button after clicking start
}

// Modal for Game Over
let modal = document.getElementById("myModal"); // Get the button that opens the modal
let btn = document.getElementById("myBtn"); // Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close")[0]; //without the [0] it's an array 

// When the user clicks on the button, open the modal
function openModal(){
modal.style.display = "block";
showPointsModal();
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

// adding event to the NEXTROUND button
let modalNextRound = document.getElementById("modalNextRound");
modalNextRound.onclick = function(){
modal.style.display = "none";
gameRound2();
start();
}

// adding event to the PLAY AGAIN button
 let modalPlayAgain = document.getElementById("modalPlayAgain");
 modalPlayAgain.onclick = function(){
modal.style.display = "none";
restartGame1();
modalPlayAgain.addEventListener("click", restartGame1)
 }
 //

  function game(){
const colours = {
red: 'merah',
blue: 'biru',
pink: 'merah jambu',
purple:'ungu',
yellow:'kuning',
black:'hitam',
white:'putih',
green:'hijau',
brown:'perang',
orange:'jingga',
};
    
const random = Math.floor(Math.random() * 10); 
const malayWords = Object.keys(colours);
const randomWords = malayWords[random];    
    
//append random words to div
const para = document.querySelector("p");     
para.textContent = randomWords;
    
//random style.color for each word
const styleColours = ["black", "purple", "yellow", "orange", "pink", "white", "red", "blue", "green", "brown"];
const randomStyleColours = styleColours[random];
    
// setting random style.color for every word in "p"
document.querySelector("p").style.color = randomStyleColours 
const styleColorOfRandomWords = document.querySelector("p").style.color;
    
// creating choice buttons for player to click
const choices = ["hitam", "perang", "putih", "kuning", "merah jambu", "jingga", "biru", "hijau", "merah", "ungu"]
const choices2 = ["merah", "ungu", "hitam", "putih", "biru", "kuning", "hijau", "perang", "jingga", "merah jambu"]
    
let correctWordAnswer = randomWords; // randomWords in MALAY
let correctChoiceAnswer = document.querySelector("p").style.color; //stylecolors  in EL
correctChoiceAnswerMalay = colours[correctChoiceAnswer];  //stylecolors in MALAY
    
let choiceBtn = document.querySelectorAll('.choiceBtn'); //array of my choicBtn 
choiceBtn.forEach(function(value){
const random = Math.floor(Math.random() * 10);
const randomChoices =  choices[random]; // list of words in ml
const randomBtn = Math.floor(Math.random() * 3); // returns random integers btwn 0 and 2 //finding the index of correct answ
const button1 = document.getElementById("choiceBtn1");
const button2 = document.getElementById("choiceBtn2");
const button3 = document.getElementById("choiceBtn3");
    
if ((choiceBtn[randomBtn]) === (choiceBtn)[0]){
 button1.innerHTML = colours[correctChoiceAnswer];
 button2.innerHTML = randomChoices;
 button3.innerHTML = choices2[random];
  } else if((choiceBtn[randomBtn]) === (choiceBtn)[1]){
   button1.innerHTML = randomChoices;
   button2.innerHTML = colours[correctChoiceAnswer];
   button3.innerHTML = choices2[random];
        } else if ((choiceBtn[randomBtn]) === (choiceBtn)[2]){
        button1.innerHTML = randomChoices;
        button2.innerHTML = choices2[random];
        button3.innerHTML = colours[correctChoiceAnswer];  
       }
    });
    
  
showPoints();
showPointsModal();
}
//

function gameRound2(){
    
points = 0;
  
const colours = {
red: 'merah',
blue: 'biru',
pink: 'merah jambu',
purple:'ungu',
yellow:'kuning',
black:'hitam',
white:'putih',
green:'hijau',
brown:'perang',
orange:'jingga',
};
      
const random = Math.floor(Math.random() * 10); //returns 0-9
const malayWords = Object.values(colours); //round 2 = changed from keys to values 
const randomWords = malayWords[random];     
      
//append random words to div
const para = document.querySelector("p");     
para.textContent = randomWords;
      
//random style.color for each word
const styleColours = ["black", "purple", "yellow", "orange", "pink", "white", "red", "blue", "green", "brown"];
const randomStyleColours = styleColours[random];
      
// setting random style.color for every word in "p"
document.querySelector("p").style.color = randomStyleColours 
const styleColorOfRandomWords = document.querySelector("p").style.color;
      
// creating choice buttons for player to click
const choices = ["black", "brown", "white", "yellow", "pink", "orange", "blue", "green", "red", "purple"]
const choices2 = ["red", "purple", "black", "white", "blue", "yellow", "green", "brown", "orange", "pink"]
      
let correctWordAnswer = randomWords; // randomWords in MALAY
let correctChoiceAnswer = document.querySelector("p").style.color; //stylecolors  in EL
correctChoiceAnswerMalay = colours[correctChoiceAnswer];  //stylecolors in MALAY
      
let choiceBtn = document.querySelectorAll('.choiceBtn'); //array of my choicBtn 
choiceBtn.forEach(function(value){
const random = Math.floor(Math.random() * 10);
const randomChoices =  choices[random]; // list of words in ml
const randomBtn = Math.floor(Math.random() * 3); // returns random integers btwn 0 and 2 //finding the index of correct answ
const button1 = document.getElementById("choiceBtn1");
const button2 = document.getElementById("choiceBtn2");
const button3 = document.getElementById("choiceBtn3");
      
if ((choiceBtn[randomBtn]) === (choiceBtn)[0]){
button1.innerHTML = [correctChoiceAnswer];
button2.innerHTML = randomChoices;
button3.innerHTML = choices2[random];
} else if((choiceBtn[randomBtn]) === (choiceBtn)[1]){
button1.innerHTML = randomChoices;
button2.innerHTML = [correctChoiceAnswer];
button3.innerHTML = choices2[random];
} else if ((choiceBtn[randomBtn]) === (choiceBtn)[2]){
button1.innerHTML = randomChoices;
button2.innerHTML = choices2[random];
button3.innerHTML = [correctChoiceAnswer];  
}
});
      
// checking for correct answer
      
choiceBtn[0].addEventListener("click", checkColour);
 choiceBtn[1].addEventListener("click", checkColour);
choiceBtn[2].addEventListener("click", checkColour);
      
function checkColour (e){
if(correctChoiceAnswerMalay === e.currentTarget.innerHTML ) {
 points +=10;
 showPoints();
    
const correctAns = e.currentTarget;
correctAns.style.background = "green";
setTimeout(()=>{correctAns.style.background="black"},200);
console.log(correctChoiceAnswerMalay);
console.log(e.currentTarget.innerHTML);
    
 } else {
const correctAns = e.currentTarget;
 correctAns.style.background = "red";
 setTimeout(()=>{correctAns.style.background="black"},200);
    }
    
    game();
    
showPoints();
showPointsModal();
 }}
//
    
function restartGame1(){
        
points = 0;
showPoints();
    
const colours = {
red: 'merah',
 blue: 'biru',
 pink: 'merah jambu',
purple:'ungu',
yellow:'kuning',
black:'hitam',
white:'putih',
green:'hijau',
brown:'perang',
orange:'jingga',
};
        
const random = Math.floor(Math.random() * 10); 
const malayWords = Object.keys(colours);
const randomWords = malayWords[random];
        
//append random words to div
 const para = document.querySelector("p");     
para.textContent = randomWords;
        
 //random style.color for each word
const styleColours = ["black", "purple", "yellow", "orange", "pink", "white", "red", "blue", "green", "brown"];
const randomStyleColours = styleColours[random];
        
 // setting random style.color for every word in "p"
document.querySelector("p").style.color = randomStyleColours 
const styleColorOfRandomWords = document.querySelector("p").style.color;
        
 // creating choice buttons for player to click
 const choices = ["hitam", "perang", "putih", "kuning", "merah jambu", "jingga", "biru", "hijau", "merah", "ungu"]
 const choices2 = ["merah", "ungu", "hitam", "putih", "biru", "kuning", "hijau", "perang", "jingga", "merah jambu"]
        
let correctWordAnswer = randomWords; // randomWords in MALAY
let correctChoiceAnswer = document.querySelector("p").style.color; //stylecolors  in EL
correctChoiceAnswerMalay = colours[correctChoiceAnswer];  //stylecolors in MALAY
        
let choiceBtn = document.querySelectorAll('.choiceBtn'); //array of my choicBtn 
    
choiceBtn.forEach(function(value){
const random = Math.floor(Math.random() * 10);
const randomChoices =  choices[random]; // list of words in ml
const randomBtn = Math.floor(Math.random() * 3); //finding the index of correct answ
const button1 = document.getElementById("choiceBtn1");
const button2 = document.getElementById("choiceBtn2");
const button3 = document.getElementById("choiceBtn3");
        
if ((choiceBtn[randomBtn]) === (choiceBtn)[0]){
button1.innerHTML = colours[correctChoiceAnswer];
button2.innerHTML = randomChoices;
button3.innerHTML = choices2[random];
 } else if((choiceBtn[randomBtn]) === (choiceBtn)[1]){
button1.innerHTML = randomChoices;
button2.innerHTML = colours[correctChoiceAnswer];
button3.innerHTML = choices2[random];
} else if ((choiceBtn[randomBtn]) === (choiceBtn)[2]){
 button1.innerHTML = randomChoices;
button2.innerHTML = choices2[random];
button3.innerHTML = colours[correctChoiceAnswer];  
}
});

document.getElementById("choiceBtn1").disabled = true; 
document.getElementById("choiceBtn2").disabled = true;
document.getElementById("choiceBtn3").disabled = true;

showPoints();
showPointsModal();
}
 //









