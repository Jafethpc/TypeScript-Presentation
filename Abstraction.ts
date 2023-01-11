// Define abstract class to "Shape"
abstract class Shape {
  // Declare 2 abstract methods 'area' and 'perimeter'
  abstract area(): number;
  abstract perimeter(): number;
}

// Define a concrete class 'Circle that extends from 'Shape'
class Circle extends Shape {
  // We call a constructor with a private radius
  constructor(private radius: number) {
    // We call super to call the constructor of base class 'Shape'
    super();
  }

  // Implement the 'area' and 'perimeter' methods from when we decalared
  area(): number {
    return 3.14 * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}
// Create a new Class 'Circle' with the radius being 5
const circle = new Circle(5);

console.log(circle.area()); // 78.5
console.log(circle.perimeter()); // 31.4
