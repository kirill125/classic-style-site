const checkNumInputs = (inputAttr, value) => {
    const inputs = document.querySelectorAll(`input[${inputAttr}=${value}]`);

    inputs.forEach(item =>{
        item.addEventListener("input", () => {
            item.value = item.value.replace(/\D/, "");
        });
    });
};

export default checkNumInputs;