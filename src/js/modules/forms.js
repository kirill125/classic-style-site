import checkNumUnputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll("form"),
        inputs = document.querySelectorAll("input");


    checkNumUnputs("name", "user_phone");


    const message = {
        loading: "Загрузка",
        success: "Спасибо, мы с Вами свяжемся",
        failure: "Что-то пошло не так"
    };

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value = "");
    };

    form.forEach(item => {
        item.addEventListener("submit", (event) => {
            event.preventDefault();
            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            item.appendChild(statusMessage);
            
            const formData = new FormData(item);
            if (item.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }

            }
            console.log(formData);
            

            

            postData("assets/server.php", formData)
                .then(response => {
                    console.log(response);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });

        });
    });

};
export default forms;