import { Request, Response } from 'express';

const ping = (_req: Request, res: Response): void => {
  const response = `pong ${new Date().toISOString()}`;

  console.info(response);
  res.send(response);
};

export default ping;
