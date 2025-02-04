import { User } from "./types/User" //Importerar User

function helloWorld(){
    console.log("Hello World")
}

helloWorld()


function testDataTypes(){
    const name: string =""
    const name2: String =""  //NOT recommended, tar mer plats (dåligt för prestanda)


    const age: number = 15
    const currency: number = 289.5

    const isTired: boolean = true
    const isLoggedIn: boolean = false

    const highScoreList: number[] = [250, 150, 0]
    const userNameList: Array<string> = ["Benny", "Thomas"]
    //Tuple
    let x: [string, number]
    x = ["hello", 10]

    //enum
    enum Color {
        Red,
        Green,
        Blue
    }

    let myColor: Color = Color.Green;

    //Avoid the use of 'any'
    let anyDataType: any = ""
    anyDataType = 0
    anyDataType = true


 }


 function returnNothing(){} //void by default
 function returnNothingExplicit():void{} //tydliga med vad man förväntar sig för resultat
 function additionExample ():number {
    return 2+2
 }

 //object
//approach --> without interface
 const userWithoutInterface: {name:string; password:string} = {
    name: "",
    password:"",
 }
 function printCurrentUserWithoutInterface(user: {username:string, password:string}){
    console.log(user)

 }
 //approach --> With interface
 const user: User = {           //åkallar interfacet vi skapat högst upp. Deklarera variablerna
    username: "",
    password: ""
 }

 function CurrentUser(user: User) {
    console.log(user)
 }



 import { Superhero } from "./workLab"
 import { Sidekick } from "./workLab"

 const sidekick: Sidekick = {
    name: "Amanda",
    superpower: "TypeScript",
    strength: 50
}

 const superHero: Superhero = {
     name: "Martin",
     superpower: "Coding",
     strength: 100,
     speed: 50,
     health: 100,
     damage: 60,
     isAlive: true,
     peopleSaved: 0,
     age: 24,
     gender: "male",
     hasCape: true,
     hasWeapon: true,
     isAnomomus: false,
     sidekickList: [sidekick]
     //sidekick: Sidekick
 }

 function printCurrentUser(user:User){
    console.log(user.username)
 }

const benny: User = {
    username: "Benny",
    password:"123",

}

function subtractionExample(x: number, y:number): number{ //:number, specificerar att resultatet som förväntas är ett heltal
    return x-y
}
 
printCurrentUser(user) //<-- username 
printCurrentUser(benny)
const sum = subtractionExample(10,5)
console.log(sum)

