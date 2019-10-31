
function myfunction(param: number): number {
    return param;
}

let myOtherFunction: (param: number) => number = function(param: number): number {
    return param;
}


function modifiedFunction(this: void, param: any): string {
    let returnType: string = param as string;
    return returnType;
}                
    

class myClass {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

  get getMessage() {
      return this.message;
  }

  set setMessage(message: string) {
      this.message = message;
  }
}


class myDate {
    static defaultYear: number = 12;
}

let date = myDate.defaultYear;


class myFastacticClass {
    protected myData: number;

    constructor(myData: number) {
        this.myData = myData;
    }
}


class myExtendedFantasticClass extends myFastacticClass {
    private weCanDoIt: string;

    constructor(myNum: number) {
        super(myNum);
        this.weCanDoIt = "I hope you can see this extended class";
    }

    move() {
        return this.myData;
    }
}


interface myInterface {
    paramOne: number;
    paramTwo: string;

    [index: number]: number | string;
}


let myInterfaceOne = {} as myInterface;
myInterfaceOne.paramOne = 243;
myInterfaceOne.paramTwo = "This is the message";


interface myInterfaceTwo {
    (message: string): string;
}

let myInterfaceTwo: myInterfaceTwo;

myInterfaceTwo = (message: string) => {
        return message;
}

interface myInterfaceDecorator {
   new(param: any);
}

function nextFuntion(param: myInterfaceDecorator): void {
    let x = new param("Welcome");
}


// Advanced Types 
type C = number & string;
type D = number | string;


function myNewFunction(param: number | string): any {

}

function printTwo(pet: number | string): pet is number {
    return true;
}

interface Fish {
    layEggs: () => void;
    swim: () => void;

}

interface Bird {
    layEggs: () => void;
    fly: () => void;
}

function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

type myType = Bird | Fish;
type thisType = "ease-in" | "ease-out";


