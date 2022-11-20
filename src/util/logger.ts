import express, { RequestHandler } from 'express';

const logger :RequestHandler  = (
  req: express.Request,
  res: express.Response,
  next
): void => {
  const url = req.url;
  console.log('url :>> ', url);
  const imgWidth = req.query.width as string;
  const imgHeight = req.query.height as string;
  const imgName = req.query.imgName as string;
  console.log('imgName :>> ', imgName);
  console.log('imgWidth :>> ', imgWidth);
  console.log('imgHeight :>> ', imgHeight);

  next();
};

export default logger;
