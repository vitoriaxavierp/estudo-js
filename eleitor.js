var idade = 18;

if (idade<16){
    console.log("Não eleitor");
}
else if (18<=idade<=65){
    console.log("Eleitor obrigatório");
}
else if ((idade==16) || (idade>65) || (idade==17)){
    console.log("Eleitor facultativo");
}

