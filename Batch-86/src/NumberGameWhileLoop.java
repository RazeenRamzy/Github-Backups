import java.util.Scanner;

public class NumberGameWhileLoop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int mysteryNumber = 7;
        int guess = 0;

        System.out.println("Guess the Magic Number (between 1 and 10). Keep guessing until you get it right!");

        while (guess != mysteryNumber) {
            System.out.print("Your guess: ");
            guess = scanner.nextInt();

            if (guess == mysteryNumber) {
                System.out.println("Congratulations! You guessed the magic number.");
            } else {
                System.out.println("Wrong guess. Try again.");
            }
        }

    }
}
