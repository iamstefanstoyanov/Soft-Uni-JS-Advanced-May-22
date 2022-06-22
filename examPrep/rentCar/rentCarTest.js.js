let rentCar = require("./rentCar");
let { expect } = require("chai");
describe("rentCar", () => {
  describe("searchCar", () => {
    it("test 1", () => {
        expect(()=>rentCar.searchCar({},'P')).to.throw('Invalid input')
        expect(()=>rentCar.searchCar({},1)).to.throw('Invalid input')
        expect(()=>rentCar.searchCar({},{})).to.throw('Invalid input')
        expect(()=>rentCar.searchCar({},[])).to.throw('Invalid input')

        expect(()=>rentCar.searchCar([],1)).to.throw('Invalid input')
        expect(()=>rentCar.searchCar([],[])).to.throw('Invalid input')
        expect(()=>rentCar.searchCar([],{})).to.throw('Invalid input')
        
        expect(()=>rentCar.searchCar('P',{})).to.throw('Invalid input')
        expect(()=>rentCar.searchCar('p','p')).to.throw('Invalid input')
        expect(()=>rentCar.searchCar('p',[])).to.throw('Invalid input')
        expect(()=>rentCar.searchCar('p',1)).to.throw('Invalid input')

        expect(()=>rentCar.searchCar(1,2)).to.throw('Invalid input')
        expect(()=>rentCar.searchCar(1,{})).to.throw('Invalid input')
        expect(()=>rentCar.searchCar(1,[])).to.throw('Invalid input')
        expect(()=>rentCar.searchCar(1,'d')).to.throw('Invalid input')

        expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"Volvo")).to.throw('There are no such models in the catalog!')
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"BMW")).to.equal('There is 1 car of model BMW in the catalog!')
    });
  });
  describe("calculatePriceOfCar", () => {
    it("test 2", () => {
        expect(rentCar.calculatePriceOfCar('BMW',1)).to.equal('You choose BMW and it will cost $45!');
        expect(()=>rentCar.calculatePriceOfCar('Volvo',2)).to.throw('No such model in the catalog!');
        expect(rentCar.calculatePriceOfCar("Volkswagen", 2)).to.equal("You choose Volkswagen and it will cost $40!");

        expect(()=>rentCar.calculatePriceOfCar({},'P')).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar({},1)).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar({},[])).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar({},{})).to.throw('Invalid input')

        expect(()=>rentCar.calculatePriceOfCar([],'d')).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar([],1)).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar([],[])).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar([],{})).to.throw('Invalid input')

        expect(()=>rentCar.calculatePriceOfCar('p','p')).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar('p',[])).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar('p',{})).to.throw('Invalid input')

        expect(()=>rentCar.calculatePriceOfCar(1,2)).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar(1,{})).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar(1,[])).to.throw('Invalid input')
        expect(()=>rentCar.calculatePriceOfCar(1,'d')).to.throw('Invalid input')


    });
  });
  describe("checkBudget", () => {
    it("test 3", () => {
        expect(rentCar.checkBudget(45, 2, 90)).to.equal('You rent a car!');
        expect(rentCar.checkBudget(45, 2, 100)).to.equal('You rent a car!');
        expect(rentCar.checkBudget(45, 2, 80)).to.equal('You need a bigger budget!');

        expect(()=>rentCar.checkBudget('','','')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('',2,5)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(45,2,'')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('p','p','p')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(1,'3','3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('3',1,'3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('3','3',1)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(1,1,'3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('3',1,1)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(1,'3',1)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget([],'3','3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget([],1,1)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget([],1,'3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(1,{},'3')).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget(1,{},1)).to.throw('Invalid input')
        expect(()=>rentCar.checkBudget('3',{},'3')).to.throw('Invalid input')

    });
  });
});
