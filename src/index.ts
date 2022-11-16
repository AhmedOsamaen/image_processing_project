import sharp from'sharp'
import express from 'express' 
import fs from 'fs';
import fsPromise from 'fs/promises'
const app = express();
const port = 3000;
const mainImgsDir='./assets/imgs'
const processedImgsDir='./assets/loaded-imgs/'
const accessImgsDir="assets\\loaded-imgs\\"
 
app.listen(port,()=>{
    console.log('The server started on port::>> ', port);
});

app.get('/convert', async function (req, res) {
    const imgWidth = req.query.width as string;
    const imgHeight = req.query.height as string;
    const imgName = req.query.imgName as string;
    const savedFileName = processedImgsDir+imgName+'_'+imgWidth+'_'+imgHeight+'.jpg'
    const accessFile= accessImgsDir+imgName+'_'+imgWidth+'_'+imgHeight+'.jpg'
    let assetsDirectoryName;
    if(__dirname.indexOf('src')!=-1){
         assetsDirectoryName= __dirname.replace('src','')+accessFile;
    }else{
        assetsDirectoryName= __dirname.replace('dist','')+accessFile;
    }
    if(fs.existsSync(savedFileName)){
        console.log('assetsDirectoryName :>> ', assetsDirectoryName);
        res.type('jpg').sendFile(assetsDirectoryName)
        return;
    }
    processImg(imgName,+imgWidth,+imgHeight);
    const img=mainImgsDir+'/fjord.jpg';
    await sharp(img).resize({ width: +imgWidth,height:+imgHeight }).toBuffer()
    .then(data => {
        res.type('jpg').send(data)
    }).catch((e)=>{
        console.log('e :>> ', e); 
        return e;
    });
    
})

function  processImg(fileName:string,imgWidth:number,imgHeight:number): void{
    const img=mainImgsDir+'/fjord.jpg';
    const savedFileName = processedImgsDir+fileName+'_'+imgWidth+'_'+imgHeight+'.jpg'
   sharp(img).resize({ width: imgWidth,height:imgHeight }).toFile(savedFileName);
   
}

// processImg(req.query.imgName as string,+imgWidth,+imgHeight).then((ress)=>{
//     ress.toBuffer().then(data=>{
//         res.send(res.type('jpg').send(data))
//     })
// })