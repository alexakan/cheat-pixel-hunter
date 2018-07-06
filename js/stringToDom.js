export default (strDom) => {
  const elem = document.createElement(`template`);
  elem.innerHTML = strDom;
  return elem.content;
};
