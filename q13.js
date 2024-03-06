function displayPattern() {
  for (let i = 1; i <= 5; i++) {
    let num = '';
    for (let j = 1; j <= 5; j++) {
      if (i === 1 || i === 5 || j === 1 || j === 5) {
        num += '1 ';
      } else {
        num += '0 ';
      }
    }
    console.log(row);
  }
}
displayPattern();
