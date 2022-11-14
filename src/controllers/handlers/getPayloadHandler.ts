// @ts-nocheck
import * as cl from '../../logs/logMargins';

const getPayloadHandler = async () => {
  const value = 'Payload';
  cl.o('value', value);
  return { value: value };
};

export default getPayloadHandler;
