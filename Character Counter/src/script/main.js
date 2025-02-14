let input_text = document.querySelector("#input_text");
let timeRead = 0;

input_text.addEventListener("input", () => {
    let lista = input_text.value.trim();
    convertFrase(lista);
    convertPalavra(lista);
    convertCaracteres(lista);
    countRead(lista)
});

function convertFrase(lista) {
    let frases = lista.split(/[.!?]+/).map(f => f.trim()).filter(f => f !== "");
    let sentence_number = document.querySelector("#sentence_number");
    sentence_number.innerHTML = frases.length;
}

function convertPalavra(lista) {
    let palavras = lista.split(/\s+/).filter(p => p !== "");
    let word_number = document.querySelector("#word_number");
    word_number.innerHTML = palavras.length;
}

function convertCaracteres(lista) {
    let caracteres = lista.replace(/\s/g, "");
    let character_number = document.querySelector("#character_number");
    character_number.innerHTML = caracteres.length;
}


function countRead(lista) {
    let caracteres = lista.replace(/\s/g, "").length;
    count = Math.floor(caracteres / 1184);

    if (caracteres === 0) {
        timeRead = 0
    }
    else if (count < 1) {
        timeRead = `< 1`;
    }
    else {
        timeRead = count;
    }

    let control_main = document.querySelector("#control_main");
    control_main.innerHTML = `<p>Tempo estimado de leitura: <span>${timeRead}</span> minutos</p>`;
}