import express from 'express' 


const logger =
( req: express.Request, res :express.Response, next :Function): void =>
    {
        let url = req.url;
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