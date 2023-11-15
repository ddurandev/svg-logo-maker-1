import fs from 'fs/promises';

import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js'

async function generateLogo() {
    try {
      const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: input => input.length <= 3,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color:',
        },
      ]);
  
      let shape;
  
      switch (userInput.shape) {
        case 'circle':
          shape = new Circle();
          break;
        case 'triangle':
          shape = new Triangle();
          break;
        case 'square':
          shape = new Square();
          break;
        default:
          console.log('Invalid shape');
          return;
      }
  
      shape.setText(userInput.text);
      shape.setTextColor(userInput.textColor);
      shape.setShapeColor(userInput.shapeColor);
  
      const svgContent = shape.generateSVG();
      await fs.writeFile('logo.svg', svgContent);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error generating logo:', error);
    }
  }
  
  generateLogo();