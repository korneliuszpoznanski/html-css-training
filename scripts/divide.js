

function randomDivideA(){
    var a,c;
    var x,y;
    var b = '';
    x = Math.floor(Math.random() * 10)+1;
    y = Math.floor(Math.random() * 10)+1;
    c = x*y;
    b += c.toString();
    return b; 
}

function randomDivideB(){
        var a,c,z;
    var x,y;
    var b = '';
    z = document.getElementById("ida-divide").innerHTML ;
    x = Math.floor(Math.random() * 11);
    while (z % x > 0 || x == 0 || z/x > 10){
    x = Math.floor(Math.random() * 11);
    }
    b += x.toString();
    return b; 
}






    document.getElementById("ida-divide").innerHTML = randomDivideA();
    document.getElementById("idb-divide").innerHTML = randomDivideB();

function newValueDivide(){
    document.getElementById("ida-divide").innerHTML = randomDivideA();
    document.getElementById("idb-divide").innerHTML = randomDivideB();
    document.getElementById("idc-divide").value = '';
    document.getElementById("ekran-divide").innerHTML = "";
    document.getElementById("ekran-divide").setAttribute("style", "background-color:rgba(255, 255, 255, .8);height: 52px;");
}

function checkDivide(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida-divide").innerHTML ;
    b = document.getElementById("idb-divide").innerHTML ;
    c = document.getElementById("idc-divide").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

        if (c == a/b) {
            document.getElementById("ekran-divide").setAttribute("style", "background-color:rgba(0,255,0, .8);");
            ekran = "BRAWO"
            document.getElementById("ekran-divide").innerHTML = ekran;
        } else {
            document.getElementById("ekran-divide").setAttribute("style", "background-color:rgba(255,0,0, .8);");
            ekran = "FAŁSZ";
            document.getElementById("ekran-divide").innerHTML = ekran;
        }
}