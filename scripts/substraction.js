

function randomSubstractionA(){
    
    var a;
    var b = '';
    a = Math.floor(Math.random() * 100);
    b += a.toString();
    return b;
}

function randomSubstractionB(){
    x = document.getElementById("ida-substraction").innerHTML ;
    var a;
    var b = '';
    a = Math.floor(Math.random() * x);
    b += a.toString();
    return b;
}
    document.getElementById("ida-substraction").innerHTML = randomSubstractionA();
    document.getElementById("idb-substraction").innerHTML = randomSubstractionB();

function newValueSubstraction(){
    document.getElementById("ida-substraction").innerHTML = randomSubstractionA();
    document.getElementById("idb-substraction").innerHTML = randomSubstractionB();
    document.getElementById("idc-substraction").value = '';
    document.getElementById("ekran-substraction").innerHTML = "";
    document.getElementById("ekran-substraction").setAttribute("style", "background-color:rgba(255, 255, 255, .8);height: 52px;");
}

function checkSubstraction(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida-substraction").innerHTML ;
    b = document.getElementById("idb-substraction").innerHTML ;
    c = document.getElementById("idc-substraction").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

        if (c == a-b) {
            document.getElementById("ekran-substraction").setAttribute("style", "background-color:rgba(0,255,0, .8);");
            ekran = "BRAWO"
            document.getElementById("ekran-substraction").innerHTML = ekran;
        } else {
            document.getElementById("ekran-substraction").setAttribute("style", "background-color:rgba(255,0,0, .8);");
            ekran = "FAŁSZ";
            document.getElementById("ekran-substraction").innerHTML = ekran;
        }
}