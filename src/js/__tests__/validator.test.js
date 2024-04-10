import Validator from '../validator';

test('format phone 1', () => {
  const validator = new Validator('8 (927) 123-45-67');
  expect(validator.validatePhone()).toBe('+79271234567');
});

test('format phone 2', () => {
  const validator = new Validator('+7 960 000 00 00');
  expect(validator.validatePhone()).toBe('+79600000000');
});

test('format phone 3', () => {
  const validator = new Validator('+86 000 000 0000');
  expect(validator.formatPhone()).toBe('+860000000000');
});
