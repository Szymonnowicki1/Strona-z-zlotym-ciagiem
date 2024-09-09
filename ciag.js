
document.getElementById("generujciag").addEventListener("click",  generuj);

let nieparzyste = document.getElementsByName("np");

for(let i=0; i<3;i++){
    nieparzyste[i].addEventListener("click", colorOdd);
}

let parzyste = document.querySelectorAll(".pa"); 

parzyste.forEach(przycisk => {
    let kolor = przycisk.value;
    przycisk.addEventListener("click", function(){
        colorEven(kolor);
    });
})


let phi = document.getElementsByClassName("phi");

for(let ratio of phi){
    let kolor = ratio.value;
    ratio.addEventListener("click", () =>{
        colorPhi(kolor);
    });
}

let wszystkie = document.querySelectorAll(".all");

wszystkie.forEach(przycisk => {
    przycisk.addEventListener("click", colorAll);
})


let zablokuj = document.getElementById("blokada");
zablokuj.addEventListener("click", dostep);


function generuj() {

    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;
    var ile = document.getElementById("ile").value;  


    a = parseFloat(a);
    b = parseFloat(b);
    ile = parseInt(ile);

    if( isNaN(a) || isNaN(b) || isNaN(ile) || ile < 2) {

        document.querySelector('#ciag').innerHTML = '<p>Wprowadz liczby</p>';
        document.querySelector('#fi').innerHTML = '';

    }
    else 
    {

        let ciag = '<p>n<sub>x</sub></p>';
        let ratios = '<p>&Phi; = n<sub>x</sub> &divide; n<sub>x-1</sub></p>';

            if (a % 2 == 1) {
                ciag = ciag + '<div> 01 -> <span class="odd">' + a + '</span></div>';
        }
            else {
            ciag = ciag + '<div> 01 -> <span class="even">' + a + '</span></div>';
        }

            if (b % 2 == 1) {
                ciag = ciag + '<div> 01 -> <span class="odd">' + b + '</span></div>';
        }
            else {
            ciag = ciag + '<div> 01 -> <span class="even">' + b + '</span></div>';
        }

        ratios = ratios + '<div> 01 -> <span class="ratio">brak</span></div>';
        ratios = ratios + '<div> 02-> <span class="ratio">' +(b/a).toFixed(30) + '</span></div>';



        for(i = 3; i <= ile; i++){
            var zmienna = a;
            a = b;
            b = zmienna + b;


            if(i<10){
                zmienna='0';
            }
            else {
                zmienna = '';
            }

            
            if (b % 2 == 1) {
                ciag = ciag + '<div>' + zmienna + i + ' -> <span class="odd">' + b + '</span></div>';
            }
            else {
                ciag = ciag + '<div>' + zmienna + i + ' -> <span class="even">' + b + '</span></div>';
            }

            ratios = ratios + '<div></div>' + zmienna + i + '<span class="ratio">' + (b/a).toFixed(30) + '</span></div>';

        document.querySelector('#ciag').innerHTML = ciag;
        document.querySelector('#fi').innerHTML = ratios;

}
}
}


function colorOdd(){
    let color = this.value;
    let odd = document.getElementsByClassName("odd");

    for(let wyraz of odd){
        wyraz.style.color = color;
    }    
}


function colorEven(kol){
     let wyrazyParzyste = document.querySelectorAll(".even");

     for(let wyraz of wyrazyParzyste){
        wyraz.style.cssText = "color: " + kol + ";"
    }


}

function colorPhi(k){
    let stosunki = document.querySelectorAll(".ratio");

    for(let stosunek of stosunki){

        stosunek.style.cssText = '';
        
        if( k == "pink"){
            stosunek.classList.add("rozowy");
            stosunek.classList.remove("niebieski");
            stosunek.classList.remove("zielony");
        }
        else if( k == "blue"){
            stosunek.classList.add("niebieski");
            stosunek.classList.remove("rozowy");
            stosunek.classList.remove("zielony");
        }
        else if( k == "green"){
            stosunek.classList.add("zielony");
            stosunek.classList.remove("rozowy");
            stosunek.classList.remove("niebieski");
        }
    }
}



function colorAll() {
    let kolor = this.value  
    let wszystkie = document.getElementsByTagName("span");

    for(let liczba of wszystkie){
        liczba.style.cssText = "color: " + kolor + ";";
    }
}


function dostep() { 
    let inputs = document.querySelectorAll("input:not(#blokada)");

    for(let input of inputs){
        input.toggleAttribute("disabled");
    }

    if(this.value == "zablokuj"){
        this.value = "odblokuj";
    }
    else {
        this.value = "zablokuj";
    }
}