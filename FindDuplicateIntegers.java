public class FindDuplicateIntegers {
    public static void findDuplicates(int[] arr) {
        System.out.println("Duplicate elements:");
        
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println(arr[i]);
                    break;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 2, 7, 8, 8, 3};
        findDuplicates(array);
    }
} 