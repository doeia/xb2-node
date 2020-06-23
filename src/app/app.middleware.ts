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
    case 'NAME_IS_REQUIRED':
      statusCode = 400;
      message = '请提供用户名';
      break;
    case 'PASSWORD_IS_REQUIRED':
      statusCode = 400;
      message = '请提供密码';
      break;
    case 'USER_ALREADY_EXIST':
      statusCode = 409;
      message = '用户名已经被占用';
      break;
    case 'USER_DOES_NOT_EXIST':
      statusCode = 400;
      message = '用户名不存在';
      break;
    case 'PASSWORD_DOES_NOT_MATCH':
      statusCode = 400;
      message = '密码不对';
      break;
    case 'UNAUTHORIZED':
      statusCode = 401;
      message = '请先登录';
      break;
    case 'USER_DOES_NOT_OWN_RESOURCE':
      statusCode = 403;
      message = '没有权限';
      break;
    default:
      statusCode = 500;
      message = '服务出了点问题';
      break;
  }

  response.status(statusCode).send({ message });
};
