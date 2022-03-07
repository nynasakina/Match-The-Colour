function pageLoad(){
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
    //   console.log(Object.values(colours));       // Malay Words
    const malayWords = Object.keys(colours);
    const randomWords = malayWords[random];
    randomWords.className = "random-words";        // console.log(randomWords);
    
    
    //append random words to div
    const para = document.querySelector("p");     // console.log(para);
    const img = document.createElement("img");
    para.textContent = "CLICK START BUTTON!";
    
    //random style.color for each word
    const styleColours = ["black", "purple", "yellow", "orange", "pink", "white", "red", "blue", "green", "brown"];
    const randomStyleColours = styleColours[random];
    // console.log(randomStyleColours);
    
    // setting random style.color for every word in "p"
    document.querySelector("p").style.color = randomStyleColours 
    const styleColorOfRandomWords = document.querySelector("p").style.color;

    //choices
    const choices = ["hitam", "perang", "putih", "kuning", "merah jambu", "jingga", "biru", "hijau", "hijau", "merah", "ungu"]
const choices2 = ["merah", "ungu", "hitam", "putih", "biru", "kuning", "hijau", "perang", "jingga", "merah jambu"]

let correctWordAnswer = randomWords; console.log(correctWordAnswer); // randomWords in MALAY
let correctChoiceAnswer = document.querySelector("p").style.color; console.log(correctChoiceAnswer); //stylecolors  in EL
let correctChoiceAnswerMalay = colours[correctChoiceAnswer]; console.log(correctChoiceAnswerMalay); //stylecolors in MALAY


let choiceBtn = document.querySelectorAll('.choiceBtn'); //array of my choicBtn 

//by default all choice button is disabled
document.getElementById("choiceBtn1").disabled = true; 
document.getElementById("choiceBtn2").disabled = true;
document.getElementById("choiceBtn3").disabled = true;

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
     }});

     const playAgainButton = document.getElementById("playAgainButton")
     playAgainButton.addEventListener("click", start);

    

    /*page load function = modal restart
1. generate question
2. generate choice buttons (disabled)
3. add evet lisrener to start button
*/
}

function start(){
    document.getElementById("choiceBtn1").disabled = false; 
document.getElementById("choiceBtn2").disabled = false;
document.getElementById("choiceBtn3").disabled = false;
  timer = setInterval(updateTimer, 1000);

  updateTimer();
  
playAgainButton.style.visibility = 'hidden';
}


let timer; 
let timeLeft = 4; // seconds


function gameOver() {
  clearInterval(timer); 
openModal();
  playAgainButton.style.visibility = 'visible';
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    span.innerHTML= (timeLeft);
  else {
    gameOver();
  }
}

function openModal(){
    modal.style.display = "block";
    showPointsModal();
  }
  
function showPoints() {
    scoreboard.innerHTML = "Total Score: " + points + " Points";
  }





/*start button function
1. start game (enable buttons)
2. start timer
*/


/* choice buttons function
1. check if correct (change colour)
2. go to next question (generate questions + generate options)
*/


/*time runs out function
1. modal appear
2. show score
*/

/*modal next round function
1. generate question (but in new object where keys and values are swapped)
2. generate choice buttons (disabled)
3. add event lisrener to start button
*/














