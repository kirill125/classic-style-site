const checkValidation = (selector, state) => {
    switch(selector) {
        case ".popup_calc_button":            
            return state.form != null && state.width && state.width != "0" && state.height && state.height != "0" ? true : false;
        case ".popup_calc_profile_button":
            return state.profile ? true : false;
        default:
            return true;
            
    }
};

export default checkValidation;