import express from 'express';
import logger from '../../util/logger';
import handler from '../../util/error-handling';
import {
  imgState,
} from '../../consts';
import { processImg, saveImgToAssets } from '../../services/sharp-service';
import { sendSavedImg } from '../../services/fixed-img-service';

const routes = express.Router();

routes.get('/', handler,logger, async function (req: express.Request,
  res: express.Response) {
  const imgWidth = req.query.width as string;
  const imgHeight = req.query.height as string;
  const imgName = req.query.imgName as string;
  const imgState:imgState = sendSavedImg(imgName,+imgWidth,+imgHeight);
  if(imgState.found){
    res.type('jpg').sendFile(imgState.name);
    return;
  }
  saveImgToAssets(imgName, +imgWidth, +imgHeight);
  processImg(imgName, +imgWidth, +imgHeight,res);
 
});


export default { routes };
