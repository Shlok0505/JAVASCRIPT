public class LetterCase {
    public static void countCases(String str) {
        int upperCount = 0;
        int lowerCount = 0;
        
        for (char c : str.toCharArray()) {
            if (Character.isUpperCase(c)) {
                upperCount++;
            } else if (Character.isLowerCase(c)) {
                lowerCount++;
            }
        }
        
        System.out.println("Uppercase letters: " + upperCount);
        System.out.println("Lowercase letters: " + lowerCount);
    }

    public static void main(String[] args) {
        String str = "Hello World! JAVA Programming";
        countCases(str);
    }
} 