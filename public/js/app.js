const weatherForm = document.querySelector("form");
const searchedAddress = document.querySelector("input");
const messageOne = document.querySelector("#msg1");
const messageTwo = document.querySelector("#msg2");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchedAddress.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch("/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
          messageTwo.textContent = "";
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
