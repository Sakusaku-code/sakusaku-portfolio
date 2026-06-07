
function openModal() { document.getElementById('modalOverlay').classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal() { document.getElementById('modalOverlay').classList.remove('active'); document.body.style.overflow = ''; }
document.getElementById('modalOverlay').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
function closeSlide() { document.getElementById('slideUp').classList.remove('active'); }
setTimeout(function () { document.getElementById('slideUp').classList.add('active'); }, 5000);
const observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(function (el) { observer.observe(el); });
