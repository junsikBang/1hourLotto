const lotto_box = document.getElementsByClassName('lotto_box')[0];
const lotto_nums = document.getElementsByClassName('lotto_num');
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
                m = 59;
                blur.style.display = 'none';
                start();
            }
            min.innerText = m;
        }
        sec.innerText = s--;
    }, 1000);
});

function start() {
    let lotto;
    let lottoArr = new Array();
    for(let i = 0; i < 6; i++) {
        lotto = Math.floor(Math.random() * 45) + 1;

        while(true) {
            if(lottoArr.indexOf(lotto) < 0) {
                lottoArr[i] = lotto;
                break;
            }
            else {
                lotto = Math.floor(Math.random() * 45) + 1;
            }
        }
    }

    lottoArr.sort(function(a, b){
        return a - b;
    });

    for(let i = 0; i < 6; i++) {
        setTimeout(function(){
            lotto_nums[i].innerText = lottoArr[i];
            if(0<lottoArr[i] && lottoArr[i] < 11) {
                lotto_nums[i].style.backgroundColor = "#fac400";
            }
            else if(10<lottoArr[i] && lottoArr[i] < 21) {
                lotto_nums[i].style.backgroundColor = "#69c8f2";
            }
            else if(20<lottoArr[i] && lottoArr[i] < 31) {
                lotto_nums[i].style.backgroundColor = "#ff7272";
            }
            else if(30<lottoArr[i] && lottoArr[i] < 41) {
                lotto_nums[i].style.backgroundColor = "#aaaaaa";
            }
            else if(40<lottoArr[i] && lottoArr[i] < 46) {
                lotto_nums[i].style.backgroundColor = "#b0d840";
            }
        },1000 * (i + 1));
    }

    //보너스 번호
    lotto = Math.floor(Math.random() * 45) + 1;

    while(true) {
       if(lottoArr.indexOf(lotto) < 0) {
            lottoArr[6] = lotto;
            break;
        }
        else {
            lotto = Math.floor(Math.random() * 45) + 1;
        }
    }

    setTimeout(() => {
        lotto_nums[6].innerText = lottoArr[6];
        if(0<lottoArr[6] && lottoArr[6] < 11) {
            lotto_nums[6].style.backgroundColor = "#fac400";
        }
        else if(10<lottoArr[6] && lottoArr[6] < 21) {
            lotto_nums[6].style.backgroundColor = "#69c8f2";
        }
        else if(20<lottoArr[6] && lottoArr[6] < 31) {
            lotto_nums[6].style.backgroundColor = "#ff7272";
        }
        else if(30<lottoArr[6] && lottoArr[6] < 41) {
            lotto_nums[6].style.backgroundColor = "#aaaaaa";
        }
        else if(40<lottoArr[6] && lottoArr[6] < 46) {
            lotto_nums[6].style.backgroundColor = "#b0d840";
        }    
    }, 7000);

    comment.innerText = '!! 추첨 완료 !!';

    setTimeout(function(){
        blur.style.display = 'flex';
        for(let i = 0; i < 7; i++) {
            lotto_nums[i].innerText = '0';
            lotto_nums[i].style.backgroundColor = 'white';
        }
        comment.innerText = "... 추첨 대기중 입니다 ...";
    }, 15000);
}
