
const circle = require('./circle');
const rectangle = require('./rectangle');
const triangle = require('./triangle');
const radius = 5;
const circleArea = circle.calcArea(radius);
const circleCircumference = circle.calcCircumference(radius);
const circleDiameter = circle.calcDiameter(radius);

console.log("Circle Area:", circleArea);
console.log("Circle Circumference:", circleCircumference);
console.log("Circle Diameter:", circleDiameter);

const length = 10;
const breadth = 6;
const rectangleArea = rectangle.calcArea(length, breadth);
const rectanglePerimeter = rectangle.calcPerimeter(length, breadth);

console.log("\nRectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);

const side1 = 8;
const side2 = 8;
const side3 = 8;
const isTriangleEquilateral = triangle.isEquilateral(side1, side2, side3);
const trianglePerimeter = triangle.calcPerimeter(side1, side2, side3);

console.log("\nIs Triangle Equilateral:", isTriangleEquilateral);
console.log("Triangle Perimeter:", trianglePerimeter);
