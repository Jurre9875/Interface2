function rekenUit(a, b, callback){
    const resulstaat = a + b;
    return callback(resulstaat);
}
function verdubbel(res) {
    return res * 2;
}
console.log(rekenUit(4, 5, verdubbel));   
