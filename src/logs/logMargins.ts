// @ts-nocheck
const { log } = console;

export const o = (a = '', b = '', c = '', d = '', e = '', f = '', g = '') => {
  log(a, b, c, d, e, f, g);
};

export const mt = (a = '', b = '', c = '', d = '', e = '', f = '', g = '') => {
  log('');
  log(a, b, c, d, e, f, g);
};

export const mb = (a = '', b = '', c = '', d = '', e = '', f = '', g = '') => {
  log(a, b, c, d, e, f, g);
  log('');
};

export const w = (a = '', b = '', c = '', d = '', e = '', f = '', g = '') => {
  log('');
  log(a, b, c, d, e, f, g);
  log('');
};
