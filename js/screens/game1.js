import stringToDom from '../stringToDom';
import gameComponent from './components/game';
// import { stat } from 'fs';

export default (data, statistic) => {
  const dataGame = data.shift();
  let t = 0;
  let fail = 0;
  let iLevel = statistic.indexOf(`<li class="stats__result stats__result--unknown"></li>`);
  const game1 = stringToDom(`
  <div class="game">
    <p class="game__task">${dataGame.description}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${dataGame.content.option1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${dataGame.content.option2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
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

  [...game1.querySelectorAll(`input`)].map((item) => {
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

      if (arrAsk.length === 2) {
        clearInterval(t);
        fail = arrAsk.map((ans) => {
          return (dataGame.right[ans.name] === ans.value) ? true : false;
        }).every(Boolean) ? 0 : 1;
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

  game1.querySelector(`.game__option img`).addEventListener(`load`, (ev) => {
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

  return game1;
};

