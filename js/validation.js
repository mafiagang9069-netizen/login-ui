/**
 * Form Validation Utilities
 * Handles input validation, error states, and toasts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Simple Toast notification system
    window.showToast = function(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `custom-toast ${type}`;
        
        const icon = type === 'success' ? '<i class="ph-fill ph-check-circle" style="color: var(--success); font-size: 1.5rem;"></i>' 
                                        : '<i class="ph-fill ph-warning-circle" style="color: var(--error); font-size: 1.5rem;"></i>';
                                        
        toast.innerHTML = `
            ${icon}
            <div>
                <strong>${type === 'success' ? 'Success' : 'Error'}</strong>
                <p style="margin:0; font-size: 0.9rem; color: var(--text-secondary);">${message}</p>
            </div>
        `;
        
        container.appendChild(toast);
        
        // Remove after 3s
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.5s reverse forwards';
            setTimeout(() => { toast.remove(); }, 500);
        }, 3000);
    };

    // OTP Input Logic
    const otpInputs = document.querySelectorAll('.otp-input');
    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length > 1) {
                    e.target.value = e.target.value.slice(0, 1);
                }
                if (e.target.value !== '') {
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '') {
                    if (index > 0) {
                        otpInputs[index - 1].focus();
                    }
                }
            });
            
            // Paste support
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text').trim().split('');
                for (let i = 0; i < otpInputs.length; i++) {
                    if (pastedData[i]) {
                        otpInputs[i].value = pastedData[i];
                        if (i < otpInputs.length - 1) otpInputs[i + 1].focus();
                    }
                }
            });
        });
    }

});

// Helper for button loading state
window.setButtonLoading = function(btnId, isLoading, originalText = '') {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    if (isLoading) {
        btn.disabled = true;
        btn.dataset.original = btn.innerHTML;
        btn.innerHTML = `<i class="ph ph-spinner ph-spin"></i> Processing...`;
    } else {
        btn.disabled = false;
        btn.innerHTML = btn.dataset.original || originalText;
    }
};
