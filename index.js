const namesArray = [];

function writeCards(namesArray, surprise) {
    for (let i=0; i<namesArray.length; i++) {
        namesArray[i] =`Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`}
    return namesArray;
    }
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
function countDown (number){
    while (number>=0){
        console.log(number--);
        debugger;
    }
}
countDown(10);