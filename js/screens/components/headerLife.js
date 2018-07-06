export default (life) => {
  if (life) {
    return `
    <div class="game__lives">
      ${new Array(3 - life)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      ${new Array(life)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
    </div>`;
  }
  return ``;
};
