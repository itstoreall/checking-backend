// @ts-nocheck
import fs from 'fs';
import { multiFile } from '../../constants';

const setPath = fileName => `${multiFile}/${fileName}.json`;
const checkFile = fileName => fs.existsSync(setPath(fileName)); // *

const resetMultiPayloadHandler = async req => {
  const { fileName } = req.body;
  console.log('reset');

  if (checkFile(fileName)) {
    fs.unlink(setPath(fileName), () => {});
    return [];
  } else return { values: 'no folder' };
};

export default resetMultiPayloadHandler;
