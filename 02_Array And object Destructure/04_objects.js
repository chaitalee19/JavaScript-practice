//Singleton Objects

//const tinder = new Object() //Singleton object 
const tinderUser = {} //Non Singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false 

//console.log(tinder);
const regularUser = {
    email:"cghurde007@gmail.com",
    fullname:{
        userfullname:{
            firstname:"chaitalee",
            Lastname:"ghurde"
        }
    }
}

// console.log(regularUser.fullname);
//{ userfullname: { firstname: 'chaitalee', Lastname: 'ghurde' } }
// console.log(regularUser.fullname.userfullname);
//{ firstname: 'chaitalee', Lastname: 'ghurde' }
// console.log(regularUser.fullname.userfullname?.firstname.Lastname);

//Merging 2 Objects 

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',5:'f'}

//const obj4 = Object.assign(obj1,obj2,obj3)
//But dont we like it is acceptable but always use the target & source 
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

//Use this one 
//            target empty {} obj    source obj1,2,3 
const obj4 = Object.assign({},obj1,obj2,obj3)

//for merge insted of assign we can use the spred operator 

const obj5 = {...obj1, ...obj2}
//console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//From database we are mostly getting the array of Objects in that case 

const userDBData = [
    {   
        id:1,
        email:"123@gmail"
    },
    {   
        id:2,
        email:"123@gmail"
    },
    {   
        id:3,
        email:"123@gmail"
    },
    {   
        id:4,
        email:"123@gmail"
    },
    {   
        id:5,
        email:"123@gmail"
    },
    {   
        id:6,
        email:"123@gmail"
    }
]

//console.log(userDBData);
/*[
    { id: 1, email: '123@gmail' },
    { id: 2, email: '123@gmail' },
    { id: 3, email: '123@gmail' },
    { id: 4, email: '123@gmail' },
    { id: 5, email: '123@gmail' },
    { id: 6, email: '123@gmail' }
  ]*/

//console.log(userDBData[0].email);
//123@gmail

//console.log(Object.keys(tinderUser));
//Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//It will return the array of objects
//[ 'id', 'name', 'isLoggedin' ]
// Now on this array we can iterate any thing

//console.log(Object.values(tinderUser));//it will fetch the values 
//[ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser));
//it will simply convert the key value pair of object into the array (like array inside the array)
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedin', false ] ]

//To check the objet has the property or not  
//console.log(tinderUser.hasOwnProperty('id'));
//It will return true false value 


//--------------------------------------------------

 //Object Destructuring

 const course = {
    coursename:"JavaScript In Hindi",
    price:"9999",
    instructor:"Chaitalee Madam"

 }
 //if i want the instructor name then how i access it 
 
 //console.log(course.instructor);//Chaitalee Madam
 //But suppose i have to use this value more than 10 times then i have to use the same syntax every time 

 //Object Destructuring is nothing but the syntaxical sugar only 
//console.log(course.instructor);
//console.log(course.instructor);
//console.log(course.instructor);

// const {instructor} = course 
// //console.log(instructor);//Chaitalee Madam

// We can also rename it 
// const {instructor:Teacher } = course 
// console.log(instructor);//Chaitalee Madam
// console.log(Teacher);//Chaitalee Madam

 //--------------------------------------------------

 //Json API
 //Javascript Object Notation
 //Just like a object but no name 
 /*
 {
   "name":"Viveksir",
   "id":9595,
   "age"25,
   "isMarried":false
 }
*/