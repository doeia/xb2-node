import { Request, Response, NextFunction } from 'express';

export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.url);
  next();
};

/**
 * 异常处理器
 */

export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error.message) {
    console.log('异常', error.message);
  }
  let statusCode: number, message: string;

  switch (error.message) {
    default:
      statusCode = 500;
      message = '服务出了点问题';
      break;
  }

  response.status(statusCode).send({ message });
};
