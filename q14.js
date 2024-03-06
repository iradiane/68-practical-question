function displayPattern() {
  for (let i = 1; i <= 4; i++) {
    let num = '';
    for (let j = 1; j <= 4; j++) {
      if (j === 4 - i + 1){
        num += '1 ';
      } else {
        num += '';
      }
    }
    console.log(num);
  }
}
displayPattern();
