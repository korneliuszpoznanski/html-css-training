

function randomAddition(){
    var a;
    var b = '';
    a = Math.floor(Math.random() * 11);
    b += a.toString();
    return b;
    
}
    document.getElementById("ida-multiply").innerHTML = randomAddition();
    document.getElementById("idb-multiply").innerHTML = randomAddition();

function newValueMultiply(){
    document.getElementById("ida-multiply").innerHTML = randomAddition();
    document.getElementById("idb-multiply").innerHTML = randomAddition();
    document.getElementById("idc-multiply").value = '';
    document.getElementById("ekran-multiply").innerHTML = "";
    document.getElementById("ekran-multiply").setAttribute("style", "background-color:rgba(255, 255, 255, .8);height: 52px;");
}

function checkMultiply(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida-multiply").innerHTML ;
    b = document.getElementById("idb-multiply").innerHTML ;
    c = document.getElementById("idc-multiply").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

        if (c == a*b) {
            document.getElementById("ekran-multiply").setAttribute("style", "background-color:rgba(0,255,0, .8);");
            ekran = "BRAWO"
            document.getElementById("ekran-multiply").innerHTML = ekran;
        } else {
            document.getElementById("ekran-multiply").setAttribute("style", "background-color:rgba(255,0,0, .8);");
            ekran = "FAŁSZ";
            document.getElementById("ekran-multiply").innerHTML = ekran;
        }
}