const { expect } = require('chai');
const {
  twoSum,
  defangIPaddr,
  balancedStringSplit
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
  describe('deFang IP Address', () => {
    it('should return "1[.]1[.]1[.]1"', () => {
      const result = defangIPaddr("1.1.1.1");
      expect(result).to.equal("1[.]1[.]1[.]1")
    })
    it('should return "192[.]168[.]1[.]1"', () => {
      const result = defangIPaddr("192.168.1.1");
      expect(result).to.equal("192[.]168[.]1[.]1")
    })
  })
  describe('balancedStringSplit', () => {
    it('should return 4', () => {
      const result = balancedStringSplit("RLRRLLRLRL");
      expect(result).to.equal(4)
    })
    it('should return 3', () => {
      const result = balancedStringSplit("RLLLLRRRLR");
      expect(result).to.equal(3)
    })
    it('should return 1', () => {
      const result = balancedStringSplit("LLLLRRRR");
      expect(result).to.equal(1)
    })
    it('should return 2', () => {
      const result = balancedStringSplit("RLRRRLLRLL");
      expect(result).to.equal(2)
    })

  })
