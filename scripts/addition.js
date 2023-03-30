

function randomAdditionA(){
    
    var a;
    var b = '';
    a = Math.floor(Math.random() * 100);
    b += a.toString();
    return b;
}

function randomAdditionB(){
    x = document.getElementById("ida-addition").innerHTML ;
    var a;
    var b = '';
    a = Math.floor(Math.random() * (100-x));
    b += a.toString();
    return b;
}
    document.getElementById("ida-addition").innerHTML = randomAdditionA();
    document.getElementById("idb-addition").innerHTML = randomAdditionB();

function newValueAddition(){
    document.getElementById("ida-addition").innerHTML = randomAdditionA();
    document.getElementById("idb-addition").innerHTML = randomAdditionB();
    document.getElementById("idc-addition").value = '';
    document.getElementById("ekran-addition").innerHTML = "";
    document.getElementById("ekran-addition").setAttribute("style", "background-color:rgba(255, 255, 255, .8);height: 52px;");
}

function checkAddition(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida-addition").innerHTML ;
    b = document.getElementById("idb-addition").innerHTML ;
    c = document.getElementById("idc-addition").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

        if (c == a+b) {
            document.getElementById("ekran-addition").setAttribute("style", "background-color:rgba(0,255,0, .8);");
            ekran = "BRAWO"
            document.getElementById("ekran-addition").innerHTML = ekran;
        } else {
            document.getElementById("ekran-addition").setAttribute("style", "background-color:rgba(255,0,0, .8);");
            ekran = "FAŁSZ";
            document.getElementById("ekran-addition").innerHTML = ekran;
        }
}