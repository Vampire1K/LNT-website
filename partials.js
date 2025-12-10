// Load header and footer partials into pages
async function loadPartial(id, path) {
    const container = document.getElementById(id);
    if (!container) return;
    try {
        const res = await fetch(path);
        if (!res.ok) { container.innerHTML = ''; return; }
        const text = await res.text();
        container.innerHTML = text;
    } catch (e) {
        console.error('Failed to load partial', path, e);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadPartial('site-header', 'partials/header.html');
    await loadPartial('site-footer', 'partials/footer.html');

    // mobile nav toggle
    const toggle = document.getElementById('navToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('open');
        });
    }
});
