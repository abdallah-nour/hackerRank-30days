class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName
      + "\nID: " + this.idNumber
    )
  }
}

class Students extends Person {
  /**	
      *   Class Constructor
      *   @param {String} firstName - A string denoting the Person's first name.
      *   @param { number } lastName - A string denoting the Person's last name.
      *   @param id - An integer denoting the Person's ID number.
      *   @param scores - An array of integers denoting the Person's test scores.
      */
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }
  /**	
    *   Method Name: calculate
    *   @returns A character denoting the grade.
    */
  calculate() {
    let nmbOfDegrees = this.scores.length;
    let sumOfDegrees = 0;
    this.scores.map(value => { sumOfDegrees += value });
    return (sumOfDegrees / nmbOfDegrees);
  }
}

let prsn = new Students('a', 'n', 1, [100, 80]);
console.log(prsn.calculate());
