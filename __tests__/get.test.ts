import { get } from '../src/get';

const input = {
  field1: 'value',
  field2: {
    field3: null,
    field4: [],
    field5: {
      field6: 'value',
      field7: {},
    },
    field9: {},
  },
};

test('get', () => {
  expect(get(input, 'field1')).toBe(input.field1);
  expect(get(input, 'field2.field3')).toBeUndefined();
  expect(get(input, ['field2', 'field4'])).toBe(input.field2.field4);
  expect(get(input, 'field2.field5.unknown.unknown')).toBeUndefined();

  expect(get(input, 'field2.field5.unknown.unknown', 'foo')).toBe('foo');
  expect(get(input, ['field2', 'field3'], null)).toBeNull();
  expect(get(input, 'field2.field5.field7.unknown', [])).toStrictEqual([]);
  expect(get(input, ['field2', 'field3', 'unknown'], null)).toBeNull();
});
