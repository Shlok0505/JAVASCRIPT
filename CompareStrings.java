public class CompareStrings {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "HELLO";
        
        int result = str1.compareToIgnoreCase(str2);
        
        if (result == 0) {
            System.out.println("Strings are equal (ignoring case)");
        } else if (result < 0) {
            System.out.println("str1 comes before str2");
        } else {
            System.out.println("str1 comes after str2");
        }
    }
} 