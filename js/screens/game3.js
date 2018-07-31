import stringToDom from '../stringToDom';
import gameComponent from './components/game';
// import showScreen from '../showScreen';
// import greeting from './greeting';
// import stats from './stats';

export default function (data, statistic) {
  const dataGame = data.shift();
  let t = 0;
  let fail = 0;
  let iLevel = statistic.indexOf(`<li class="stats__result stats__result--unknown"></li>`);
  const game3 = stringToDom(`
  <div class="game">
    <p class="game__task">${dataGame.description}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${dataGame.content.option1}" alt="Option 1" width="304" height="455" style="object-fit:cover">
      </div>
      <div class="game__option">
        <img src="${dataGame.content.option2}" alt="Option 2" width="304" height="455" style="object-fit:cover">
      </div>
      <div class="game__option">
        <img src="${dataGame.content.option3}" alt="Option 3" width="304" height="455" style="object-fit:cover">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${statistic.join(``)}
      </ul>
    </div>
  </div>
  `);

  [...game3.querySelectorAll(`.game__option`)].map((item) => {
    item.addEventListener(`click`, (event) => {
      clearInterval(t);
      fail = event.target.querySelector(`img`).src === dataGame.right.question1 ? 0 : 1;
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
      return null;
    });
  });

  game3.querySelector(`.game__option img`).addEventListener(`load`, (ev) => {
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

  return game3;
}

