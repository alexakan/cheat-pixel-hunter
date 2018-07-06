import stringToDom from '../stringToDom';
import gameComponent from './components/game';
// import showScreen from '../showScreen';
// import greeting from './greeting';
// import game3 from './game3';

export default function (data, headerGame) {
  const dataGame = data.shift();
  let t = 0;
  const game2 = stringToDom(`
  <div class="game">
    <p class="game__task">${dataGame.description}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${dataGame.content.option1}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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

  [...game2.querySelectorAll(`input`)].map((item) => {
    item.addEventListener(`click`, (event) => {
      let arrAsk = [...document.forms[0]].map((it) => {
        if (it.checked) {
          return {name: it.name, value: it.value};
        }
        return false;
      }).filter((it) => {
        if (it !== `undefined`) {
          return it;
        }
        return false;
      });

      if (arrAsk.length === 1) {
        clearInterval(t);
        gameComponent(data, headerGame);
      }
    });
  });

  game2.querySelector(`.game__option img`).addEventListener(`load`, (ev) => {
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

  return game2;
}

