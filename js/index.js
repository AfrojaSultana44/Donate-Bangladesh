function donateHandler(id) {
  let mainBalance = document.getElementById(`main-balance`).innerText;
  let donateBalance = document.getElementById(`${id}-donate-balance`).innerText;
  let donateAmount = document.getElementById(`${id}-donate-amount`).value;

  let mainBalanceToNumber = Number(mainBalance);
  let donateBalanceToNumber = Number(donateBalance);
  let donateAmountToNumber = Number(donateAmount);

  if (
    !isNaN(donateAmountToNumber) &&
    donateAmountToNumber > 0 &&
    mainBalanceToNumber >= donateAmountToNumber
  ) {
    donateBalance = donateBalanceToNumber + donateAmountToNumber;

    mainBalance = mainBalance - donateAmountToNumber;

    document.getElementById(`${id}-donate-balance`).innerText = donateBalance;

    document.getElementById(`main-balance`).innerText = mainBalance;

    document.getElementById(`${id}-donate-amount`).value = "";

    const div = document.createElement("div");
    let historyMessage = "";

    if (id === "card-one") {
      historyMessage = `
      <div class="border rounded-2xl p-8 ">
      <p class="font-bold text-xl text-[#111111]">${donateAmountToNumber} Taka is Donated for Flood at Noakhali, Bangladesh</p>
      <p class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-1">${new Date()}</p>
      </div>
      `;
    } else if (id === "card-two") {
      historyMessage = `
      <div class="border rounded-2xl p-8 ">
      <p class="font-bold text-xl text-[#111111]">${donateAmountToNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
      <p class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-1">${new Date()}</p>
      </div>
      `;
    } else {
      historyMessage = `
    <div class="border rounded-2xl p-8 ">
    <p class="font-bold text-xl text-[#111111]">${donateAmountToNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-1">${new Date()}</p>
    </div>
    `;
    }

    div.innerHTML = historyMessage;

    document.getElementById("history-section").appendChild(div);

    document.getElementById("donation-success-modal").showModal();
  } else {
    alert(
      "Invalid data or you have insufficient amount to donate. Please provide valid data"
    );
  }
}

document
  .getElementById("card-one-donate-btn")
  .addEventListener("click", function () {
    donateHandler("card-one");
  });

document
  .getElementById("card-two-donate-btn")
  .addEventListener("click", function () {
    donateHandler("card-two");
  });

document
  .getElementById("card-three-donate-btn")
  .addEventListener("click", function () {
    donateHandler("card-three");
  });

function showSection(id) {
  // hide all the section
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  // show the section with provided id
  document.getElementById(id).classList.remove("hidden");
}

const donationBtn = document.getElementById("donation-btn");

const historyBtn = document.getElementById("history-btn");

document.getElementById("donation-btn").addEventListener("click", function () {
  showSection("card-section");
  donationBtn.style.cssText =
    "background-color: #B4F461; color: #111111; font-weight: 600;";
  historyBtn.style.cssText =
    "background-color: #ffffff; color: rgba(17, 17, 17, 0.7); font-weight: 500;";
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSection("history-section");
  historyBtn.style.cssText =
    "background-color: #B4F461; color: #111111; font-weight: 600;";
  donationBtn.style.cssText =
    "background-color: #ffffff; color: rgba(17, 17, 17, 0.7);  font-weight: 500;";
});
