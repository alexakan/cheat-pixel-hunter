import stringToDom from '../stringToDom';
import showScreen from '../showScreen';
import greeting from './greeting';

export default () => {
  const intro = stringToDom(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  `);

  // console.log(intro);

  intro.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    // console.log(greeting);
    showScreen(greeting(), false);
  });
  return intro;
};
