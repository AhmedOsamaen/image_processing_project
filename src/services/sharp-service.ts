import { mainImgsDir, processedImgsDir } from "../consts";
import sharp from 'sharp';
import express from 'express';

export async function processImg(
    fileName: string,
    imgWidth: number,
    imgHeight: number,
    res ?:express.Response
  ): Promise<void> {
    
    const img = mainImgsDir + fileName + '.jpg';
     const s=  await sharp(img)
      .resize({ width: +imgWidth, height: +imgHeight })
      .toBuffer()
      .then((data) => {
        if(res){
        console.log('inside funccccccccccccc :>> ');
        res.type('jpg').send(data);
        }
        return;
      })
      .catch((e) => {
        console.log('e :>> ', e);
        return e;
      });
  }

  export function saveImgToAssets(
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
