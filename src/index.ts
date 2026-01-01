//LEARNING 1 : Basic function creation and overview of TS 

/**function greet(person:string):string{
    return `${person}, Welcome Typescript Playground!!!`;
}

const username:string="Steve Rogers";

console.log(greet(username)); **/

//LEARNING 2 : Interfaces and Types
// interfaces of interfaces 
//Optional Keys => "?"

/** interface Address {
    city: string,
    country: string,
    pincode: number
}
interface User {
    name: string,
    age: number,
    address:Address
}

interface Office{
    address:Address;
}

let user: User = {
    name: "alok",
    age: 21,
    address: {
        city: "Vapi",
        country: "India",
        pincode: 396210
    }
}

function isLegal(user: User): boolean {
    return user.age > 18 ? true : false;
}

console.log(isLegal(user)); **/

//====================================================

//LEARNING 3 : Types and its properties like union, intersection 


/** type Employee ={
    name : string,
    department:string
}

type Manager = {
    name: string,
    plant: string
}

type TeamLead = Manager & Employee;

let teamleader:TeamLead = {
    name:"Ramesh",
    plant:"sayli",
    department:"Fitter"
}

console.log(teamleader.name); **/


//Union 

type GoodUser = {
    name : string,
    
}