let mynames = ["marie",  "diane", "iradukunda"];
function touppercase(mynames){
  let uppercase = mynames.map(element => element.toUpperCase());
  console.log(uppercase);
}
touppercase(mynames);