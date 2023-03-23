function devide(){
    let a, b;
    let text;
    
    a = document.getElementById('ida').value;
    b = document.getElementById('idb').value;

    a = parseFloat(a);
    b = parseFloat(b);

    text = (a/b);
    document.getElementById("ekran").innerHTML = text;


}