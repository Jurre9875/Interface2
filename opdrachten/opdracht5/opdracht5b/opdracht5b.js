console.log("we moeten 10 seconden wachten")

setTimeout(() => {
    console.log("bijna klaar");
}, 5000);

function wachtEnVoerUit(){
    setTimeout(() => {
        console.log("klaar met wachten");
    }, 10000);
} 
wachtEnVoerUit();