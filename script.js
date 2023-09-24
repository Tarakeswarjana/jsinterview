// window.addEventListener('load',()=>{
//     const form= document.querySelector("#new-task-form")
// })

//'https://converter.portal.ayfie.com/api/converter/1/FileConverter/Convert' -H 'X-API-KEY: API_KEY' -F 'file=FILE_PATH'//

//..........laxical scope.......................................created by tarakeswar.....//

/*
function parent(){
    var counter=0;
    function child(){
        var b=6;
        console.log("counter :"+counter++);
       
    }
   child();
}
parent();
parent();
parent();*/

//***by tarakeswar jana*******.........................................closure............................*******/
/*
function parent(){
    var counter=0;
   
    function child(){
        var b=6;
        console.log("counter :"+counter++);
       
    }
   return(child);
}

var show=parent();
show();
show();
show();
*/

//1.return must requre 2.show=parent()..create inner child function's closure; 3..counter can able to data;

//.........................................let,var,const...........//
/*
function valid(){
   var b=9;
    {
        let a=9;
        a=10;
        console.log(a);
        
         const d=3;
         
         console.log(d);
         

    }
    var b=55;
    console.log(b);
}
valid();*/

//..................................HOISTING.....................//
/*
console.log(b);
var b;//declearation//
b=9;//initialization
showthis()

function showthis(){
    let d=88;
    console.log(d);
}*/

//.............................function declearation andEXPRESSION &&annonomus function.............//

//normal....
/*
function ram(){
console.log("ram");
}
ram();

//expression && anonomus
var ram= function(){   //declearation throw a variable is expression.
    console.log("ram");  //which function have no name anno nymus ..
}
ram();*/

//.................................CALLBACK FUNCTION..............//

/*
function show(callback){
var a=9;
if(a!=9){
    alert ("no");
}
callback();

}

function define(){
    console.log("i am call back");
}

show(define);
*/

//...............................Event bubling.&& cAPTURING...........//
/*htlm: 
<div id="grandparent">
    <div id="parent">
        <div id="child">

        </div>
    </div>

</div>*/
/* css:#grandparent{padding: 50px;
    border-radius: 2px solid black;
    background-color: black;
    margin:200px
}
#parent{
    padding: 50px;
   border-radius: 5px solid black;background-color: orange
}
#child{
    padding: 50px;
    background-color: brown;
}*/
/*
 document.querySelector("#grandparent").addEventListener('click',()=>{
    console.log("grand parent");
 });
 document.querySelector("#parent").addEventListener('click',()=>{
    console.log(" parent");
 })
 document.querySelector("#child").addEventListener('click',()=>{console.log("child")});
*/

//..........................PROMISE............//
/* 

let promise =new Promise((resolve,reject)=>{
  console.log("processing.....");//..............pending state..//
result=true;

setTimeout(()=>{
  if(result){
  resolve("data came in jeson form");//..........resolve state.....//
}else{
  reject("error occard");//.......reject state...........//
}
},3000)}
);
promise.then((data)=>{
console.log(data);
}).catch((error)=>{
  console.log(error);
})
*/

//...........................Async await..............//

/* async function f(){
    let promise =new Promise ((resolve,reject)=>{
        setTimeout(()=>resolve("done!!"),2000)});
        let result=await promise;
        console.log(promise);
        console.log ("test");
       

   }
   f();*/
//    async function f(){
//     let promise = new Promise((resolve,reject)=>{
//       setTimeout(()=>{resolve("solved!")},3000);
//     })
//     let result= await promise;
//     console.log(result);
//     console.log("hellow");
//    }
//    f();

//........................map ,filter, reduce.................//
//map:
/*
arr=[2,3,4,5];
 let newarr=arr.map((x)=>{return(x=x*4)})
 console.log(newarr);*/

//filter:
/*
 arr=[2,3,4,5];
 let newarr=arr.filter((x)=>{return(x<4)})
 console.log(newarr);*/

// reduce:
/*arr=[2,3,4,5];
 let newarr=arr.reduce((acc,curr)=>{return(acc+curr)})
 console.log(newarr);*/

//.................. AJAX.................
/*function f(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function (){
    if(this.readyState==4 && this.status==200){
      var data=this.responseText;
      console.log(data);
    }else if(this.readyState==4 && this.status==404){
    console.log("not found");
    }
    
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.send();
    }
    f();*/

