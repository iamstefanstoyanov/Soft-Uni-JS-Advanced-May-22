let companyAdministration = require('./companyAdministration');
let {expect} = require('chai');
describe('companyAdministration', () => {
  describe('hiringEmployee ', () => {
    it('test 1', () => {
      expect(() =>
        companyAdministration.hiringEmployee('Alex', 'Engineer',1)
      ).to.throw('We are not looking for workers for this position.');
      expect(
        companyAdministration.hiringEmployee('Alex', 'Programmer', 3)
      ).to.equal('Alex was successfully hired for the position Programmer.');
      expect(
        companyAdministration.hiringEmployee('Alex', 'Programmer', 5)
      ).to.equal('Alex was successfully hired for the position Programmer.');
      expect(
        companyAdministration.hiringEmployee('Alex', 'Programmer', 2)
      ).to.equal('Alex is not approved for this position.');
    });
  });
  describe('calculateSalary', () => {
    it('test 2', () => {
      expect(companyAdministration.calculateSalary(2)).to.equal(30);
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);

      expect(() => companyAdministration.calculateSalary(-1)).to.throw(
        'Invalid hours'
      );
      expect(() => companyAdministration.calculateSalary('h')).to.throw(
        'Invalid hours'
      );
      expect(() => companyAdministration.calculateSalary([])).to.throw(
        'Invalid hours'
      );
      expect(() => companyAdministration.calculateSalary(null)).to.throw(
        'Invalid hours'
      );
    });
  });
  describe('firedEmployee', () => {
    it('test 3', () => {
      expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(
        'Invalid input'
      );
      expect(() => companyAdministration.firedEmployee([], 1)).to.throw(
        'Invalid input'
      );
      expect(() => companyAdministration.firedEmployee({}, {})).to.throw(
        'Invalid input'
      );
      expect(() =>
        companyAdministration.firedEmployee(['P', 'I'], null)
      ).to.throw('Invalid input');
      expect(() =>
        companyAdministration.firedEmployee(['P', 'I'], -1)
      ).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['P', 'I'], 3)).to.throw(
        'Invalid input'
      );
      expect(companyAdministration.firedEmployee(['I', 'P', 'G'], 1)).to.equal('I, G');
    });
  });
});
