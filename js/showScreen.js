
export function showScreen(screen) {
  [...document.querySelector(`main`).children].map((item) => {
    item.remove();
  });
  [...screen.children()].map((elem) => {
    document.querySelector(`main`).appendChild(elem);
  });
}
