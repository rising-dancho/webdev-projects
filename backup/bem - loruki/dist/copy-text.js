document.querySelectorAll(".copy-text").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");

    let isClicking = false;

    // Hover styles
    copyButton.addEventListener("mouseover", () => {
        if (!copyButton.classList.contains("focused") && !isClicking) {
            copyButton.style.backgroundColor = "var(--hover-btn)";
        }
    });

    copyButton.addEventListener("mouseout", () => {
        if (!copyButton.classList.contains("focused") && !isClicking) {
            copyButton.style.backgroundColor = "var(--primary-color)";
        }
    });

    // Select the text when input field is clicked
    inputField.addEventListener("focus", () => inputField.select());

    // Trigger this function when copyButton is clicked
    copyButton.addEventListener("click", () => {
        const text = inputField.value;

        if (isClicking) {
            return; // Prevent click event if already in clicking state
        }
    
        isClicking = true;

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
            isClicking = false; // Reset clicking state after processing
        }, 1500);
    });

});