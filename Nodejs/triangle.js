function isEquilateral(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return "Invalid side lengths. Side lengths must be positive.";
    }
    return side1 === side2 && side2 === side3;
  }
  
  function calcPerimeter(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return "Invalid side lengths. Side lengths must be positive.";
    }
    return side1 + side2 + side3;
  }
  
  module.exports = {
    isEquilateral,
    calcPerimeter,
  };
  