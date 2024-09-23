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

    // add to donation history
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="border rounded-2xl p-8 text-xl font-bold text-[#111111">${newDonateBalance} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    `;
    document.getElementById("history-section").appendChild(div);
  } else {
    alert("Failed to donate money.");
  }
});
