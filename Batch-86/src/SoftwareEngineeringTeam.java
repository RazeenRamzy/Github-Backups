// Super class
class SoftwareEngineer {
    String name;
    int experience;

    // Constructor
    public SoftwareEngineer(String name, int experience) {
        this.name = name;
        this.experience = experience;
    }

    // Method to work (generic for all software engineers)
    public void work() {
        System.out.println(name + " is working as a Software Engineer.");
    }
}


// Child class
class SoftwareEngineerIntern extends SoftwareEngineer {

    public SoftwareEngineerIntern(String name, int experience) {
        super(name, experience);
    }


    @Override
    public void work() {
        System.out.println(name + " is interning as a Software Engineer.");
    }
}

// Child class
class SoftwareEngineerAssociate extends SoftwareEngineer {

    public SoftwareEngineerAssociate(String name, int experience) {
        super(name, experience);
    }

    // Override work method
    @Override
    public void work() {
        System.out.println(name + " is working as a Software Engineer Associate.");
    }
}

// Child class
class SeniorSoftwareEngineer extends SoftwareEngineer {
    // Constructor
    public SeniorSoftwareEngineer(String name, int experience) {
        super(name, experience);
    }

    // Override work method
    @Override
    public void work() {
        System.out.println(name + " is working as a Senior Software Engineer.");
    }
}

// Child class
class SoftwareEngineerTeamLead extends SeniorSoftwareEngineer {
    // Constructor
    public SoftwareEngineerTeamLead(String name, int experience) {
        super(name, experience);
    }

    // Override work method
    @Override
    public void work() {
        System.out.println(name + " is leading the software engineering team.");
    }
}

// Main class
public class SoftwareEngineeringTeam {
    public static void main(String[] args) {
        // Creating instances of each class
        SoftwareEngineerIntern intern = new SoftwareEngineerIntern("Intern1", 0);
        SoftwareEngineerAssociate associate = new SoftwareEngineerAssociate("Associate1", 2);
        SeniorSoftwareEngineer seniorEngineer = new SeniorSoftwareEngineer("Senior1", 5);
        SoftwareEngineerTeamLead teamLead = new SoftwareEngineerTeamLead("Lead1", 8);

        // Invoking their respective methods
        intern.work();
        associate.work();
        seniorEngineer.work();
        teamLead.work();
    }
}
