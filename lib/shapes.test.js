// Constant for Circle, Square and Triangle which requires the class scripts from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

// Test for Circle with render method and return correct SVG string
test('Circle render() method returns correct SVG string', () => {
  const shape = new Circle();
  shape.setColor('green');
  const expectedSvg = '<circle cx="150" cy="100" r="50" fill="green" />';
  expect(shape.render()).toEqual(expectedSvg);
});

// Test for Square with render method and return correct SVG string
test('Square render() method returns correct SVG string', () => {
  const shape = new Square();
  shape.setColor('red');
  const expectedSvg = '<rect x="50" y="50" width="100" height="100" fill="red" />';
  expect(shape.render()).toEqual(expectedSvg);
});

// Test for Triangle with render method and return correct SVG string
test('Triangle render() method returns correct SVG string', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  const expectedSvg = '<polygon points="150,18 244,182 56,182" fill="blue" />';
  expect(shape.render()).toEqual(expectedSvg);
});