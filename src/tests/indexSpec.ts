import supertest from 'supertest';
import app from '../index';
import routes from '../routes/api/convert-img-route';
import fs from 'fs';
import { processedImgsDir } from '../consts';

const request = supertest(app);
routes.processImg('fjord', 452, 412);
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
  // beforeEach(() => {
  //     routes.processImg('fjord',452,412);
  // });
  it('saves image to assets', async () => {
    const savedFileName =
      processedImgsDir + 'fjord_' + 452 + '_' + 412 + '.jpg';
    expect(fs.existsSync(savedFileName)).toBeTrue();
  });
});
