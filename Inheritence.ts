// Define parent class 'Shape' with 2 abstract methods
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
}

// Define class 'Circle' that extends from 'Shape'
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Create 2 methods that will calculate the area and perimeter
  area(): number {
    return 3.14 * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}

// Define class 'Rectangle' that extends from 'Shape'
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  // Create 2 methods that wll calculate the area and perimeter.
  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// We create a new 'Circle' class and store it in the circle variable
const circle = new Circle(5);
console.log(circle.area()); // 78.5
console.log(circle.perimeter()); // 31.4

// We create a new 'Rectangle' class and store it in the rectangle variable
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // 50
console.log(rectangle.perimeter()); // 30
