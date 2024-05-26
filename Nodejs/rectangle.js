function calcArea(length, breadth) {
    if (length <= 0 || breadth <= 0) {
      return "Invalid dimensions. Length and breadth must be positive.";
    }
    return length * breadth;
  }
  
  function calcPerimeter(length, breadth) {
    if (length <= 0 || breadth <= 0) {
      return "Invalid dimensions. Length and breadth must be positive.";
    }
    return 2 * (length + breadth);
  }
  
  module.exports = {
    calcArea,
    calcPerimeter,
  };
  