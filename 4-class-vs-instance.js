
function Person(initialAge) {
  let age;
  if (initialAge >= 0) {
    age = initialAge;
  } else {
    console.log('Age is not valid, setting age to 0.');
    age = 0;
  }
  this.amIOld = function () {
    if (age < 13) {
      console.log("You are young.");
    } else if (age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    age++;
  };
  this.getAge = function () { return age; }
}

let newPerson = new Person(10);
for (let i = 0; i < 3; i++) {
  newPerson.yearPasses();
  console.log(newPerson.getAge());
  (newPerson.amIOld());
}
