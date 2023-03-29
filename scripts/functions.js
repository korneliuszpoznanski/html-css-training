const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const wrapper3 = document.querySelector('.wrapper3');
const wrapper4 = document.querySelector('.wrapper4');

const btnPopup = document.querySelector('.btn-popup');
const btn2Popup = document.querySelector('.btn2-popup');
const btn3Popup = document.querySelector('.btn3-popup');
const btn4Popup = document.querySelector('.btn4-popup');

const btnPopupClose = document.querySelector('.close');
const btn2PopupClose = document.querySelector('.close2');
const btn3PopupClose = document.querySelector('.close3');
const btn4PopupClose = document.querySelector('.close4');


btnPopup.addEventListener('click', ()=> {
    wrapper1.classList.add('active-popup');
    wrapper2.classList.remove('active-popup');
    wrapper3.classList.remove('active-popup');
    wrapper4.classList.remove('active-popup');
});

btnPopupClose.addEventListener('click', ()=> {
    wrapper1.classList.remove('active-popup');
});

btn2Popup.addEventListener('click', ()=> {
    wrapper1.classList.remove('active-popup');
    wrapper2.classList.add('active-popup');
    wrapper3.classList.remove('active-popup');
    wrapper4.classList.remove('active-popup');
});

btn2PopupClose.addEventListener('click', ()=> {
    wrapper2.classList.remove('active-popup');
});

btn3Popup.addEventListener('click', ()=> {
    wrapper1.classList.remove('active-popup');
    wrapper2.classList.remove('active-popup');
    wrapper3.classList.add('active-popup');
    wrapper4.classList.remove('active-popup');
});

btn3PopupClose.addEventListener('click', ()=> {
    wrapper2.classList.remove('active-popup');
});
btn4Popup.addEventListener('click', ()=> {
    wrapper1.classList.remove('active-popup');
    wrapper2.classList.remove('active-popup');
    wrapper3.classList.remove('active-popup');
    wrapper4.classList.add('active-popup');
});

btn4PopupClose.addEventListener('click', ()=> {
    wrapper4.classList.remove('active-popup');
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