
// Modules allows us export and consume variables, functions, classes and interfaces 
// using the import and export construct.

export const pi: number = 3.145;
export const aboveEighteen: boolean = true;
export const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Student {
    gender: string;
    lastName: string;
    firstName: string;
    age: number;
    id: number;
}

export function print(): void {
    return console.log('Hello, world!')
}

class Staff {
    private lastName: string;
    private firstName: string;
    private id: number;

    constructor(lastName: string, firstName: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    print() {
        return `My name is ${this.lastName} ${this.firstName} and ${this.id} is my staff ID!`
    }
}

export type TypeName = Staff;

export { Student }              // Exporting Student interface here
export {Staff as StaffType }    // Renaming the Staff exports here.



