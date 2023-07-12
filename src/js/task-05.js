const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim();

    if (inputValue === "") {
        nameOutput.textContent = "Anonumous";
    } else {
        nameOutput.textContent = inputValue;
    }
});

