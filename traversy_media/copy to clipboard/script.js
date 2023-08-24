document.querySelectorAll(".copy-text").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value;
        const copyText = document.querySelector(".copy-text");
        inputField.select();
        navigator.clipboard.writeText(text);
        // add the hidden pop-up component
        copyText.classList.add("active");
        setTimeout(() => {
            copyText.classList.remove("active");
        }, 1800);
    });
});