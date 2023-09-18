const lotto_box = document.getElementsByClassName('lotto_box')[0];
const blur = document.getElementsByClassName('blur_box')[0];
const comment = document.getElementsByClassName('comment')[0];
let colors = ['red', 'yellow', 'blue', 'white'];
let i = 0;

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let today = new Date();
let current_min = today.getMinutes();
let currnet_sec = today.getSeconds();

let m = 59 - current_min;
let s = 59 - currnet_sec;

window.addEventListener('DOMContentLoaded', function()
{
    this.setInterval(function(){
        lotto_box.style.borderColor = colors[i++];
        i = i % 4;
        comment.classList.toggle('dis_none');
    }, 2000);

    min.innerText = m;

    this.setInterval(function(){
        if(s < 0) {
            s = 59;
            m--;
            if(m < 0) {
                m = 59 - current_min;
                blur.style.display = 'none';
            }
            min.innerText = m;
        }
        sec.innerText = s--;
    }, 1000);
});
