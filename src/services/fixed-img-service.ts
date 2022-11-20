import { accessImgsDir, dirName, imgState, processedImgsDir } from "../consts";
import fs from 'fs';

export function sendSavedImg(imgName: string,
    imgWidth: number,
    imgHeight: number):imgState{
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
    return  {'name':assetsDirectoryName,'found':true};
  }else{
    return {'name':'','found':false};
  }
}