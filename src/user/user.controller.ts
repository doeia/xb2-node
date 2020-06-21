import { Request, Response, NextFunction, response, request } from 'express';
import { UserModel } from './user.model';
import * as userService from './user.service';
import { send } from 'process';

/**
 * 创建用户
 */

export const store = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name, password } = request.body;

  try {
    const data = await userService.createUser({ name, password });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};
