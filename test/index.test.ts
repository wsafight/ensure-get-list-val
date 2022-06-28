import { ensureGetValFromList } from "../src";

test('ensure empty list', () => {
  const currentVal = ensureGetValFromList<number>({
    items: []
  })
  expect(currentVal).toEqual(null)
})

test('ensure number list', () => {
  const currentVal = ensureGetValFromList<number>({
    items: [1, 2, 3]
  })
  expect(currentVal).toEqual(1)
})

test('ensure number list inner', () => {
  const currentVal = ensureGetValFromList<number>({
    items: [1, 2, 3],
    value: 2,
  })
  expect(currentVal).toEqual(2)
})

test('ensure number list outer', () => {
  const currentVal = ensureGetValFromList<number>({
    items: [1, 2, 3],
    value: 4,
  })
  expect(currentVal).toEqual(1)
})


test('ensure string list inner', () => {
  const currentVal = ensureGetValFromList<string>({
    items: ['a', 'b', 'c'],
    value: 'a',
  })
  expect(currentVal).toEqual('a')
})

test('ensure string list outer', () => {
  const currentVal = ensureGetValFromList<string>({
    items: ['a', 'b', 'c'],
    value: 'd',
  })
  expect(currentVal).toEqual('a')
})

test('ensure string list pos', () => {
  const currentVal = ensureGetValFromList<string>({
    items: ['a', 'b', 'c'],
    value: 'd',
    pos: 'last'
  })
  expect(currentVal).toEqual('c')
})

type optionsVal = string

interface stringSelectOptinos {
  label: optionsVal;
  value: optionsVal;
}

test('ensure object list inner', () => {
  const currentVal = ensureGetValFromList<stringSelectOptinos, optionsVal>({
    items: ['1', '2', '3'].map(item => ({label: item, value: item})),
    value: '1',
    getVal: (item) => item.value,
    pos: 'last'
  })
  expect(currentVal).toEqual('1')
})

test('ensure object list outer', () => {
  const currentVal = ensureGetValFromList<stringSelectOptinos, string>({
    items: ['1', '2', '3'].map(item => ({label: item, value: item})),
    value: '4',
    getVal: (item) => item.value,
  })
  expect(currentVal).toEqual('1')
})

test('ensure object list pos', () => {
  const currentVal = ensureGetValFromList<stringSelectOptinos, string>({
    items: ['1', '2', '3'].map(item => ({label: item, value: item})),
    value: '4',
    getVal: (item) => item.value,
    pos: 'last'
  })
  expect(currentVal).toEqual('3')
})