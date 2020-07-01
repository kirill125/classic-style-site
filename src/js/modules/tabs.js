const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const contentArray = document.querySelectorAll(contentSelector);
    const tabArray = document.querySelectorAll(tabSelector);

    function hideTabContent() {
        tabArray.forEach(element => {
            element.classList.remove(activeClass);
        });

        contentArray.forEach(item => {
            item.style.display = "none";
        });
    }

    function showTabContent(item = 0) {
        contentArray[item].style.display = "block";
        tabArray[item].classList.add(activeClass);
    }
    header.addEventListener("click", (event) => {
        if (!event.target || (!event.target.classList.contains(tabSelector.replace(/\./, "")) &&
            !event.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            return;
        }
        // const chosenIndex = event.target.id;
        tabArray.forEach((element, index) => {
            if (element === event.target || element === event.target.parentNode) {
                hideTabContent();
                showTabContent(index);
            }
        });

    });

    hideTabContent();
    showTabContent();
};

export default tabs;