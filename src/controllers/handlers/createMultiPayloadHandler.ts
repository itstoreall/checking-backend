// @ts-nocheck
import fs from 'fs';
import { multiFile } from '../../constants';

const setPath = fileName => `${multiFile}/${fileName}.json`;
const checkFile = fileName => fs.existsSync(setPath(fileName)); // *

const createMultiFile = async data => {
  const { fileName, payloadId, payload } = data;

  data &&
    fs.writeFileSync(
      setPath(fileName),
      JSON.stringify([{ payloadId, payload }]),
      e => (e ? console.log(e) : null)
    );

  return await getFile(fileName);
};

const getFile = async fileName => {
  const _data = fs.readFileSync(setPath(fileName), (e, data) => {
    data ? JSON.parse(data.toString()) : null;
  });

  return _data.toString();
};

const updateFile = async data_ => {
  const { fileName, payloadId, payload } = data_;
  const _data = await getFile(fileName);

  _data &&
    fs.writeFileSync(
      setPath(fileName),
      `[${_data.slice(1, -1)}, ${JSON.stringify({ payloadId, payload })}]`,
      e => (e ? console.log(e) : null)
    );

  return await getFile(fileName);
};

const createMultiPayloadHandler = async req => {
  const { fileName, payloadId, payload } = req.body;

  console.log('create multi payload');

  const data_ = {
    fileName: fileName,
    payloadId: payloadId,
    payload: payload,
  };

  const isFile = checkFile(data_.fileName);

  const result = isFile
    ? await updateFile(data_)
    : await createMultiFile(data_);

  // JSON.parse(result).forEach(el => console.log(el.payloadId)); // *

  return JSON.parse(result);
};

export default createMultiPayloadHandler;
