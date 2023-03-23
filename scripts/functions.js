function random(){
    var a;
    var b = '';
    a = Math.floor(Math.random() * 11);
    b += a.toString();
    return b;
    
}
    document.getElementById("ida").value = random();
    document.getElementById("idb").value = random();

function newValue(){
    document.getElementById("ida").value = random();
    document.getElementById("idb").value = random();
    document.getElementById("idc").value = '';
    document.getElementById("ekran").innerHTML = "";
}

function check(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida").value ;
    b = document.getElementById("idb").value ;
    c = document.getElementById("idc").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

        if (c == a*b) {
            ekran = "BRAWO"
            document.getElementById("ekran").innerHTML = ekran;
        } else {
            ekran = "FAŁSZ";
            document.getElementById("ekran").innerHTML = ekran;
        }
}