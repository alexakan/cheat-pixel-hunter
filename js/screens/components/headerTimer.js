export default (timer) => {
  if (timer) {
    return `<h1 class="game__timer">${timer}</h1>`;
  }
  return ``;
};
