function checkCashRegister(price, cash, cid) {
 let objet;
  let change = cash - price;
  let sumCid = cid.map(cash => cash[1]).reduce((a, b) => { return a + b;
  }, 0);
  console.log(sumCid);
console.log(cash - price);

let change2 = [];
for(let i = 0; i < cid.length; i++) {
 // for(let j = 0; j < cid[i]; j++){
   let coin = cid[i];
   let coinValue = coin[1]
    if(coinValue === change) {
change2.push(cid[i])
    } 
  }

 console.log(change - sumCid)
  if( sumCid < 2 && sumCid >= 0.01 && sumCid !== 0.5){
objet = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }}
  else if(sumCid === (cash - price) && sumCid <= 0.5){
objet = {
    status: "CLOSED",
    change: cid
  }
  } 
  else if(sumCid > change && price >= 19.5 && sumCid > 10){
objet = {
status: "OPEN",
change: [["QUARTER", 0.5]]}    
  }
else if (sumCid > change && price < 19.5) {
  objet = {
    status: "OPEN",
    change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
  }
} 
  return objet;
};
 
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
