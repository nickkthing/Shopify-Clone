document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach((btn) => {
    const item = btn.closest('.faq-item');
    const answerId = btn.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    btn.addEventListener('click', function (e) {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        answer.setAttribute('aria-hidden', 'true');
        item.classList.remove('expanded');
        btn.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
        item.classList.add('expanded');
        btn.classList.add('open');
      }
    });
    // Toggle when clicking the full row (but ignore clicks on the button itself)
    const row = item.querySelector('.faq-row');
    if (row) {
      row.addEventListener('click', function (e) {
        if (e.target.closest('.faq-toggle')) return; // let the button handler run
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          btn.setAttribute('aria-expanded', 'false');
          answer.setAttribute('aria-hidden', 'true');
          item.classList.remove('expanded');
          btn.classList.remove('open');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          answer.setAttribute('aria-hidden', 'false');
          item.classList.add('expanded');
          btn.classList.add('open');
        }
      });
    }
  });
});
