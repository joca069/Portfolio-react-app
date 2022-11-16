function generate(max){
const alfabet='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'

let ret=""

for(let i=0;i<max;i++){
    ret+=alfabet.charAt(parseInt(Math.random()*alfabet.length))
}
return ret

}

export function generateID(){
    return generate(50)
}