var sal = 500;

if (sal < 500) {
    var nsal = sal * 1.15;
    console.log(nsal);
} else if (sal >= 500 && sal <= 1000) { 
    var nsal = sal * 1.1;
    console.log(nsal);
} else {
    var nsal = sal * 1.05;
    console.log(nsal);
}
