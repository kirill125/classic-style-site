import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("id", "width");
    checkNumInputs("id", "height");

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            state[prop] = i === 0 ? "Холодное" : "Тёплое";
                            elem.forEach((box, j) => i === j ? box.checked = true : box.checked = false );
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                        

                }

                console.log(state);

            });
        });
    }
    state.form = 0;
    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("input", windowHeight, "height");
    state.type = "tree";
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");

};

export default changeModalState;