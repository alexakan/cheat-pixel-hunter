import game1 from '../game1';
import game2 from '../game2';
import game3 from '../game3';
import showScreen from '../../showScreen';
import stats from '../stats';
import headerGame from '../data/headerGame';

export default function game(dataGame, statistic = 0, fail = 0) {

  let header = Object.assign(headerGame, {life: headerGame.life - fail});
  if (!(typeof (statistic) === `object`)) {
    statistic = dataGame.map((item, i) => {
      return `<li class="stats__result stats__result--unknown"></li>`;
    });
  }
  if (dataGame.length > 0) {
    switch (dataGame[0].type) {
      case 1:
        showScreen(game1(dataGame, statistic), header);
        break;
      case 2:
        showScreen(game2(dataGame, statistic), header);
        break;
      case 3:
        showScreen(game3(dataGame, statistic), header);
        break;
      default:
        break;
    }
  } else {
    showScreen(stats(), {});
  }

}
