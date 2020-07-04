import checkValidation from "./checkValidation";

const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows =document.querySelectorAll("[data-modal]");
        trigger.forEach(triggerItem => {
            triggerItem.addEventListener("click", (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                if (checkValidation(triggerSelector, state)) {
                    windows.forEach(item => item.style.display = "none");
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                    // document.body.classList.add("modal-open");
                } else {
                    alert("Not enough data");
                    
                }
            });


        });
        close.addEventListener("click", () => {
            windows.forEach(item => item.style.display = "none");
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove("modal-open");
        });
        modal.addEventListener("click", (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(item => item.style.display = "none");
                modal.style.display = "none";
                document.body.overflow = "";
                // document.body.classList.remove("modal-open");
            }

        });
    }

    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);
        setTimeout(() => {
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    showModalByTime(".popup", 60000);
};
export default modals;