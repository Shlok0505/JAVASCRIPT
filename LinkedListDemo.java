import java.util.LinkedList;

public class LinkedListDemo 
{
    public static void main(String[] args) 
    {
        LinkedList<String> list = new LinkedList<>();

        list.add("H");
        list.add("E");
        list.add("L");
        list.add("L");
        list.add("O");
        list.removeLast();
        System.out.println("Last Element: " + list.peekLast());
        System.out.println("LinkedList elements: " + list);
        list.clear();
        System.out.println("LinkedList after clearing: " + list);
    }
} 
