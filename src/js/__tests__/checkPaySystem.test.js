import { isCheckPaySystem } from '../validators';

test('При вводе первой цифры = 2 выдаст - Мир', () => {
  const input = '2111111111111111';
  expect(isCheckPaySystem(input)).toBe('Мир');
});

test.each([
  ['При вводе первой цифры = 4 выдаст - VISA', '4111111111111111', 'VISA'],
  ['При вводе первой цифры = 8 выдаст - MasterCard', '87715964999', 'MasterCard'],
  ['При вводе первой цифры = 3 выдаст - Maestro', '37715964999', 'Maestro'],
  ['При вводе первой цифры = 6 выдаст - Maestro', '67715964999', 'Maestro'],
  ['При вводе первой цифры = 0 выдаст - Не понятно', '07715964999', 'Не понятно'],
])(('it should be %s'), (_, input, expected) => {
  expect(isCheckPaySystem(input)).toBe(expected);
});
