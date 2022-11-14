// @ts-nocheck
import { Request, Response, NextFunction as Next } from 'express';
import getPayloadHandler from './handlers/getPayloadHandler';
import createPayloadHandler from './handlers/createPayloadHandler';
import { HttpCode } from '../constants';
import {
  creareReq,
  createRes,
  // createResLength,
  createResErr,
} from '../helpers/controllerLogs';

const getPayload = async (req: Request, res: Response, next: Next) => {
  const name = 'GET payload';
  try {
    creareReq(name);
    const response = await getPayloadHandler();
    createRes(name, response);
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: response ? response : null,
    });
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

const createPayload = async (req: Request, res: Response, next: Next) => {
  const name = 'POST payload';
  try {
    creareReq(name);
    const response = await createPayloadHandler(req);
    createRes(name, response);
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: response ? response : null,
    });
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

export default {
  getPayload,
  createPayload,
};
