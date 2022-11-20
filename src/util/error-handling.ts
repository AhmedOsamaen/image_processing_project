import express from 'express';
import fs from 'fs'
import { mainImgsDir } from '../consts';
const handler = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const imgWidth = req.query.width as string;
  const imgHeight = req.query.height as string;
  const imgName = req.query.imgName as string;
  if(!imgName){
    res.send("No Image name Assigned. Please add Name of the image in the query parameters in the url. EX. 'imgName=fjord'")
    return; 
}

 if(!imgWidth){
    res.send("No Width Assigned. Please add width in the query parameters in the url. EX. 'width=1000'");
    return;
 }

 if(!imgHeight){
    res.send("No Height Assigned. Please add Height in the query parameters in the url. EX. 'height=1000'");
    return;
 }

 if(!isImgPresent(imgName)) {
    res.send(`No Image With this name (${imgName}) found. Please add the image with your desired name to assets/imgs folder in your project directory`)
    return; 
 }



  next();
};
function isImgPresent (imgName:string):boolean{
    fs.readdir(mainImgsDir, (err, files:string []) => {
       files.forEach(file => {
          console.log(file);
          if(file==imgName){
            return true;
          }
        });
      });
      return false;
      
}


export default handler;