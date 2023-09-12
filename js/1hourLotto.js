const lotto_box = document.getElementsByClassName('lotto_box')[0];
let colors = ['red', 'yellow', 'blue', 'white'];
let i = 0;

window.addEventListener('DOMContentLoaded', function()
{
    this.setInterval(function(){
        lotto_box.style.borderColor = colors[i++];
        i = i % 4;
    }, 2000);
});