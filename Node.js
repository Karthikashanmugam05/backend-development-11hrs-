file name:index.js,folder name:1.hello-world-node.........
console.log("hello node js");
const array=[1,2,3];
console.log(array,"array");
setTimeout(()=>{
    console.log('this message is delayed by 4sec');
},8000);


//output............
PS C:\Users\karth\OneDrive\Desktop\LESSON\1.hello-world-node> node index.js
hello node js
[ 1, 2, 3 ] array
this message is delayed by 4sec
...........................
  //file sum.js

  //normal node js
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(2,3));

//import and export
i've jus created a folder named 2.node-module.js
  which has 2 file namely index.js->root file and then first-module.js.we've to import and export b/w the files
  in first module.js...................
function add(a,b){
    return a,b;
}
function div(a,b){
    if(b==0){
        throw new Error('div by 0 is not allowed');
    }
    return a/b;
}

module.exports={
    add,div
};.......................................

in index.js......................


  //root file

//module.exports->export
//require->import
const firstModule=require("./first-module");
console.log(firstModule.add(10,20));
  

  
