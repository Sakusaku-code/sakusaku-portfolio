
function openSlide() { document.getElementById('slideUp').classList.add('active'); }
function closeSlide() { document.getElementById('slideUp').classList.remove('active'); }
setTimeout(function () { document.getElementById('slideUp').classList.add('active'); }, 5000);
function switchTab(el, tab) {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}
const observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(function (el) { observer.observe(el); });
