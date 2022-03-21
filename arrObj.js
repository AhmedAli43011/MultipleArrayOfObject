let arrName = [{
    "first_name": "Ahmed",
    "last_name": "Ali",
    "age": 29
},
{
    "first_name": "Sajeel",
    "last_name": "Wanee",
    "age": 27
},

{
    "first_name": "Fahad",
    "last_name": "Sohail",
    "age": 27
},

{
    "first_name": "Ehsan",
    "last_name": "Duriman",
    "age": 29,

},
]

let obj1 = {
    "first_name": "Ehsan",
    "last_name": "Duriman",
    "age": 29,
};

let obj2 = {
    "first_name": "Ehsan101",
    "last_name": "Duriman",
    "age": 29,
}
var button = document.getElementById("btn12")
 
button.addEventListener('click',()=>{
    checkAvailability(obj2)
})

function checkAvailability(obj) {
    let findobj = arrName.find(item => (item.first_name === obj.first_name))
    if (findobj) {
        alert("obj already in array")
    }
    else{
        arrName.push(obj)
        console.log(arrName)
        
    } 
}
 
let a = arrName.filter(item =>(
    item.last_name=== 'Wanee'
))
console.log("filter",a)
let b = arrName.find(item =>(
    item.last_name=== 'Wanee'
))
console.log("find",b)
  
alert(checkAvailability(arrName,"awan"))  



let functionUnique = isFolderNameUnique("Awan");

console.log(functionUnique);

function isFolderNameUnique(name) {

  name = name.toLowerCase();

    if(arrName.indexOf(name) !== -1) {
        return false;
    }
    else{
        
        return true;
   
    }
    
}
let indexFind = arrName.findIndex((item) => {

    return item.first_name=="Fahad";

});
arrName[indexFind].name="abc"
console.log(arrName)
let usersMapped = arrName.map((item) => {
    return{    
        fullName: `${item.first_name} ${item.last_name}`,
        ...item
    };
    

  });
  console.log(usersMapped)



let personName = {
    name: "Billy",
    age: 34
};
let cast={
    ...personName,
    castName:"awan",
    castStrenght:100
}

 
console.log("here",cast)



//   return arr.some(arrVal => val === arrVal);
//     arrName.push({
//         first_name:"al"
//     })
//     if(val!==arrName){

//     }


//     let value = undefined ;

// console.log(Boolean(!value));

// if(false){
//     console.log("abc")
// }


// let person = { 
//     name:"ahmed",
//     id:1
// }
// person.age= 34
// console.log(person)