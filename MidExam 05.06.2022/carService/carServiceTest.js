let carService = require("./carService");
const { expect } = require("chai");
describe("Tests …", function() {
describe("isItExpensive", () => {
  it("test 1", () => {
    expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money");
    expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money");
    expect(carService.isItExpensive('asd')).to.equal("The overall price will be a bit cheaper");
  });
});
describe("discount", () => {
  it("test 2", () => {
    expect(carService.discount(7,10)).to.equal("Discount applied! You saved 1.5$");
    expect(carService.discount(5,10)).to.equal("Discount applied! You saved 1.5$");
    expect(carService.discount(8,10)).to.equal("Discount applied! You saved 3$");
    expect(carService.discount(2,10)).to.equal("You cannot apply a discount");
    expect(()=>carService.discount({},1)).to.throw("Invalid input");
    expect(()=>carService.discount([],'2')).to.throw("Invalid input");
    expect(()=>carService.discount('a',1)).to.throw("Invalid input");
    expect(()=>carService.discount('a',[])).to.throw("Invalid input");
    expect(()=>carService.discount('a')).to.throw("Invalid input");
    expect(()=>carService.discount('a','2')).to.throw("Invalid input");

  });
});
describe("partsToBuy", () => {
  it("test 3", () => {
    expect(()=>carService.partsToBuy({},[])).to.throw("Invalid input");
    expect(()=>carService.partsToBuy([],{})).to.throw("Invalid input");
    expect(()=>carService.partsToBuy('1','1')).to.throw("Invalid input");
    expect(()=>carService.partsToBuy(1,'2')).to.throw("Invalid input");
    expect(()=>carService.partsToBuy('1',1)).to.throw("Invalid input");
    expect(()=>carService.partsToBuy('a')).to.throw("Invalid input");
    expect(()=>carService.partsToBuy(1)).to.throw("Invalid input");
    expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0);

    expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145);
    expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "coil springs"])).to.equal(375); 
  });
});
});
//expect(() => .()).to.throw();
 //   expect(.([{},{}],)).to.deep.equal();
 //   expect(() => .()).to.throw();
