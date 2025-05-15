// write a javascript program to create a class called rectangle with properties with properties for writh and height  
//include two methord to calculate rectangle area and perimeter 


// Define the Rectangle class
class Rectangle {
  // Constructor to initialize width and height
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create a new instance of the Rectangle class
let rect = new Rectangle(4, 5);

// Log the area and perimeter to the console
console.log("Rectangle Properties:");
console.log("Width:", rect.width);
console.log("Height:", rect.height);
console.log("Area:", rect.calculateArea());
console.log("Perimeter:", rect.calculatePerimeter());