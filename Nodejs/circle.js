function calcArea(radius) {
    if (radius <= 0) {
      return "Invalid radius. Radius must be positive.";
    }
    return Math.PI * radius * radius;
  }
  
  function calcCircumference(radius) {
    if (radius <= 0) {
      return "Invalid radius. Radius must be positive.";
    }
    return 2 * Math.PI * radius;
  }
  
  function calcDiameter(radius) {
    if (radius <= 0) {
      return "Invalid radius. Radius must be positive.";
    }
    return 2 * radius;
  }
  
  module.exports = {
    calcArea,
    calcCircumference,
    calcDiameter,
  };
  