
// Interface construct: An aggregate of data values.

interface StudentData {
    id: number;
    firstName: string;
    lastName: string;
    course: string
}

// We can use the StudentData interface like this.
let studentData: StudentData = {id: 3434, firstName: "Benedict", lastName: "Hoorkwap", course: "Environmental Engineering"};

// We can declare other properties of an interface to be optional. Consider:
interface StaffData {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    anyOtherInfo?: string;   // anyOtherInfo property is optional
}

let staffData: StaffData = {id: 3433, firstName: "Benedict", lastName: "Hoorkwap", department: "Environmental Engineering"};

// We can make property 'readonly'; We cannot change value after instantiation
interface Bet {
    readonly betId: number;     // This property is readonly
}


// Function Types: This are interfaces that accepts functions as values.
interface myFunctionType {
    (param: number, nextParam?: number): number
}

let myFunctionType: myFunctionType = function (param: number, nextParam?: number): number {
                                                        if (nextParam) {
                                                             return param * nextParam
                                                         }

                                                         else {
                                                            return param;
                                                        }
                                                    }

// Indexable Types: use to describe types that we can index
interface myIndexableType {
    paramOne: number;
    paramTwo: string;
    [index: number]: number | string;   // Index type can return either a number or string;
}                                               

let indexableType: myIndexableType = {paramOne: 232, paramTwo: 'Parameter Two'};
let paramTwo = indexableType[1];   // returns the value of paramTwo.


// Class Types: 
interface Animal {
    sound: () => string;
}

// Cat class implementing the Animal interface
class Cat implements Animal {
    sound() { return 'Meow'}       // implements the move of the interface here
}

interface PersianCat extends Cat {
    // PersianCat extends the Cat Type
}