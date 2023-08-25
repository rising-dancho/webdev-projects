document.querySelectorAll(".copy-text").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value;
        const copyText = document.querySelector(".copy-text");
        const copyButton = copyLinkParent.querySelector(".copy-link-button");


        inputField.select();
        navigator.clipboard.writeText(text);
        copyButton.style.backgroundColor = '#27C451';
        copyButton.innerHTML = '✓';
       
        // add the hidden pop-up component
        copyText.classList.add("active");
        setTimeout(() => {
            copyText.classList.remove("active");
            copyButton.style.backgroundColor = '#4D90FD';
            copyButton.innerHTML = 'Copy';
        }, 1800);
    });
});