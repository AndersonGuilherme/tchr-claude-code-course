'use strict';

function normalizeTitle(value) {
  if (typeof value !== 'string') {
    throw new TypeError('O título deve ser um texto.');
  }
  const title = value.trim();
  if (title.length === 0) {
    throw new RangeError('Digite um título.');
  }
  if (title.length > 120) {
    throw new RangeError('Use no máximo 120 caracteres.');
  }
  return title;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { normalizeTitle };
} else {
  globalThis.TaskValidation = Object.freeze({ normalizeTitle });
}
