public class LandPhone {

    public String Name;
    public int year;
    public String color;


    public LandPhone(String Name, int year,String color){
        this.Name = Name;
        this.year = year;
        this.color = color;
    }

    void call(){
        System.out.println("By  using " +Name+" we can call..");
    }

    void dial(){
        System.out.println("By using this "+color+ " color " +Name+" we can dial numbers");
    }

}



