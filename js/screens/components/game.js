import game1 from '../game1';
import game2 from '../game2';
import game3 from '../game3';
import showScreen from '../../showScreen';
import stats from '../stats';
// import headerGame from '../data/headerGame';
// import headerComponent from './header';

export default function game(dataGame, headerGame) {
// const data = dataGame.pop();
  // function timerFunc(timerL) {
  //   setTimeout(function run() {
  //     if (timerL === 0) {
  //       return null;
  //     }
  //     setTimeout(run, 1000);
  //     return timerL--;
  //   }, 1000);
  // }

  if (dataGame.length > 0) {
    switch (dataGame[0].type) {
      case 1:
        showScreen(game1(dataGame), headerGame);
        // if (document.querySelector(`.game__timer`)) {
        //   setInterval(() => {
        //     if (document.querySelector(`.game__timer`).innerHTML === 0) {
        //       game(dataGame);
        //       return null;
        //     }
        //     document.querySelector(`.game__timer`).innerHTML--;
        //     return null;
        //   }, 1000);
        // }

        // let timer = headerGame.timer;
        // setTimeout(function run() {
        //   const t = Object.assign({}, headerGame, {timer: timer--});
        //   showScreen(headerComponent(t));
        //   // document.querySelector(`.game__timer`).innerHTML = timer--;
        //   if (timer === 0) {
        //     return null;
        //   }
        //   setTimeout(run, 1000);
        //   return null;
        // }, 1000);
        break;
      case 2:
        showScreen(game2(dataGame), headerGame);
        break;
      case 3:
        showScreen(game3(dataGame), headerGame);
        break;
      default:
        break;
    }
  } else {
    showScreen(stats(), {});
    // showScreen(headerComponent({}));
  }

}
