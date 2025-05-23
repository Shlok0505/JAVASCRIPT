public class WordCount {
    public static int countWords(String str) {
        if (str == null || str.trim().isEmpty()) {
            return 0;
        }
        
        // Split the string by whitespace and count words
        String[] words = str.trim().split("\\s+");
        return words.length;
    }

    public static void main(String[] args) {
        String str = "The quick brown fox jumps over the lazy dog";
        System.out.println("Number of words: " + countWords(str));
        
        String emptyStr = "";
        System.out.println("Number of words in empty string: " + countWords(emptyStr));
    }
} 