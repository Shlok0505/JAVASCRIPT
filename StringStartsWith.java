public class StringStartsWith {
    public static void main(String[] args) {
        String str = "Hello World";
        String prefix1 = "Hello";
        String prefix2 = "Hi";
        
        System.out.println("String starts with 'Hello': " + str.startsWith(prefix1));
        System.out.println("String starts with 'Hi': " + str.startsWith(prefix2));
        
        // Check starting from specific index
        System.out.println("String starts with 'World' at index 6: " + 
            str.startsWith("World", 6));
    }
} 