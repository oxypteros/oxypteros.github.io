// warGames.js v.0.0.1 easter egg | MIT License | https://www.phoenicus.com/
// The script will simulate the login from Wargames.
(function (){
`use strict`;
  const insRsp = document.querySelector(`.text`);
  const submit = document.querySelector(`.submit`);
  const exit = document.querySelector(`.exit-btn`);
  const successRsp = `<div class="resp-text"><h2>GREETINGS PROFESSOR FALKEN.</h2><br><button class="resp-btn">SHALL WE PLAY A GAME?</button></div>`;
  const errorRsp = `<div class="resp-text"><h2> IDENTIFICATION NOT RECOGNIZED BY SYSTEM</h2><p class="blink">--CONNECTION TERMINATED--</p><button class="resp-btn">Ok</button></div>`;
  const helpLogon = `<div class="resp-text"><h2> HELP NOT AVAILABLE</h2><button class="resp-btn">Ok</button></div>`;
  const helpGames = `<div class="resp-text"><h2>'GAMES' REFERS TO MODELS, SIMULATIONS AND GAMES WHICH HAVE TACTICAL AND STRATEGIC APPLICATIONS.</h2><button class="resp-btn">Ok</button></div>`;
  const listGames = `<div class="resp-text"><h2 class="list">FALKEN'S MAZE<br>BLACK JACK<br>GIN RUMMY<br>HEARTS<br>BRIDGE<br>CHECKERS<br>CHESS<br>POKER<br>FIGHTER COMBAT<br>GUERILLA ENGAGEMENT<br>DESERT WARFARE<br>AIR-TO-GROUND ACTIONS<br>THEATERWIDE TACTICAL WAR<br>THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE<br><br><span class="blink">GLOBAL THERMONUCLEAR WAR</span></h2><button class="resp-btn">Ok</button></div>`;
  const logon = `Joshua`;
  const helpLog = `Help Logon`;
  const helpG = `Help Games`;
  const listG = `List Games`;
  exit.addEventListener(`click`, function() {
    window.location = `../../contact`;
  });
  function remRsp(){
    let rspText = document.querySelector(`.resp-text`);
    let rspBtn = document.querySelector(`.resp-btn`);
    rspBtn.addEventListener(`click`, function() {
          rspText.remove();
          document.querySelector(`.input`).value = ``;
      });
  }
  const success = () => window.location = `../winner/`; 
  submit.addEventListener(`click`, function () { 
    let userLogon = document.querySelector(`.input`).value;
      if ( userLogon.toUpperCase() === logon.toUpperCase() ){
        insRsp.insertAdjacentHTML(`beforeend`, successRsp);
        let rspBtn = document.querySelector(`.resp-btn`);
        rspBtn.addEventListener(`click`, success);
      } else if ( userLogon.toUpperCase() === helpLog.toUpperCase() ) {
        insRsp.insertAdjacentHTML(`beforeend`, helpLogon);
        remRsp();
      } else if ( userLogon.toUpperCase() === helpG.toUpperCase() ) {
        insRsp.insertAdjacentHTML(`beforeend`, helpGames);
        remRsp();
      } else if ( userLogon.toUpperCase() === listG.toUpperCase() ) {
        insRsp.insertAdjacentHTML(`beforeend`, listGames);
        remRsp();
      } else {
        insRsp.insertAdjacentHTML(`beforeend`, errorRsp);
        remRsp();
      }
  });
})();