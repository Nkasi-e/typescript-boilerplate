/**
 * @types - types in typescript
 * */ 

// boolean
let common: boolean = true

// number
let age: number = 54

// string

let myColor: string = 'Blue'

myColor = '4'

// Arrays
// array of strings
let pets: string[] = ['cat', 'dog', 'pi']

// another way to declare array
let pet2: Array<string> = ['breeds', 'fowl', 'dove']
let pet3: Array<object> = [
    {
        name : 'John'
    },
    {
        name: 'Doe'
    }
]

// Object

let wizard: object = {
   a: 'People'
}

// null and undefined
let mehn: undefined = undefined

let noobie: null = null


// Tuple
let items: [string, number]
items = ['Grapes', 10]

// Enum - Enumerable
enum size { small = 1, medium = 2, large = 3 }
let sizeName: string = size[1]

// Any
let whatever: any = 'Meaning'
whatever = 6
whatever = true

// void - quite common when working with fn
const sing = (): void => {
    console.log('void')
}

// never
const error = (): never => {
    throw Error('oops')
}

// interface
// interface can be used really well with object

interface RobotArmy {
    count: number,
    type: string,
    magic: string
}
let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT')
}

// the interface type or keyword above represents the same fn below
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT')
}

// Type Assertion

interface CatMan {
    count: number,
    type: string,
    magic?: boolean
}

let dog = {} as CatMan

dog.count

// functions
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT')
}
let fightRobotArmy4 = (robots: RobotArmy): string => {
    console.log('FIGHT')
    return 'lol'
}


// classes
class Crowd {
    sing: string = `left with the codes`
    private count: number // the private keyword sets the var to private but by default it is set to public
    constructor(sound: string, baloons: number) {
        this.sing = sound
        this.count = baloons
    }

    greet() {
        return `Hello ${this.sing}, ${this.count} times!`
    }
}

let lion = new Crowd('Woowww', 9)
lion.greet()
lion.sing

// Union
let confused: string | number | boolean = `Hello`