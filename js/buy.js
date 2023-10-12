const lotteryBtn = document.getElementById('lottery_btn');
const numNodeList = document.getElementsByName('buy_num');
const auto_box = document.getElementById('auto_lotto_box_list');


let lotto;
let lottoArr = new Array();

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
            }
        }
    })
})

function removeAllchild(div) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}