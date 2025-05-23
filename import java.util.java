import java.util.*;

public class StringEx {
    public static void main(String[] args) {
        String s1 = "Hello";
        System.out.println(s1);

        String s2 = new String("World");
        System.out.println(s2);

        char[] ch = { 'j', 'a', 'v', 'a', ' ', 'w', 'o', 'r', 'l', 'd' };
        String sch1 = new String(ch);
        System.out.println(sch1);

        String sch2 = new String(ch, 2, 5);
        System.out.println(sch2);

        String s3 = s1 + s2;
        System.out.println(s3);
        String s4 = s3 + 4 + 4;
        System.out.println(s4);
        String s41 = s4.concat("55");
        System.out.println(s41);

    }
}