public class StringCreation {
    public static void main(String[] args) {
        // Method 1: String literal
        String str1 = "Hello";
        
        // Method 2: Using new keyword
        String str2 = new String("Hello");
        
        // Method 3: Character array
        char[] charArray = {'H', 'e', 'l', 'l', 'o'};
        String str3 = new String(charArray);
        
        // Method 4: Byte array
        byte[] byteArray = {72, 101, 108, 108, 111};
        String str4 = new String(byteArray);
        
        // Method 5: StringBuilder
        StringBuilder sb = new StringBuilder("Hello");
        String str5 = sb.toString();
        
        System.out.println("str1: " + str1);
        System.out.println("str2: " + str2);
        System.out.println("str3: " + str3);
        System.out.println("str4: " + str4);
        System.out.println("str5: " + str5);
    }
} 