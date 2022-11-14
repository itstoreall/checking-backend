// @ts-nocheck
// import db from '../db/connect';
import * as cl from '../logs/logMargins';

const createPayload = async body => {
  try {
    cl.mt(' * POST createPayload body:', body);
    // const { dataValues } = await db.Gen.create(body);
    // return dataValues;
  } catch (err) {
    cl.o(' * ERROR in createPayload:', err.message);
    throw new Error({ message: err.message });
  }
};

export default {
  createPayload,
};
