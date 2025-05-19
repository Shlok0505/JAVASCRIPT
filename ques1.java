/*
Question 1: WAP to find whether the inputted number is even or odd.
*/

import java.util.Scanner;

public class EvenOddCheck {
    public static void main(String[] args) {
        // Take input from user
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        // Check if the number is even or odd
        if (number % 2 == 0) {
            System.out.println(number + " is Even.");
        } else {
            System.out.println(number + " is Odd.");
        }

        // Close scanner
        scanner.close();
    }
}
