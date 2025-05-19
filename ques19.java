/*
Question 19: Create an interface Shape with draw() method. Then, override draw() in Circle and Square class. 
WAP to demonstrate this concept.
*/

// Define an interface Shape with draw() method
interface Shape {
    void draw();
}

// Circle class implements Shape
class CircleShape implements Shape {
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

// Square class implements Shape
class SquareShape implements Shape {
    public void draw() {
        System.out.println("Drawing a Square");
    }
}

// Main class to demonstrate the interface concept
public class ShapeDemo {
    public static void main(String[] args) {
        Shape circle = new CircleShape();
        Shape square = new SquareShape();

        circle.draw();
        square.draw();
    }
} 