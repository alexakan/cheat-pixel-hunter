import intro from './screens/intro';
// import greeting from './screens/greeting';
// import rules from './screens/rules';
// import game1 from './screens/game1';
// import game2 from './screens/game2';
// import game3 from './screens/game3';
// import stats from './screens/stats';
import showScreen from './showScreen';

// const screens = [intro, greeting, rules, game1, game2, game3, stats];

// let curScreen = 0;

// document.addEventListener(`keydown`, (event) => {
//   if (event.altKey && event.key === `ArrowRight`) {
//     if (curScreen < screens.length - 1) {
//       showScreen(screens[++curScreen]);
//     }
//   } else if (event.altKey && event.key === `ArrowLeft`) {
//     if (curScreen > 0) {
//       showScreen(screens[--curScreen]);
//     }
//   }
// });

showScreen(intro(), false);


