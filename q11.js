function nparttern(){
let number = 4; 
let string = '';
for(let i = number; i >= 1; i--){
  for(let j = 1; j <= i; j++){
    string += '1';
  }
  string += "\n";
}
console.log(string);
}
nparttern();
