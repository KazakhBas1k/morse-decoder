const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = [];
    for (let i = 0; i < expr.length; i+=10) {
        word.push(expr.slice(i, i + 10));
    }
    let code = [];
    for (let letter of word) {
        let codder = "";
        if (letter == "**********") {
            codder += " "
        }
        for (let i = 0; i < letter.length; i+=2) {
            if (letter.slice(i,i+2) == "10") {
                codder += ".";
            } else if (letter.slice(i,i+2) == "11") {
                codder += "-";
            } 
        }
        code.push(codder)
    }
    let result = ""
    next: for (let letter of code) {
        for (let morse in MORSE_TABLE) {
            if (letter == morse) {
                result += MORSE_TABLE[morse];
                continue next;
            } else if (letter == " ") {
                result += " ";
                continue next;
            }
        }
    }
    return result;
}

module.exports = {
    decode
}