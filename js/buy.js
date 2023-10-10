const lotteryBtn = document.getElementById('lottery_btn');
const numNodeList = document.getElementsByName('buy_num');

lotteryBtn.addEventListener('click', () => {
    numNodeList.forEach((node) => {
        if(node.checked) {
            console.log(node.value);
        }
    })
})