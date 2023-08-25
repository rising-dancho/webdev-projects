document.querySelectorAll(".copy-text").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");


    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value;
        const copyText = document.querySelector(".copy-text");
        const copyButton = copyLinkParent.querySelector(".copy-link-button");

        //  select the input field and copy contents to clipboard
        // inputField.select();
        navigator.clipboard.writeText(text);

        // Change the focus outline color when button is clicked
        inputField.classList.add("focused");

        // change the button to green to indicate success
        copyButton.style.backgroundColor = '#27C451';
        copyButton.innerHTML = '✓';

        // remove the blue outline on the input field upon button click
        inputField.blur();

        // add the hidden pop-up component
        copyText.classList.add("active");
        // put the input field into focus 
        inputField.focus();
        // unselects the text in the textfield
        window.getSelection().removeAllRanges();

        setTimeout(() => {
            const inputField = copyLinkParent.querySelector(".copy-link-input");
            // remove the blue outline on the input field upon button click
            inputField.blur();
            // revert the color change of button to original
            copyButton.style.backgroundColor = '#4D90FD';
            copyButton.innerHTML = 'Copy';
            // remove the hidden pop-up component
            copyText.classList.remove("active");
        }, 1500);
    });
});

inputField.value = "Copied!";
setTimeout(() => (inputField.value = text), 2000);