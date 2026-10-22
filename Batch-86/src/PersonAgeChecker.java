public class PersonAgeChecker {
    public static void main(String[] args) {
        Person person = new Person("Azeez", 18); // Change age to test different cases
        boolean isAdult = person.isAdult();
        System.out.println("Is " + person.getName() + " an adult? " + isAdult);
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public boolean isAdult() {
        if age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}
