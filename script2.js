// Temporal dead zone: the time between a variable's memory is allocated but not initialize ;
// in this time

// let a = 10;
// console.log(a);
// console.log(c); shows not defined
//console.log(b)show reffarence error
// console.log(x);shows not defined
// let b = 100;
// var c = 5000;
// console.log(c);

const obj1 = {
  name: "name1",
  age: 22,
};

const obj2 = {
  vill: "jagannathpur",
};
obj2.__proto__ = obj1;
console.log(obj2.name);

// obj1={name:"ram",
// work:function f(){
// console.log("ram's work");
// }
// }

// obj2={
// vill:"raipur"
// }
// obj2.__proto__ =obj1;
//                  //....prototype of obj1 comes in obj2 now we can access obj1's data from obj2
// console.log(obj2.vill);
// console.log(obj2.name);
// console.log(obj2);