//....................prototype inheritance.....................

/*                     javascript Object
                                   |
                                  obj1            this can explain prototype chaining
                                    |             consept of prototype
                                   obj2*/
/*                             
            obj1={name:"ram",
            work:function f(){
            console.log("ram's work");
            }
    }
    
    obj2={
        vill:"raipur"
    }
    obj2.__proto__ =obj1;
                             //....prototype of obj1 comes in obj2 now we can access obj1's data from obj2 
    console.log(obj2.vill);
    console.log(obj2.name);
    console.log(obj2);  */

//..............................call,apply,bind..............
/*let obj1={
        firstname:"aksay",
        lastname:"jana",
        }
        printfulname=function(n1,n2,n3){
          console.log(this.firstname+" "+this.lastname+n1+n2+n3);}
        printfulname(name1);

        obj2={
          firstname:"aksayttttt",
          lastname:"janammm",
        }                                  //here this keyword reffars in which object we are taking to parform oparation
        printfulname.call(obj2,2,3,4)
        printfulname.apply(obj2,[2,3,4])*/

/*     
  let name1={
    firstname:"aksay",
    lastname:"jana",
    }
    printfulname=function(vill){
      console.log(this.firstname+" "+this.lastname +"village:"+vill);}
   
    name2={
      firstname:"aksayttttt",
      lastname:"janammm",
    }

    newprintfulname=printfulname.bind(name2);//creating a reffarece of function with name2
    newprintfulname("jagannathpur");
*/

//...........................function curring..........

//Currying is a technique of evaluating function with multiple arguments,
//into sequence of functions with single argument.
/*obj2={
  firstname:"aksayttttt",
  lastname:"janammm",
}
  printfulname=function(n1,n2,n3){
   console.log(this.firstname+" "+this.lastname+n1+n2+n3);
    let sum=n1*(n2+n3);
    console.log(sum);
  }
  
  newprint=printfulname.bind(obj2,2)
  newprint(3,4);
 new2=newprint.bind(printfulname,3);
  new2(4);
    */

//................pure function............

/* function calculateGST( productPrice ) {
    return productPrice * 0.05;                  // ...this is a pure function
}

var tax = 20;
function calculateGST( productPrice ) {
    return productPrice * (tax / 100) + productPrice;//........this is not
}*/

//...............higherorder function.............

// function show() {
//   console.log("function");
// }
// show();

// const show1 = () => {
//   console.log("arrow function");
// };
// show1();

//...............................constructor.....................
// function handlenew(name,age,ph){
//   this.name=name;
//   this.age=age;
//   this.ph= ph;

//   }

//   student1= new handlenew("rakesh",49,7777);
//   console.log(student1.name);

// <........................................restoparetor....................................>
// function show(p,...rest){
// console.log(arguments);

// console.log(`first ${a1}, 2nd ${a2}, 3rd ${a3}`);
// console.log(p);
// let sum=0;
// for(i=0;i<rest.length;i++){
//   sum=sum+rest[i];
// }
// console.log(sum);
// }
// show("ram",4,5,7);

//....................................................spreadoparetor....................................>

// arr1=[4,5,6,2,4];
// arr2=[9,9,9];
// [...arr2]=[...arr1];

// console.log(arr2);
// arr1.push(1);
// console.log(arr1);

//.................................................consept of this..............................

// const obj= {
//   title:"rohit",
//   tags:["a","b","c"] ,

//   ram(){
// this.tags.forEach(function(tag){
//   console.log(this.title,tag);
// },this)
//   }

// }

// obj.ram();
// arr=[2,3,5,6,7];
// arr.forEach(element => {
//   console.log(element*3);

// });
// console.log(arr);

//...............Slice & splice.......................

// arr = [3, 4, 5, 6];

// console.log(arr + "....first");

// console.log(arr.slice(1, 3)); //1 se suru  3-1=2 tak

// arr.splice(2, 1, 3, 4); // 2 se suru ,,1 element deleted uske badle 3 and 4 include
// console.log(arr);

//...................................................apiCall...........................

const apicall = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(JSON.stringify(data));
};
apicall();
