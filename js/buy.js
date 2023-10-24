const lotteryBtn = document.getElementById('lottery_btn');
const numNodeList = document.getElementsByName('buy_num');
const auto_box = document.getElementById('auto_lotto_box_list');
const auto_pay_box = document.getElementById('auto_payment_box');

const manual_box = document.getElementById('manual_lotto_box_list');
const manual_pay_box = document.getElementById('manual_payment_box');
const manual_nums = document.getElementsByName('manual_num');
const manual_addBtn = document.getElementById('manual_add_btn');
const manual_resetBtn = document.getElementById('manual_reset_btn');
const popup = document.getElementById('popup');
const ok_btn = document.querySelector('.ok_btn');
const close_btn = document.querySelector('.close_btn');
const auto_buy_btn = document.getElementById('auto_buy_btn');
const manual_buy_btn = document.getElementById('manual_buy_btn');
const pay_value = document.getElementById('pay_value');

let lotto;
let lottoArr = new Array();
let auto_payment = 0;
let manual_payment = 0;

let lottery_num_arr = new Array(5);
for(let i = 0; i < lottery_num_arr.length; i++) {
    lottery_num_arr[i] = new Array(6);
}

lotteryBtn.addEventListener('click', () => {
    removeAllchild(auto_box);

    numNodeList.forEach((node) => {
        if(node.checked) {
            for(let i = 0; i < node.value; i++) {
                for(let j = 0; j < 6; j++) {
                    lotto = Math.floor(Math.random() * 45) + 1;
            
                    while(true) {
                        if(lottoArr.indexOf(lotto) < 0) {
                            lottoArr[j] = lotto;
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

                
                for(let k =0; k < 6; k++) {
                    lottery_num_arr[i][k] = lottoArr[k];
                }

                let str = lottery_num_arr[i].join(" ");

                let plusLi = document.createElement('li');
                plusLi.innerHTML = "<li>" + str + "</li>";
                /* plusLi.innerHTML = "<li>" + lottery_num_arr[i][0] + lottery_num_arr[i][1] + lottery_num_arr[i][2] +
                lottery_num_arr[i][3] + lottery_num_arr[i][4] + lottery_num_arr[i][5] + "</li>"; */
                auto_box.prepend(plusLi);

                auto_payment = node.value * 1000;
                auto_pay_box.innerText = "금액 : " + auto_payment + " 원";
                auto_pay_box.style.display = "block"; 
            }
        }
    })
})

function removeAllchild(div) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}

let count = 0;

manual_addBtn.addEventListener('click', () => {
    let manual_num_arr = new Array(6);

    if(count >= 5) {
        alert('한번에 5게임까지 구매가능합니다!');
        text_reset();
        return false;
    }

    for(let i = 0; i < 6; i++) {
        if(manual_nums[i].value === '') {
            alert('값을 모두 입력해주세요!');
            text_reset();
            return false;
        }

        else if(manual_nums[i].value > 45) {
            alert("45이하의 숫자를 입력해주세요!");
            text_reset();
            return false;
        }

        else {
            manual_num_arr[i] = manual_nums[i].value;
        }
    }

    let dupYn = false;
    for(let i = 0; i < manual_num_arr.length; i++) {
      const currElem = manual_num_arr[i];
      
      for(let j = i+1; j < manual_num_arr.length; j++) {
        if(currElem === manual_num_arr[j]) {
          dupYn = true;
          break;
        }
      }
      
      if(dupYn)  {
        alert("중복된 값이 있습니다!");
        text_reset();
        return false;
      }
    }

    count++;

    manual_num_arr.sort(function(a, b){
        return a - b;
    });

    let str = manual_num_arr.join(" ");
    let plusLi = document.createElement('li');
    plusLi.innerHTML = "<li>" + str + "</li>";
    manual_box.prepend(plusLi);

    manual_payment = 1000 * count;
    manual_pay_box.innerText = "금액 : " + manual_payment + " 원";
    manual_pay_box.style.display = "block";
    text_reset();
})

function text_reset() {
    for(let i = 0; i < 6; i++) {
        manual_nums[i].value = "";
    }
}

manual_resetBtn.addEventListener('click', () => {
    for(let i = 0; i < 6; i++) {
        manual_nums[i].value = "";
    }

    removeAllchild(manual_box);
    manual_pay_box.innerText = "";
    manual_pay_box.style.display = "none";
    manual_payment = 0;
})

function openPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}

ok_btn.addEventListener('click', closePopup);
close_btn.addEventListener('click', closePopup);

auto_buy_btn.addEventListener('click', () => {
    pay_value.innerText = auto_payment;
    openPopup();
})

manual_buy_btn.addEventListener('click', () => {
    pay_value.innerText = manual_payment;
    openPopup()
})

