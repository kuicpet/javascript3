const getArray = (y) => {
let result = [];
for(let i = 1;i <= y;i++){
  if(i % 2 === 0){
      result.splice(99,0,"yu");
  }if(i % 3 === 0){
      result.splice(99,0,"gi")
  }
  else{
      result.splice(99,0,i)
  }
}
return result;
};
getArray(100);