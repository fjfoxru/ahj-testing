import CardFormWidget from '../widget';

test('Должен себя нарисовать и соответствовать размерке', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();
  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});

test('Должен валидировать инпут', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardFormWidget.inputSelector);
  input.value = '4111111111111111';

  const submit = container.querySelector(CardFormWidget.submitSelector);
  submit.click();

  expect(input.classList.contains('valid')).toBeTruthy();
});

// test('Должен написать Мир в блоке about при вводе в инпут первой цифры 2', () => {
//   document.body.innerHTML = '<div id="container"></div>';

//   const container = document.querySelector('#container');
//   const widget = new CardFormWidget(container);

//   widget.bindToDOM();

//   const input = container.querySelector(CardFormWidget.inputSelector);
//   input.value = '2111111111111111';
//   const about = container.querySelector(CardFormWidget.aboutSelector);
//   expect(about.innerHTML.contains('Мир<div></div>')).toBeTruthy();
// });