"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSavedImg = void 0;
var consts_1 = require("../consts");
var fs_1 = __importDefault(require("fs"));
function sendSavedImg(imgName, imgWidth, imgHeight) {
    var savedFileName = consts_1.processedImgsDir + imgName + '_' + imgWidth + '_' + imgHeight + '.jpg';
    var accessFile = consts_1.accessImgsDir + imgName + '_' + imgWidth + '_' + imgHeight + '.jpg';
    var assetsDirectoryName;
    if (consts_1.dirName.indexOf('src') != -1) {
        assetsDirectoryName = consts_1.dirName.replace('src', '') + accessFile;
    }
    else {
        assetsDirectoryName = consts_1.dirName.replace('dist', '') + accessFile;
    }
    if (fs_1.default.existsSync(savedFileName)) {
        return { 'name': assetsDirectoryName, 'found': true };
    }
    else {
        return { 'name': '', 'found': false };
    }
}
exports.sendSavedImg = sendSavedImg;
