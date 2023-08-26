document.querySelectorAll(".copy-text").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");

    // Select the text when input field is clicked
    inputField.addEventListener("focus", () => inputField.select());

    // Trigger this function when copyButton is clicked
    copyButton.addEventListener("click", () => {
        const text = inputField.value;

        // Copy text to clipboard
        navigator.clipboard.writeText(text);

        // Change button appearance
        inputField.classList.add("focused");
        copyButton.style.backgroundColor = 'var(--success-color)';
        copyButton.innerHTML = '✓';
        inputField.blur();

        // Show "Copied!" message
        copyLinkParent.classList.add("active");
        inputField.focus();
        window.getSelection().removeAllRanges();

        // Reset button appearance and remove message after delay
        setTimeout(() => {
            inputField.blur();
            copyButton.style.backgroundColor = 'var(--primary-color)';
            copyButton.innerHTML = 'Copy';
            copyLinkParent.classList.remove("active");
        }, 1500);
    });

});