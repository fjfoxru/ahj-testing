import { isValid } from '../validators';

test('Ввод букв дываст false', () => {
  const input = 'вымымв';
  expect(isValid(input)).toBe(false);
});

test('Правильный номер вызывает true', () => {
  const input = '4111111111111111';
  expect(isValid(input)).toBe(true);
});

test.each([
  ['Правильный номер вызывает true', '4111111111111111', true],
  ['Неправильный номер вызывает false', '7715964999', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValid(input)).toBe(expected);
});
