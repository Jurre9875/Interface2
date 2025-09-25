let globalVar = 10;

function modifyVar(){
    let localVar = 5;
    let innerVar = 2;
    console.log(localVar);
    console.log(innerVar);
    console.log(globalVar);
}
console.log(globalVar);
console