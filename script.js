const getArray = (y) => {
let result = [];
for(let i = 1;i <= y;i++){
  if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
    result.splice(99,0,"yu-gi-oh");
  }
 else if(i % 2 === 0 && i % 3 === 0){
   result.splice(99,0,"yu-gi");
 }else if(i % 2 === 0 && i % 5 === 0){
   result.splice(99,0,"yu-oh");
 }else if(i % 3 === 0 && i % 5 === 0){
   result.splice(99,0,"gi-oh");
 }
 else if(i % 5 === 0){
   result.splice(99,0,"oh");
 } else if(i % 3 === 0){
   result.splice(99,0,"gi");
 }else if(i % 2 === 0){
   result.splice(99,0,"yu");
 }
  else{
      result.splice(99,0,i)
  }
}
return result;
};
//Passing 100 as number argument
getArray(100);
//Passing a random number as argument
getArray(50);

