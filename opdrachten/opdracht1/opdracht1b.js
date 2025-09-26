let globalVar = 10;

function modifyVar(){
    let localVar = 5;
    let innerVar = 2;
    console.log(globalVar,localVar, innerVar);
}
console.log(globalVar,localVar, innerVar);
/*
het zal een foutmedling geven omdat het niet mogelijk is om variable die binnen
een functie er buiten te gebruiken alleen in de functie zelf.
*/