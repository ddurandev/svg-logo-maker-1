const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('generateSVG method', () => {
    const circle = new Circle();
    circle.setText('ABC');
    circle.setTextColor('red');
    circle.setShapeColor('blue');
    const svgContent = circle.generateSVG();

    expect(svgContent).toContain('<circle cx="150" cy="100" r="50" fill="blue" />');
    expect(svgContent).toContain('<text x="150" y="100" text-anchor="middle" fill="red">ABC</text>');
  });
});

describe('Triangle', () => {
  test('generateSVG method', () => {
    const triangle = new Triangle();
    triangle.setText('XYZ');
    triangle.setTextColor('green');
    triangle.setShapeColor('yellow');
    const svgContent = triangle.generateSVG();

    expect(svgContent).toContain('<polygon points="150,50 100,150 200,150" fill="yellow" />');
    expect(svgContent).toContain('<text x="150" y="130" text-anchor="middle" fill="green">XYZ</text>');
  });
});

describe('Square', () => {
  test('generateSVG method', () => {
    const square = new Square();
    square.setText('123');
    square.setTextColor('purple');
    square.setShapeColor('orange');
    const svgContent = square.generateSVG();

    expect(svgContent).toContain('<rect x="100" y="50" width="100" height="100" fill="orange" />');
    expect(svgContent).toContain('<text x="150" y="150" text-anchor="middle" fill="purple">123</text>');
  });
});