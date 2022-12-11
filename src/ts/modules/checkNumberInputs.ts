const checkNumberInputs = (selector) : void => {
    const numberInputs = document.querySelectorAll(selector);

    numberInputs.forEach((numberInput) => {
        numberInput.addEventListener('input', () => {
            numberInput.value = numberInput.value.replace(/\D/, '');
        });
    });
};

export default checkNumberInputs;