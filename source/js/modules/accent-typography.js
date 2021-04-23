export default class AccentTypographyBuilder {
  constructor(selector, duration, classForActivate, property) {
    this._selector = selector;
    this._duration = duration;
    this._classForActivate = classForActivate;
    this._property = property;

    this._element = document.querySelector(this._selector);
    this._timeOffset = 0;

    this.prepareText();
  }
  createLetterContainer(char) {
    const span = document.createElement(`span`);
    span.textContent = char;
    this._timeOffset = this.getRandomInteger(0, 600);
    span.style.transition = `${this._property} ${this._duration}ms ease ${this._timeOffset}ms`;
    return span;
  }

  prepareText() {
    if (!this._element) {
      return;
    }
    const words = this._element.textContent.trim().split(` `).filter((word) => word !== ``);

    const content = words.reduce((fragmentParent, word) => {
      const wordLetters = Array.from(word).reduce((fragment, char) => {
        fragment.appendChild(this.createLetterContainer(char));

        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordLetters);

      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnim() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnim() {
    if (!this._element) {
      return;
    }
    this._element.classList.remove(this._classForActivate);
  }

  getRandomInteger(min, max) {
    let randomInt = min + Math.random() * (max + 1 - min);

    return Math.floor(randomInt);
  }
}
