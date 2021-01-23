import { isValid, isCheckPaySystem } from './validators';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <form data-widget="innogrn-form-widget">
      <div class="form-control">
          <div data-id="innogrn-about"></div>
          <label for="innorgn-input">Введите карту</label>
          <input id="innorgn-input" data-id="innogrn-input" type="text">
      </div>
      <button data-id="innogrn-submit">Далее</button>
    </form>
    `;
  }

  static get inputSelector() {
    return '[data-id=innogrn-input]';
  }

  static get submitSelector() {
    return '[data-id=innogrn-submit]';
  }

  static get aboutSelector() {
    return '[data-id=innogrn-about]';
  }  

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const input = this.parentEl.querySelector(this.constructor.inputSelector);
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    input.addEventListener('input', evt => this.onInput(evt));
    submit.addEventListener('click', evt => this.onSubmit(evt));
  }
  onInput(evt) {
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    const inputAbout = this.parentEl.querySelector(this.constructor.aboutSelector);
    const PaySystem = isCheckPaySystem(inputEl.value);
    inputAbout.innerHTML=`${PaySystem}`;
  }

  onSubmit(evt) {
    // add event listeners here
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (isValid(inputEl.value)) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
  }
}
