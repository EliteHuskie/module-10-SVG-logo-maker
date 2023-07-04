// Class sections for Circle, Square and Triangle
class Circle {
    constructor() {
      // Constructor logic for Circle
      this.color = '';
    }
  
    setColor(color) {
      // Sets color of Circle
      this.color = color;
    }
  
    render() {
      // Render Circle as an SVG string
      const svg = `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
      return svg;
    }
  }
  
  class Square {
    constructor() {
      // Constructor logic for Square
      this.color = '';
    }
  
    setColor(color) {
      // Sets color of Square
      this.color = color;
    }
  
    render() {
      // Render Square as an SVG string
      const svg = `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
      return svg;
    }
  }
  
  class Triangle {
    constructor() {
      // Constructor logic for Triangle
      this.color = '';
    }
  
    setColor(color) {
      // Sets color of Triangle
      this.color = color;
    }
  
    render() {
      // Render Triangle as an SVG string
      const svg = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
      return svg;
    }
  }
  // Module exports for Circle, Square and Triangle
  module.exports = {
    Circle,
    Square,
    Triangle,
  };  