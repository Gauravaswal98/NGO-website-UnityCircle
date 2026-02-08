/**
 * UnityCircle Main UX Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Logic
    const initTheme = () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    };

    // Form Handling Simulation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Processing...";
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = "Success!";
                btn.classList.replace('bg-brand-600', 'bg-harmony');
                form.reset();
            }, 1500);
        });
    });

    initTheme();
});