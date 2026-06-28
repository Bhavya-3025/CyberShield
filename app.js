const words = [

"Learn Cybersecurity",

"Stay Safe Online",

"Defend Against Hackers",

"Protect Your Privacy"

];

let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(letterIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function counter(id, target, symbol = "") {

    let value = 0;

    const element = document.getElementById(id);

    if (!element) return;

    const interval = setInterval(() => {

        value++;

        element.textContent = value + symbol;

        if (value >= target) {
            clearInterval(interval);
        }

    }, 30);

}

counter("count1", 30, "+");
counter("count2", 8);
counter("count3", 3);
counter("count4", 100, "%");

function erase(){

    if(letterIndex>0){

        typing.textContent = words[wordIndex].substring(0,letterIndex-1);

        letterIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        type();

    }

}

if (typing) {
    type();
}