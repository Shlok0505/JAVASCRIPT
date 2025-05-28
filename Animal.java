public class Animal 
{
    String name;
    public void eat() {
        System.out.println("eat");
    }
}

class Dog extends Animal 
{
    public void bark() {
        System.out.println(name + " bark");
    }
}

class InheritEXL 
{
    public static void main(String[] args) 
    {
        Dog labroad = new Dog();
        labroad.name = "spidey";
        labroad.eat();
        labroad.bark();
    }
}