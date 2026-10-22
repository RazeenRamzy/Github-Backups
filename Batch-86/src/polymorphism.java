public class polymorphism {

    //Method Overloading
    /*
    Over loading occurs when two or more methods in a class
    have the same method name but different parameters.
     */

    //Method 1
    int add(int a, int b){
        return  a+b;
    }

    //Method 2
    int add(int a, int b, int c){
        return  a+b+c;
    }

    public static void main(String[] args) {

        polymorphism obj1 = new polymorphism();

        System.out.println(obj1.add(10,15));
        System.out.println(obj1.add(20,8,5));

    }
}
