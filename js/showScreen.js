import headerComponent from './screens/components/header';
import footerComponent from './screens/components/footer';

export default function showScreen(screen, header = true, footer = true) {
  let isFooter = ``;
  let isHeader = ``;
  [...document.getElementsByTagName(`main`)[0].children].map((item) => {
    switch (item.nodeName) {
      case `HEADER`:
        isHeader = true;
        if (!header) {
          item.remove();
          isHeader = false;
        }
        if (screen.nodeType === 11 && screen.children[0].nodeName === `HEADER`) {
          item.replaceWith(screen.cloneNode(true));
          break;
        }
        if (typeof header === `object`) {
          item.replaceWith(headerComponent(header));
          // console.log(item);
          // let timer = 30;
          // setTimeout(function run() {
          //   document.querySelector(`.game__timer`).innerHTML = timer--;
          //   if (timer === 0) {
          //     return null;
          //   }
          //   setTimeout(run, 1000);
          //   return null;
          // }, 1000);
        // } else {
        //   item.remove();
        //   isHeader = false;
        }
        break;
      case `FOOTER`:
        isFooter = true;
        if (!footer) {
          item.remove();
          isFooter = false;
        }
        break;
      default:
        if (screen.children[0].nodeName === `HEADER`) {
          break;
        }
        item.replaceWith(screen);
        break;
    }
  });

  if (header && !isHeader) {
    document.querySelector(`main`).prepend(headerComponent());
  }
  if (footer && !isFooter) {
    document.querySelector(`main`).append(footerComponent());
  }
}
