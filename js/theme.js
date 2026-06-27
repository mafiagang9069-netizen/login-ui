/**
 * Theme Management Module
 * Handles Light/Dark mode and 5 Color Themes (sakura, minimal, rosegold, lavender, midnightpink)
 */

document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const themeBtns = document.querySelectorAll('.theme-btn');
    const modeToggleBtn = document.getElementById('mode-toggle');
    
    // Load from LocalStorage
    const savedTheme = localStorage.getItem('auth-ui-theme') || 'sakura';
    const savedMode = localStorage.getItem('auth-ui-mode') || 'light';
    
    // Apply saved settings
    htmlEl.setAttribute('data-theme', savedTheme);
    htmlEl.setAttribute('data-bs-theme', savedMode);
    
    // Update UI state for Theme Buttons
    themeBtns.forEach(btn => {
        if (btn.getAttribute('data-set-theme') === savedTheme) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', (e) => {
            const theme = e.target.getAttribute('data-set-theme');
            
            // Remove active from all
            themeBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            
            // Set theme
            htmlEl.setAttribute('data-theme', theme);
            localStorage.setItem('auth-ui-theme', theme);
            
            // Add a small click animation to the app for feedback
            document.body.style.opacity = 0.8;
            setTimeout(() => { document.body.style.opacity = 1; }, 150);
        });
    });
    
    // Update UI state for Mode Toggle
    if (modeToggleBtn) {
        updateModeIcon(savedMode, modeToggleBtn);
        
        modeToggleBtn.addEventListener('click', () => {
            const currentMode = htmlEl.getAttribute('data-bs-theme');
            const newMode = currentMode === 'dark' ? 'light' : 'dark';
            
            htmlEl.setAttribute('data-bs-theme', newMode);
            localStorage.setItem('auth-ui-mode', newMode);
            updateModeIcon(newMode, modeToggleBtn);
        });
    }
});

function updateModeIcon(mode, btn) {
    if (mode === 'dark') {
        btn.innerHTML = '<i class="ph ph-sun"></i>';
    } else {
        btn.innerHTML = '<i class="ph ph-moon"></i>';
    }
}
