import stringToDom from '../stringToDom';
import gameComponent from './components/game';
// import showScreen from '../showScreen';
// import greeting from './greeting';
// import game3 from './game3';

export default function (data, statistic) {
  const dataGame = data.shift();
  let t = 0;
  let fail = 0;
  let iLevel = statistic.indexOf(`<li class="stats__result stats__result--unknown"></li>`);
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
        ${statistic.join(``)}
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
      }).filter(Boolean);

      if (arrAsk.length === 1) {
        clearInterval(t);
        fail = dataGame.right[arrAsk[0].name] === arrAsk[0].value ? 0 : 1;
        if (fail) {
          statistic[iLevel] = `<li class="stats__result stats__result--wrong"></li>`;
        } else {
          let howLong = document.querySelector(`.game__timer`).innerHTML;
          switch (true) {
            case howLong > 20:
              statistic[iLevel] = `<li class="stats__result stats__result--fast"></li>`;
              break;
            case howLong < 10:
              statistic[iLevel] = `<li class="stats__result stats__result--slow"></li>`;
              break;
            default:
              statistic[iLevel] = `<li class="stats__result stats__result--correct"></li>`;
              break;
          }
        }
        gameComponent(data, statistic, fail);
      }
    });
  });

  game2.querySelector(`.game__option img`).addEventListener(`load`, (ev) => {
    t = setInterval(() => {
      if (!document.querySelector(`.game__timer`)) {
        clearInterval(t);
        return null;
      }
      if (document.querySelector(`.game__timer`).innerHTML < 1) {
        clearInterval(t);
        statistic[iLevel] = `<li class="stats__result stats__result--wrong"></li>`;
        gameComponent(data, statistic, ++fail);
        return null;
      }
      document.querySelector(`.game__timer`).innerHTML--;
      return null;
    }, 1000);
  });

  return game2;
}

