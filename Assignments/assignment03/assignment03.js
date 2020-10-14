let elem = [];
let lines = document.getElementsByTagName("tr");

for (let i = 1; i < lines.length - 1; i++) {
    elem[i] = document.getElementById(i);
    elem[i].children[4].children[0].onclick = function() {
        add(elem[i]);
    };
    elem[i].children[4].children[1].onclick = function() {
        subtract(elem[i]);
    };
    elem[i].children[4].children[2].onclick = function() {
        clear(elem[i]);
    }
}

function next(elem) {
    let score = elem.children[2].innerHTML;
    score = Number.parseInt(score);
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    elem.children[3].innerHTML = score - par;
}

function subtract(elem) {
    if (elem.children[2].innerHTML == "-") {
        elem.children[2].innerHTML == "-";
    } 
	else {
        let score = elem.children[2].innerHTML;
        score = Number.parseInt(score);
        elem.children[2].innerHTML = score - 1;
        next(elem);
    }
    total();
}

function add(elem) {
    if (elem.children[2].innerHTML == "-") {
        elem.children[2].innerHTML = "1";
        next(elem);
    } 
	else {
        let score = elem.children[2].innerHTML;
        score = Number.parseInt(score);
        elem.children[2].innerHTML = score + 1;
        next(elem);
    }
    total();
}

function total() {
    let parTotal = 0;
    let scoreTotal = 0;
    let overTotal = 0;
    for (let i = 1; i < lines.length - 1; i++) {
        let par = elem[i].children[1].innerHTML;
        let score = elem[i].children[2].innerHTML;
        let over = elem[i].children[3].innerHTML;
        if (isNaN(score)) {
            parTotal += 0;
            scoreTotal += 0;
            overTotal += 0;
        } else {
            parTotal += parseInt(par);
            scoreTotal += parseInt(score);
            overTotal += parseInt(over);
        }
    }
    if (scoreTotal == 0&& overTotal == 0&& parTotal == 0) {
        lines[19].children[1].innerText = "-";
        lines[19].children[2].innerText = "-";
        lines[19].children[3].innerText = "-";
    } else {
        lines[19].children[1].innerText = parTotal;
        lines[19].children[2].innerText = scoreTotal;
        lines[19].children[3].innerText = overTotal;
    }
}

function clear(elem) {
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
    total(elem);
}
