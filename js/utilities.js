function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getTextFieldValueById(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

function showSection(id) {
  // hide all the section
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  // show the section with provided id
  document.getElementById(id).classList.remove("hidden");
}

function showModal(id){
  
}
