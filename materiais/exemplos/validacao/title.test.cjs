'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { normalizeTitle } = require('./validation.js');

test('rejeita título vazio', () => {
  assert.throws(() => normalizeTitle(''), RangeError);
});

test('rejeita somente espaços', () => {
  assert.throws(() => normalizeTitle('   \t  '), RangeError);
});

test('remove espaços nas pontas e preserva o conteúdo', () => {
  assert.equal(normalizeTitle('  Gravar aula  '), 'Gravar aula');
});

test('aceita exatamente 120 caracteres', () => {
  const title = 'a'.repeat(120);
  assert.equal(normalizeTitle(title), title);
});

test('rejeita 121 caracteres', () => {
  assert.throws(() => normalizeTitle('a'.repeat(121)), RangeError);
});

test('rejeita entrada não textual', () => {
  for (const value of [null, undefined, 1, {}, [], true]) {
    assert.throws(() => normalizeTitle(value), TypeError);
  }
});
