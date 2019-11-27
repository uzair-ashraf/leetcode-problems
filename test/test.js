const { expect } = require('chai');
const {
  twoSum
} = require('../main');

  describe('twoSums', () => {
    it('should return [0, 1]', () => {
      const result = twoSum([2, 7, 11, 15], 9);
      expect(result).to.eql([0,1])
    })
    it('should return [1, 2]', () => {
      const result = twoSum([3,2,4], 6);
      expect(result).to.eql([1,2])
    })
  })
