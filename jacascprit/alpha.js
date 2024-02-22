// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     // new add
//     const playGrund =document.getElementById('play-graund')
//     playGrund.classList.remove('hidden')
// }

function handleKeybordkeyupEven(even) {
  const playerPressed = even.key;
  console.log("player pressed", playerPressed);

  const currectElamentalfabet = document.getElementById("crunt-alfabet");
  const currectAlfabet = currectElamentalfabet.innerText;
  const expratedAlfabet = currectAlfabet.toLowerCase();
  console.log(playerPressed, expratedAlfabet);

  if (playerPressed === expratedAlfabet) {
    console.log("your numbar true keep play");

    const crruntscore = getTextValueById("crant-score");
    const updateScore = crruntscore + 1;
    setTextElamentByid("crant-score", updateScore);

    //  ###opsonal

    // const cruntScoreElement =document.getElementById('crant-score')
    // const cruntschoreadd =cruntScoreElement.innerText;
    // const cruntshoretext =parseInt(cruntschoreadd);
    // console.log(cruntshoretext);

    // const cruntscore =cruntshoretext + 1 ;
    // cruntScoreElement.innerText = cruntscore ;

    removeBackgrundclorId(expratedAlfabet);
    continueGame();
  } else {
    console.log("you losing life line");
    const crruntlife = getTextValueById("crunt-life");
    const update = crruntlife - 1;
    setTextElamentByid("crunt-life", update);


    if(update===0){
        gameOver()

    }
   
    // **opsonal
    // const cruntLifeElement =document.getElementById('crunt-life');
    // const cruntLifeText =cruntLifeElement.innerText;
    // const cruntLifeCunt = parseInt(cruntLifeText);
    // console.log(cruntLifeCunt);
    // const requreLife = cruntLifeCunt - 1 ;
    // cruntLifeElement.innerText = requreLife ;
  }
}

document.addEventListener("keyup", handleKeybordkeyupEven);

function continueGame() {
  const alfabet = getRandomaplai();
  console.log(alfabet);

  const cruntalfabet = document.getElementById("crunt-alfabet");
  cruntalfabet.innerText = alfabet;

  setBrakgrundcolorById(alfabet);
}

function play() {
  hiddenElement("home-screen");
  hiddenElement('final-score')
  showElemt ('play-graund')
  setTextElamentByid('crunt-life',5)
  setTextElamentByid('crant-score',0)


  showElemt("play-graund");
  continueGame("alfabet");
}
function gameOver(){
  hiddenElement("play-graund");
  showElemt("final-score");
  

 const  lastscore =getTextValueById('crant-score')
 setTextElamentByid("game-score",lastscore)

 const getAlfabet = getElementAlfabetByid('crunt-alfabet')
 removeBackgrundclorId(getAlfabet);
}
