function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
  };
  Object.defineProperty(result, "fullName", {
    get() {
      return this.firstName + " " + this.lastName;
    },
    set(value) {
      let [fist, last] = value.split(" ");
      if (fist !== "undefined" && last !== "undefined") {
        this.firstName = fist;
        this.lastName = last;
      }
    },
  });
  return result;
}
let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
