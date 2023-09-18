const lotto_box = document.getElementsByClassName('lotto_box')[0];
let colors = ['red', 'yellow', 'blue', 'white'];
let i = 0;

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let m = 59
let s = 5;

window.addEventListener('DOMContentLoaded', function()
{
    this.setInterval(function(){
        lotto_box.style.borderColor = colors[i++];
        i = i % 4;
    }, 2000);

    this.setInterval(function(){
        if(s < 0) {
            s = 59;
            m--;
            min.innerText = m;
        }
        sec.innerText = s--;
    }, 1000);
});