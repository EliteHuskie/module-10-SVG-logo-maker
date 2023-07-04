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