class Shape {
    constructor() {
      this.text = '';
      this.textColor = '';
      this.shapeColor = '';
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(color) {
      this.textColor = color;
    }
  
    setShapeColor(color) {
      this.shapeColor = color;
    }
  }
  
  class Circle extends Shape {
    generateSVG() {
      return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
        <text x="150" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Triangle extends Shape {
    generateSVG() {
      return `<svg width="300" height="200">
        <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
        <text x="150" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    generateSVG() {
      return `<svg width="300" height="200">
        <rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  export { Circle, Triangle, Square };