import { football } from '../src/football';

test('football', () => {
  expect(football('1:2', '1:2')).toBe(2);
  expect(football('2:2', '2:2')).toBe(2);

  expect(football('1:3', '1:2')).toBe(1);
  expect(football('3:3', '2:2')).toBe(1);

  expect(football('1:2', '2:1')).toBe(0);
  expect(football('2:1', '2:2')).toBe(0);
  expect(football('10:3', '2:3')).toBe(0);
});
