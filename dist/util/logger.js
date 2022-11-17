"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.url;
    console.log('url :>> ', url);
    var imgWidth = req.query.width;
    var imgHeight = req.query.height;
    var imgName = req.query.imgName;
    console.log('imgName :>> ', imgName);
    console.log('imgWidth :>> ', imgWidth);
    console.log('imgHeight :>> ', imgHeight);
    next();
};
exports.default = logger;
