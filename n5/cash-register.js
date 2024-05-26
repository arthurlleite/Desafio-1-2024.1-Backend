function checkCashRegister(price, cash, cid) {
  const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let changeAvailable = [...cid].reverse(); // Reverse clone of cid array
  let changeToGive = [];

  let totalCID = 0;
  for (let [name, amount] of cid) {
    totalCID += amount;
  }
  totalCID = totalCID.toFixed(2);

  if (totalCID < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (totalCID == changeDue) {
    return {status: "CLOSED", change: cid};
  }

  for (let [name, amount] of changeAvailable) {
    let unitValue = currencyUnits[name];
    let amountToReturn = 0;

    while (amount > 0 && changeDue >= unitValue) {
      changeDue -= unitValue;
      amount -= unitValue;
      amountToReturn += unitValue;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (amountToReturn > 0) {
      changeToGive.push([name, amountToReturn]);
    }
  }

  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: changeToGive};
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
