const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!!!";
    }

    if (n.length > 0) {
        alert("Hey cutie...");
        alert("Don't worry, it's not a virus.");
        alert("Hmmm..");
        alert("U know what if's?..");
        alert('What if Tayo pala talaga? ' + n);
        alert('What if Hintayin talaga kita? ' + n);
        alert('What if di na talaga ko torpe? ' + n);
        alert('xD, What if lang naman AHAHAH');
        alert('Before this year ends... ' + n);
        alert('I just want to say na...');
        alert("I am lucky to have a crush like you, " + n);
        alert("more kadramahan pa satin! WAHAHHA,  " + n);
        alert("Hmm.. Seryoso na nga! WAHAHAA");
        alert("Timing is everything. if it's meant to happen, it will, at the right time for the right reasons");
        alert("Don’t be hard to yourself, do your best, and live the rest. Take care of yourself as your happiness matter to me");
        
        main.style.display = 'block';
        break;
    }
}