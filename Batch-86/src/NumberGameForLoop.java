import java.util.Scanner;

public class NumberGameForLoop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int mysteryNumber = 7; // The magic number to guess
        int maxAttempts = 5; // Maximum number of attempts

        System.out.println("Guess the Magic Number (between 1 and 10). You have " + maxAttempts + " attempts.");

        for (int i = 1; i <= maxAttempts; i++) {
            System.out.print("Attempt " + i + ": ");
            int guess = scanner.nextInt();


        }

    }
}
