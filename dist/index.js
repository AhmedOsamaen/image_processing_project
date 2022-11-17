"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var convert_img_route_1 = __importDefault(require("./routes/api/convert-img-route"));
var app = (0, express_1.default)();
var port = 3000;
app.listen(port, function () {
    console.log('The server started on port::>> ', port);
});
app.get('/', function (req, res) {
    res.send('Image Processing App is working');
});
app.use('/convert', convert_img_route_1.default.routes);
exports.default = app;
