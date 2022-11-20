import express, { RequestHandler } from 'express';
import fs from 'fs'
import { mainImgsDir } from '../consts';
const handler:RequestHandler = (
  req: express.Request,
  res: express.Response,
  next
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
 if(!(+imgWidth>0)){
    res.send("Width should be greater than 0");
    return;
 }

 if(!(+imgHeight>0)){
    res.send("Height should be greater than 0");
    return;
 }
 isImgPresent(imgName+'.jpg').then(result=>{
    if(!result){
        res.send(`No Image With this name (${imgName}) found. Please add the image with your desired name to assets/imgs folder in your project directory`)
        return; 
    }else{
        next();
    }
 })
};

 async function  getAllImgs ():Promise<string[]>{
   let imgs:string[]=[]
   imgs = await fs.promises.readdir(mainImgsDir);
   return imgs;
}

function  isImgPresent (imgName:string):Promise<boolean>{
    const imgs=getAllImgs().then(result=>{
        console.log('result :>> ', result);
        if(result.indexOf(imgName)!=-1){
            return true;
        }else{
        return false;
        }
    });
    return imgs;
   
    
 }


export default handler;