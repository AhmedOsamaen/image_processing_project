import express from 'express' 
import routes from './routes/api/convert-img-route';
const app = express();
const port = 3000;

 
app.listen(port,()=>{
    console.log('The server started on port::>> ', port);
});

app.use('/convert',routes);

