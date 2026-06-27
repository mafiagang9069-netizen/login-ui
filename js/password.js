/**
 * Password Utilities
 * Handles Password visibility toggle and strength meter
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Password Toggle ---
    const toggleBtns = document.querySelectorAll('.password-toggle');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.innerHTML = '<i class="ph ph-eye-slash"></i>';
                } else {
                    input.type = 'password';
                    this.innerHTML = '<i class="ph ph-eye"></i>';
                }
            }
        });
    });
    
    // --- Password Strength Meter ---
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput) {
        const bars = document.querySelectorAll('.strength-bar');
        const text = document.querySelector('.strength-text');
        
        const reqs = {
            length: document.getElementById('req-length'),
            upper: document.getElementById('req-upper'),
            lower: document.getElementById('req-lower'),
            number: document.getElementById('req-number'),
            special: document.getElementById('req-special')
        };
        
        passwordInput.addEventListener('input', (e) => {
            const val = e.target.value;
            let score = 0;
            
            // Check Length
            if (val.length >= 8) { score++; setReq(reqs.length, true); }
            else { setReq(reqs.length, false); }
            
            // Check Uppercase
            if (/[A-Z]/.test(val)) { score++; setReq(reqs.upper, true); }
            else { setReq(reqs.upper, false); }
            
            // Check Lowercase
            if (/[a-z]/.test(val)) { score++; setReq(reqs.lower, true); }
            else { setReq(reqs.lower, false); }
            
            // Check Number
            if (/[0-9]/.test(val)) { score++; setReq(reqs.number, true); }
            else { setReq(reqs.number, false); }
            
            // Check Special
            if (/[^A-Za-z0-9]/.test(val)) { score++; setReq(reqs.special, true); }
            else { setReq(reqs.special, false); }
            
            updateMeter(score, bars, text);
        });
    }
});

function setReq(el, isValid) {
    if(!el) return;
    const icon = el.querySelector('i');
    if (isValid) {
        el.classList.add('valid');
        el.classList.remove('invalid');
        icon.className = 'ph-fill ph-check-circle';
    } else {
        el.classList.add('invalid');
        el.classList.remove('valid');
        icon.className = 'ph ph-circle';
    }
}

function updateMeter(score, bars, text) {
    const colors = ['#E5E7EB', '#EF4444', '#F59E0B', '#EAB308', '#22C55E', '#16A34A'];
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
    
    // Reset bars
    bars.forEach(bar => bar.style.backgroundColor = 'var(--border)');
    
    if(score === 0) {
        if(text) text.textContent = 'Very Weak';
        return;
    }
    
    // Fill bars
    for(let i = 0; i < score; i++) {
        if(bars[i]) bars[i].style.backgroundColor = colors[score];
    }
    
    // Update text
    if(text) {
        text.textContent = labels[score];
        text.style.color = colors[score];
    }
}
