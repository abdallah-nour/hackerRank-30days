function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = (head, data) => {
    if (!head) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = new Node(data);
          break;
        } else {
          current = current.next;
        }
      }
    }
    return this.head;
  };
  this.display = (head) => {
    var start = head;
    let res = "";
    while (start) {
      res += start.data + " ";
      start = start.next;
    }
    console.log(res);
  };
}

let sol = new Solution();
let head = null;
head = sol.insert(head, 'data1');
head = sol.insert(head, 'data2');
head = sol.insert(head, 'data3');
head = sol.insert(head, 'data4');
console.log(sol.display(head));
// console.log(head);