import sharp from'sharp'
import express from 'express' 

const app = express();
const port = 3000;
 
app.listen(port,()=>{
    console.log('The server started on port::>> ', port);
});

app.get('/convert', function (req, res:any) {
    res.send( `Hello  ${req.query.imgName}, ${req.query.width},   ${req.query.height}`)
    
})