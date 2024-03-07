let arr = [1,2,4,5,7,8,9];
 
function randomnumber() {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
randomnumber();