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

/*====================================================================*/


//Property 201: PicK => it helps to select set of keys from the interface
//Example given below it helps to pass only three params out of the 5
/**
interface User {
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;

}

type UpdateProps = Pick<User, 'name'| 'age' | 'email'>

function updateUser(updatedProps:UpdateProps){
    //hit the db
} **/

//Property 202: Partial => It helps to pass optional params (Not required  mandatory)
//Example 

/**
interface User {
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;

}

type UpdateProps = Partial<User>

function updateUser(updatedProps:UpdateProps){
    //hit the db
} 

updateUser({
    name:"alok",               //Note Here I am only passing 2 key out of 5
    age:21,
}) **/

//Property 203: Readonly 
// in Ts there is problem with arrays and object which is we can change the internal values of the object and array...But what if we have to restrict it then readonly helps

//Example 

/*
    const arr = [2,,4,5,6,5];       //arr is const still modification is done;
    arr[0]=100;  


    type User = {
        name : string,
        age : number
    }

    const user:Readonly<User> = {
        name:"John",
        age:10
    }

    user.age = 12;   //here modification of internal data is restricted

//Simple Usecase in industry
  interface Config{
    endpoint : string;
    apiKey: string;
  }

  const config:Readonly<Config> = {
    endpoint:'https://api.user.com',
    apiKey:'ilovecoding'
  }

  config.apiKey = " "  //Not allowed     */



//Property 204: Record & Maps
//Record is used is the cleaner way to define the object types 
//Example
 /* type Users = Record<string,{age:number; name:string}>;

 const user:Users = {
    "username1" : { age:18, name:"amit" },
    "username2" : { age:18, name:"alok" }
 } */

//where Maps is used to map key value pairs using the set() & get() functions
/*
interface User {
    name:string;
    age:number;
}

//Initialize an empty Map 
const userMap = new Map<string,User>();

userMap.set('abc123',{ name:"alok", age:21});
userMap.set('user2',{ name:"shivam", age:24});

const user = userMap.get("user2");
console.log(user);  */


//Property 205: Exclude
//it can be said that it is just opposite of pick means in this we can just remove 1-2 params from the bunch of 100 params;
/*
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType,'scroll'>         // click & mouse is only

const handleEvent = (event:ExcludeEvent) => {
    console.log(`handling event : ${event}`);
}

handleEvent('scroll');          //here scroll is not allowed to pass as it excluded  */


//Property 206: Type inference when zod is used means we can extract the types
//Example : Express Backend Code Snippet
/*
const userProfileSchema = z.object({
    name:z.string(),
    email:z.string().email().optional(),
})

type FinalUserSchema = z.infer<typeof userProfileSchema>

type FinalUserSchema = {
   name:string,
   email?:string
}  */

