// Constants for File System (FS), svg2img and Cirlce, Square or Triangle from Shapes in Lib
const fs = require('fs');
const svg2img = require('svg2img');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Dynamic import of inquirer
Promise.resolve()
  .then(() => import('inquirer'))
  .then((module) => {
    const inquirer = module.default;

    // Prompts the user for input (Three Characters, Text color, Desired shape and Shape color)
    inquirer
      .prompt([
        {
          name: 'text',
          message: 'Enter up to three characters:',
          validate: (input) => input.length <= 3,
        },
        {
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
          name: 'shape',
          type: 'list',
          message: 'Choose a shape:',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal number):',
        },
      ])
      .then(({ text, textColor, shape, shapeColor }) => {
        let shapeInstance;

        // Selected shape class based on user input
        if (shape === 'circle') {
          shapeInstance = new Circle();
        } else if (shape === 'square') {
          shapeInstance = new Square();
        } else if (shape === 'triangle') {
          shapeInstance = new Triangle();
        }

        // Set the color of the shape
        shapeInstance.setColor(shapeColor);

        // Generate the SVG markup
        const svg = `
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text>
          </svg>
        `;

        // Save the SVG markup to a file
        fs.writeFileSync('logo.svg', svg, 'utf-8');