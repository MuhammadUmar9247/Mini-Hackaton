// Simple accordion toggle
 document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
      
      // Rotate icon
      const icon = header.querySelector('.icon');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });