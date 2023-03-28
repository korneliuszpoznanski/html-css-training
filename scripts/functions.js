const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const btnPopup = document.querySelector('.btn-popup');
const btn2Popup = document.querySelector('.btn2-popup');
const btnPopupClose = document.querySelector('.close');


btnPopup.addEventListener('click', ()=> {
    wrapper1.classList.add('active-popup');
});

btnPopupClose.addEventListener('click', ()=> {
    wrapper1.classList.remove('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrapper2.classList.add('active-popup');
});

btnPopupClose.addEventListener('click', ()=> {
    wrapper2.classList.remove('active-popup');
});

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
    document.getElementById("ekran").setAttribute("style", "background-color:rgba(255, 255, 255, .8);height: 52px;");
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
            document.getElementById("ekran").setAttribute("style", "background-color:rgba(0,255,0, .8);");
            ekran = "BRAWO"
            document.getElementById("ekran").innerHTML = ekran;
        } else {
            document.getElementById("ekran").setAttribute("style", "background-color:rgba(255,0,0, .8);");
            ekran = "FAŁSZ";
            document.getElementById("ekran").innerHTML = ekran;
        }
}