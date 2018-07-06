import stringToDom from '../../stringToDom';
import showScreen from '../../showScreen';
import greeting from '../greeting';
import headerTimer from './headerTimer';
import headerLife from './headerLife';

export default (data = {}) => {
  const header = stringToDom(`
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    ${headerTimer(data.timer)}
    ${headerLife(data.life)}
  </header>
  `);

  header.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(greeting(), false);
  });

  return header;
};
