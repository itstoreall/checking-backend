// @ts-nocheck
import * as cl from '../../logs/logMargins';

const createPayloadHandler = async req => {
  const { value } = req.body;
  cl.o('value:', value);
  return { value: value };
};

export default createPayloadHandler;
