import java.util.Scanner;

public class numberFinder {

    public static void main(String[] args) {

        Scanner obj = new Scanner(System.in);

        int mysteryNumber = 7;
        int maxAttempt = 3;


        System.out.println("Guess the Mystery Number to Win the Game");

        for(int i = 1; i <= maxAttempt; i++){
            System.out.println("Attempt "+ i);

            int guess = obj.nextInt();



            if(guess == mysteryNumber){
                System.out.println("congratulations you won the game");
                break;
            }else {
                System.out.println("Wrong number. please try again");
            }


        }
    }

}
