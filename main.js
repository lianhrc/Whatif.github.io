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
        alert("What if ligawan na talaga kita?");
        alert('What if Tayo nalang?' + n);
        alert('What if Hintayin talaga kita? ' + n);
        main.style.display = 'block';
        break;
    }
}