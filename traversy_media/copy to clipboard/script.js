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
        // change the button to green to indicate success
        copyButton.style.backgroundColor = '#27C451';
        copyButton.innerHTML = '✓';
        // remove the blue outline on the input field upon button click
        inputField.blur();
       
        // add the hidden pop-up component
        copyText.classList.add("active");

        setTimeout(() => {
            // remove the hidden pop-up component
            copyText.classList.remove("active");
            // change back button changes to original
            copyButton.style.backgroundColor = '#4D90FD';
            copyButton.innerHTML = 'Copy';
        }, 2000);
    });
});