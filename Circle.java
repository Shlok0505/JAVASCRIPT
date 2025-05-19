public class Circle {
    private double radius;
    public Circle() 
    {
        this.radius = 1.0;
    }
    public Circle(double radius) 
    {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        this.radius = radius;
    }
    public double getRadius()
     {
        return radius;
    }
    public double calculateArea()
    {
        return Math.PI * radius * radius;
    }
    public double calculateCircumference() 
    {
        return 2 * Math.PI * radius;
    }
}