let globalVar = 10;


let myObject = {
    waarde: 5,


    regularfunction: function(){
        console.log(this.waarde),
        console.log(globalVar);
    },


    arrowfunction: () => {
        console.log(this.waarde),
        console.log(globalVar);
    }
}

myObject.regularfunction();
myObject.arrowfunction();

// eigenlijk erft de arrowfunction de this van de globale scope en daar staat geen waarde. en daarom zal het ook niet werken het gebruikt dus de this van hun omgeving.