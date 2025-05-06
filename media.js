var p1 = 6;
var p2 = 4;
var tr = 3;
var f = 24;

var media = [(p1*0.4)+(p2*0.6)]*7 + tr;

if (f<24){
    console.log("Aluno reprovado");
}
else {
    if(media=>6){
        console.log("Aluno aprovado");
    }
    else{
        console.log("Aluno reprovado");
    }
}



