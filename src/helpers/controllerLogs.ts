// @ts-nocheck
import * as cl from '../logs/logMargins';

export const creareReq = (name, a = '', b = '', c = '', d = '', e = '') => {
  return cl.w(`=======> ${name}`, a, b, c, d, e);
};

export const createRes = (name, response, a = '', b = '') => {
  return cl.w(`<======= response ${name}:`, response, a, b);
};

export const createResLength = (name, response, a = '', b = '') => {
  return cl.w(
    `<======= response ${name}:`,
    Array.isArray(response) ? response?.length : response,
    a,
    b
  );
};

export const createResErr = (name, err, a = '', b = '') => {
  return cl.w(
    `<======= response ${name} ERROR:`,
    { message: err.message },
    a,
    b
  );
};
