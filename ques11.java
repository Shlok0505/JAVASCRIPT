/*
Question 11: WAP to create a HashSet "hs"
i. add
ii. get the number of elements in a hash set
iii. to iterate through all elements in a hash set
iv. to add the specified element in hash set
v. to Remove the specified element from the HashSet
*/

import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        // Create a HashSet and add elements
        HashSet<String> hs = new HashSet<>();
        hs.add("Apple");
        hs.add("Banana");
        hs.add("Cherry");

        // Get the number of elements
        System.out.println("Size of HashSet: " + hs.size());

        // Iterate through elements
        System.out.println("HashSet elements:");
        for (String item : hs) {
            System.out.println(item);
        }

        // Add a new element
        hs.add("Mango");

        // Remove an element
        hs.remove("Banana");

        System.out.println("HashSet after modification: " + hs);
    }
} 