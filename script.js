let lastImg = null;

let jatekospont = 0;
let gepPont = 0;

function jatekosValasztas(img) {
    if (lastImg) 
        lastImg.style.border = "none";
    lastImg = img;

    img.style.border = "5px solid red";

    let gepvalasztas = ["papir", "ko", "ollo"][Math.floor(Math.random() * 3)];
    document.getElementById("gepvalasztas").src = "./img/" + gepvalasztas + ".png";

    if ((img.alt == "papir" && gepvalasztas == "ko") ||
        (img.alt == "ko" && gepvalasztas == "ollo") ||
        (img.alt == "ollo" && gepvalasztas == "papir"))
    {
        document.getElementById("jatekosP").innerHTML = ++jatekospont;
        document.getElementById("eredmeny").innerHTML = "Eredmény: Nyertél!";
    }
    else if (img.alt == gepvalasztas)
    {
        document.getElementById("eredmeny").innerHTML = "Eredmény: Döntetlen!";
    }
    else
    {
       document.getElementById("gepP").innerHTML = ++gepPont;
       document.getElementById("eredmeny").innerHTML = "Eredmény: Vesztettél!";
    }
}