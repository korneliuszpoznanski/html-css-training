function random(){
    var a;
    var b = '';
    a = Math.floor(Math.random() * 11);
    b += a.toString();
    return b;
    
}
    document.getElementById("ida").innerHTML = random();
    document.getElementById("idb").innerHTML = random();

function newValue(){
    document.getElementById("ida").innerHTML = random();
    document.getElementById("idb").innerHTML = random();
    document.getElementById("idc").value = '';
    document.getElementById("ekran").innerHTML = "";
}

function check(){
    let a,b,c;
    let ekran;
    a = document.getElementById("ida").innerHTML ;
    b = document.getElementById("idb").innerHTML ;
    c = document.getElementById("idc").value ;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    console.log(a);
    console.log(b);

        if (c == a*b) {
            ekran = "BRAWO"
            document.getElementById("ekran").innerHTML = ekran;
        } else {
            ekran = "FAŁSZ";
            document.getElementById("ekran").innerHTML = ekran;
        }
}