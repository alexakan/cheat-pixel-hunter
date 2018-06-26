// import showScreen from 'showScreen';

const screens = [...document.querySelectorAll(`template`)];

function showScreen(screen) {
  [...document.querySelector(`main`).children].map((item) => {
    item.remove();
  });
  let sc = document.importNode(screen.content, true);
  document.querySelector(`main`).appendChild(sc);
}
let curScreen = 0;

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.key === `ArrowRight`) {
    if (curScreen < screens.length - 1) {
      showScreen(screens[++curScreen]);
    }
  } else if (event.altKey && event.key === `ArrowLeft`) {
    if (curScreen > 0) {
      showScreen(screens[--curScreen]);
    }
  }
});


