document.getElementById("donateBtn").addEventListener("click", function () {
  const donateAmount = getInputValueById("donate-amount");

  const donateBalance = getTextFieldValueById("donate-balance");

  // const mainBalance = getTextFieldValueById("main-Balance");

  if (donateAmount > 0 && !isNaN(donateAmount)) {
    const newDonateBalance = donateBalance + donateAmount;

    document.getElementById("donate-balance").innerText = newDonateBalance;

    // if(newDonateBalance){

    //   const newMainBalance = mainBalance - newDonateBalance;

    //   document.getElementById("main-balance").innerText = newMainBalance;
  
    //   console.log(newMainBalance);
    // }

  } else {
    alert("Failed to donate money.");
  }
});
