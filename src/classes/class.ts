
// Class Type: user defined types.

class Employee {

    // Private signatures: properties are visible within the class definition
    private lastName: string;
    private firstName: string;
    private id: number;

    

    constructor(lastName: string, firstName: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }


    printDetails() {
        let print = this.print();
        return print;
    }

    // protected methods are only visible to subclasses and superclasses
    protected print() {
        return `My name is ${this.lastName} ${this.firstName} and ${this.id} is my staff ID!`
    }

   
}


// Class Inheritance: Subclass and Superclass.
class Manager extends Employee {
    private managerID: number

    constructor(lastName: string, firstName: string, id: number, managerID: number) {
        super(lastName, firstName, id);
        this.managerID = managerID;
    }

    printDetails() {
        let print: string = this.print();
        return print.concat(` Manager Id is ${this.managerID}!`)
    }
}

let employee = new Employee("James", "Smith", 3788);
console.log(employee.printDetails());


let manager = new Manager("Benedict", "Hoorkwap", 2132, 333);
console.log(manager.printDetails());