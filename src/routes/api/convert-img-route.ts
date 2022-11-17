import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import logger from '../../util/logger';
import {
  accessImgsDir,
  dirName,
  mainImgsDir,
  processedImgsDir,
} from '../../consts';
const app = express();
const port = 3000;

const routes = express.Router();

routes.get('/', logger, async function (req, res) {
  const imgWidth = req.query.width as string;
  const imgHeight = req.query.height as string;
  const imgName = req.query.imgName as string;
  const savedFileName =
    processedImgsDir + imgName + '_' + imgWidth + '_' + imgHeight + '.jpg';
  const accessFile =
    accessImgsDir + imgName + '_' + imgWidth + '_' + imgHeight + '.jpg';
  let assetsDirectoryName: string;
  if (dirName.indexOf('src') != -1) {
    assetsDirectoryName = dirName.replace('src', '') + accessFile;
  } else {
    assetsDirectoryName = dirName.replace('dist', '') + accessFile;
  }
  if (fs.existsSync(savedFileName)) {
    res.type('jpg').sendFile(assetsDirectoryName);
    return;
  }
  processImg(imgName, +imgWidth, +imgHeight);
  const img = mainImgsDir + imgName + '.jpg';
  await sharp(img)
    .resize({ width: +imgWidth, height: +imgHeight })
    .toBuffer()
    .then((data) => {
      res.type('jpg').send(data);
    })
    .catch((e) => {
      console.log('e :>> ', e);
      return e;
    });
});

function processImg(
  fileName: string,
  imgWidth: number,
  imgHeight: number
): void {
  const img = mainImgsDir + fileName + '.jpg';
  const savedFileName =
    processedImgsDir + fileName + '_' + imgWidth + '_' + imgHeight + '.jpg';
  sharp(img)
    .resize({ width: imgWidth, height: imgHeight })
    .toFile(savedFileName);
}

export default { routes, processImg };
