import stringToDom from '../stringToDom';
// import showScreen from '../showScreen';
// import game1 from './game1';
// import headerGame from './data/headerGame';
import dataGameFunc from './data/gameData';
import gameComponent from './components/game';
// import header from './components/header';

export default () => {
  const dataGame = dataGameFunc();
  const rules = stringToDom(`
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  `);

  rules.querySelector(`.continue`).addEventListener(`click`, () => {
    gameComponent(dataGame);
    // showScreen(game1(), headerGame);
  });
  rules.querySelector(`.rules__input`).addEventListener(`input`, (ev) => {
    if (ev.target.value !== ``) {
      document.querySelector(`.continue`).disabled = false;
    }
  });

  return rules;
};
