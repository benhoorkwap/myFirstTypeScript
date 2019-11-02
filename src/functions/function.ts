
// Functions: define a task to be executed.

function Welcome(): string {
    return 'Welcome to TypeScript';
}

let welcome: () => string = Welcome;
welcome();

// Optional parameters.
function doSomething(paramOne: number, paramTwo?: number /* optional parameter */): number {
    if (paramTwo) {
        return paramTwo * paramOne;
    }

    else {
        return paramOne;
    }
}

// Rest Parameters: Rest parameters refer to other parameters.
function print(paramOne: number, ...params: any[]): any {
    if (params.length > 5) {
        console.log('We cannot accept more than seven parameters')
    }
}

// The 'this' parameterized functions are used to constrain 'this' to a type; normally used to describe the invocation context.
interface myElement {
    onClick: (this: void, callBack: () => void) => void 
}
