import { processImg, saveImgToAssets } from "../services/sharp-service";

describe('Test Img processing', () => {
   
    it('resizes img ', (done) => {
      expect(async () => {
            await processImg('fjord', 200, 302);
        }).not.toThrow();
        done();
    });

    it('resizes img and saves it ', (done) => {
        expect(async () => {
              await saveImgToAssets('fjord', 220, 302);
          }).not.toThrow();
          done();
      });
  });