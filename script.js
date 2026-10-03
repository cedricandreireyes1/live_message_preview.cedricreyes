document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const charCount = document.getElementById('charCount');
    const messagePreview = document.getElementById('messagePreview');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const toggleExplanationBtn = document.getElementById('toggleExplanationBtn');
    const explanationText = document.getElementById('explanationText');
    const createNoteBtn = document.getElementById('createNoteBtn');
    const temporaryNote = document.getElementById('temporaryNote');
    let noteTimer;

    messageInput.addEventListener('input', () => {
        const text = messageInput.value;

        charCount.textContent = `${text.length}/280`;

        if (text.trim() === '') {
            messagePreview.innerHTML = '<em>Your live preview will appear here...</em>';
        } else {
            messagePreview.textContent = text;
        }
    });

    toggleExplanationBtn.addEventListener('click', () => {
        const isExpanded = toggleExplanationBtn.getAttribute('aria-expanded') === 'true';
        explanationText.hidden = isExpanded;
        toggleExplanationBtn.setAttribute('aria-expanded', String(!isExpanded));
        toggleExplanationBtn.textContent = isExpanded ? 'Show Explanation' : 'Hide Explanation';
    });

    createNoteBtn.addEventListener('click', () => {
        window.clearTimeout(noteTimer);
        const noteText = document.createElement('strong');
        noteText.textContent = 'Thanks for using CEDRIC REYES LIVE MESSAGE PREVIEW!';
        temporaryNote.replaceChildren(noteText);
        temporaryNote.hidden = false;
        noteTimer = window.setTimeout(() => {
            temporaryNote.hidden = true;
            temporaryNote.textContent = '';
        }, 5000);
    });

    themeToggleBtn.addEventListener('click', () => {
        const toggleTheme = () => {
            document.body.classList.toggle('dark-mode');
        };

        if (typeof document.startViewTransition === 'function') {
            const buttonBounds = themeToggleBtn.getBoundingClientRect();
            const originX = buttonBounds.left + buttonBounds.width / 2;
            const originY = buttonBounds.top + buttonBounds.height / 2;

            document.documentElement.style.setProperty('--theme-origin-x', `${originX}px`);
            document.documentElement.style.setProperty('--theme-origin-y', `${originY}px`);
            document.startViewTransition(toggleTheme);
        } else {
            toggleTheme();
        }
    });
});