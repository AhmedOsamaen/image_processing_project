import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import { processedImgsDir } from '../consts';
import { saveImgToAssets } from '../services/sharp-service';

const request = supertest(app);
saveImgToAssets('fjord', 452, 412);
describe('Test endpoint responses', () => {
  it('gets the main endpoint', (done) => {
    request.get('/').expect(200);
    done();
  });
  it('gets the convert endpoint', (done) => {
    request
      .get('/convert?imgName=santamonica&width=1000&height=800')
      .expect(200);
    done();
  });
});

describe('Test image functions', () => {
  it('finds saved img', async () => {
    const savedFileName =
      processedImgsDir + 'fjord_' + 452 + '_' + 412 + '.jpg';
    expect(fs.existsSync(savedFileName)).toBeTrue();
  });
});
