import { assert, expect, test } from 'vitest'

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
})

test('JSON', () => {
  const input = {
    title: 'hello',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"title":"hello"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
