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
        if (typeof header === `object`) {
          item.replaceWith(headerComponent(header));
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
