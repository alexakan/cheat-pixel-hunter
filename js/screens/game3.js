import stringToDom from '../stringToDom';
import gameComponent from './components/game';
// import showScreen from '../showScreen';
// import greeting from './greeting';
// import stats from './stats';

export default function (data, headerGame) {
  const dataGame = data.shift();
  let t = 0;
  const game3 = stringToDom(`
  <div class="game">
    <p class="game__task">${dataGame.description}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${dataGame.content.option1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${dataGame.content.option2}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${dataGame.content.option3}" alt="Option 3" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  `);

  [...game3.querySelectorAll(`.game__option`)].map((item) => {
    item.addEventListener(`click`, (event) => {
      clearInterval(t);
      gameComponent(data, headerGame);
      return event.target;
    });
  });

  game3.querySelector(`.game__option img`).addEventListener(`load`, (ev) => {
    t = setInterval(() => {
      if (document.querySelector(`.game__timer`).innerHTML < 1) {
        clearInterval(t);
        gameComponent(data, headerGame);
        return null;
      }
      document.querySelector(`.game__timer`).innerHTML--;
      return null;
    }, 1000);
  });

  return game3;
}

