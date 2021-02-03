
let root = {
  data: "A",
  left:
  {
    data: "B",
    left: { data: "D", left: { data: "E" }, right: null },
    right: null
  },
  right:
  {
    data: "C",
    // left: { data: 4, left: null, right: null },
    left: { data: "F", left: { data: "G", left: { data: "H" } }, right: null },
    right: { data: "I", left: null, right: { data: "J" } }
  }
}

const getFirstChild = (node) => node.left ? node.left : node.right;
const hasChild = (node) => (node.right || node.left) ? true : false;

const getHeight = function (root) {
  let height = 0;
  let current = root;
  if (hasChild(current)) {
    // getting left height
    let tempCurrent = { ...current };
    let maxLeftHeight = 0;
    if (tempCurrent.left) {
      maxLeftHeight++;
      tempCurrent = tempCurrent.left;
      maxLeftHeight += getHeight(tempCurrent);
    }
    let maxRightHeight = 0;
    tempCurrent = current;
    // getting right height
    if (tempCurrent.right) {
      maxRightHeight++;
      tempCurrent = tempCurrent.right;
      maxRightHeight += getHeight(tempCurrent);
    }
    // ///////
    if (maxLeftHeight > maxRightHeight) height = maxLeftHeight
    else height = maxRightHeight;
  }
  return height;
};
console.log("Height: ", getHeight(root));