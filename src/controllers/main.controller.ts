// @ts-nocheck
import { Request, Response, NextFunction as Next } from 'express';
import getPayloadHandler from './handlers/getPayloadHandler';
import createMultiPayloadHandler from './handlers/createMultiPayloadHandler';
import resetMultiPayloadHandler from './handlers/resetMultiPayload';
import createSinglePayloadHandler from './handlers/createSinglePayloadHandler';
import { HttpCode } from '../constants';
import sortData from '../helpers/sortData';
import {
  creareReq,
  createRes,
  createResLength, // *
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

const createMultiPayload = async (req: Request, res: Response, next: Next) => {
  const name = 'POST multi payload';
  try {
    creareReq(name);
    const response = await createMultiPayloadHandler(req);
    createResLength(name, response);
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: response ? sortData(response, 'payload') : null,
    });
  } catch (e) {
    createResErr(name, e);
    next(e);
  }
};

const resetMultiPayload = async (req: Request, res: Response, next: Next) => {
  const name = 'DELETE payload';
  try {
    creareReq(name);
    const response = await resetMultiPayloadHandler(req);
    createRes(name, response);
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: response ? response : null,
    });
  } catch (e) {
    createResErr(name, e);
    next(e);
  }
};

const createSinglePayload = async (req: Request, res: Response, next: Next) => {
  const name = 'POST single payload';
  try {
    creareReq(name);
    const response = await createSinglePayloadHandler(req);
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
  createMultiPayload,
  resetMultiPayload,
  createSinglePayload,
};
