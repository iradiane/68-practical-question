function spattern() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

spattern();
