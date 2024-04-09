function osszeadas() {
    var szam1 = parseFloat(document.getElementById("szam1Input").value);
    var szam2 = parseFloat(document.getElementById("szam2Input").value);
    var osszeg = szam1 + szam2;
    document.getElementById("eredmeny2").textContent = "Az összeg: " + osszeg;
}

function kivonas() {
    var szam11 = parseFloat(document.getElementById("szam11Input").value);
    var szam22 = parseFloat(document.getElementById("szam22Input").value);
    var kulonbseg = szam11 - szam22;
    document.getElementById("eredmeny3").textContent = "A különbség: " + kulonbseg;
}


function szamitNegyzetTerulet(oldalhossz) {
    return oldalhossz * oldalhossz;
}

function szamitEsKiir() {
    var oldalhossz = document.getElementById("oldalhosszInput").value;
    var terulet = szamitNegyzetTerulet(oldalhossz);
    document.getElementById("eredmeny").textContent = "A négyzet területe: " + terulet;
}

function szamitDerekszoguHaromszogTerulet(befogo1, befogo2) {
    return (befogo1 * befogo2) / 2;
}

function szamitEsKiir() {
    var befogo1 = parseFloat(document.getElementById("befogo1Input").value);
    var befogo2 = parseFloat(document.getElementById("befogo2Input").value);
    var terulet = szamitDerekszoguHaromszogTerulet(befogo1, befogo2);
    if (!isNaN(terulet)) {
        document.getElementById("eredmeny").textContent = "A derékszögű háromszög területe: " + terulet;
    } else {
        document.getElementById("eredmeny").textContent = "Kérem, adjon meg érvényes számokat!";
    }
}

function szamolTerulet() {
    var alap = parseFloat(document.getElementById("alapInput").value);
    var oldal = parseFloat(document.getElementById("oldalInput").value);
    var terulet = teruletSzamitas(alap, oldal);
    if (!isNaN(terulet)) {
        document.getElementById("eredmeny1").textContent = "Az egyenlő szárú háromszög területe: " + terulet;
    } else {
        document.getElementById("eredmeny1").textContent = "Kérem, adjon meg érvényes számokat!";
    }
}

function teruletSzamitas(a, b) {
    var f = (a + 2 * b) / 2;
    var terulet = Math.sqrt(f * (f - a) * Math.pow((f - b), 2));
    return terulet;
}