
/*  
    Here is a Single Responsability Principle Violation.
    The algorithm for each department is located in the same class.
    If one department were to request a change to one of their respective algorithms, it has the increased potential to ripple into another department's algorithm.
*/

// @ts-ignore -> It's to typescript ignore duplicate names errors.
class Employee {
    public calculatePay (): number {
        return 0;
    }

    public reportHours (): number {
        return 0;
    }
}


/*
    A good implementation for this case is create an abstraction for these algorithm.
    Each employee in this social structure has a single place where we can go to in order adjust their respective algorithm that is most likely to change.
*/

// @ts-ignore -> It's to typescript ignore duplicate names errors.
abstract class Employee { 

    abstract calculatePay(): number;

    abstract reportHours(): number;
}

class HR extends Employee {
    calculatePay(): number {
        return 0;
    }
    reportHours(): number {
        return 0;
    }
}

class Accounting extends Employee {
    calculatePay(): number {
        return 0;
    }
    reportHours(): number {
        return 0;
    }

}