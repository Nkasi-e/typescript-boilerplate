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