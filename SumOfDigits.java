public class SumOfDigits {
    public static int sumOfDigits(String str) {
        int sum = 0;
        
        for (char c : str.toCharArray()) {
            if (Character.isDigit(c)) {
                sum += Character.getNumericValue(c);
            }
        }
        
        return sum;
    }

    public static void main(String[] args) {
        String str1 = "Hello123World456";
        String str2 = "NoDigitsHere";
        
        System.out.println("Sum of digits in '" + str1 + "': " + sumOfDigits(str1));
        System.out.println("Sum of digits in '" + str2 + "': " + sumOfDigits(str2));
    }
} 