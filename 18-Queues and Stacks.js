function Solution() {
  this.stack = [];
  this.queue = [];

  this.pushCharacter = (char) => { this.stack.push(char) }
  this.popCharacter = () => this.stack.pop();

  this.enqueueCharacter = (char) => { this.pushCharacter(char) }
  this.dequeueCharacter = () => this.stack.shift();
}

let sol = new Solution();

sol.enqueueCharacter('a');
sol.enqueueCharacter('b');
sol.enqueueCharacter('c');
console.log(sol.dequeueCharacter());
console.log(sol.dequeueCharacter());
console.log(sol.dequeueCharacter());
