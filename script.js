//User input
const billInput = 100;
const tip = [.05, .10, .15, .25, .50];
const numPeople = 5;

const tipBtn = document.querySelectorAll("button")
tipBtn.forEach((button) => {
    button.addEventListener('click', ()=>{
        alert("yes");
    });
});

//Tip calculator percentages 5%, 10%, 15%, 25%, 50%
function tip(bill,percentTip,numPeople){
    return (bill*percentTip)/numPeople;
    //test console.log(tip(100,.05,2))//expect 2.5
}
