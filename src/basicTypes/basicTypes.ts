

// These are the basic types of TypeScript construct.

// Boolean: Takes the value 'true' or 'false'
let aboveEighten: boolean = true;
let canWeSee: boolean = false;
let allLivingThingsAreStupid: boolean = false;


// Number: takes numeric values.
let pi: number = 3.145;
let id: number = 7688;
let count: number = 0;

// String: takes a string value embedded between double quotes ""
let lastName= "Hoorkwap";
let firstName: "Benedict";
let fullName: string = `My fullName is ${lastName} ${firstName}`;

// Any: accepts any value;
let anyValue: any = 4544;
anyValue = 'We can still do this!';
anyValue = false;


// Void: used as return type for functions that return nothing;
function startSomething(): void {}


// Never: use to indicate that a function never returns a value.
function neverReturn(): never {
    throw('Never return a value')
}


// Null and Undefined: accepts 'null' and 'undefined' as values respectively.
let Null: null = null;
let Undefined: undefined = undefined;

// Array Types: used to store collection of indexable values.
let firstSixDigits: number[] = [0, 1, 2, 3, 4, 5]
let setItems: any = [1, "TypeScript", false];