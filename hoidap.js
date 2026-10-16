const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.faq-icon');
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        });
        if (!isActive) {
          item.classList.add('active');
          const icon = item.querySelector('.faq-icon');
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        }
      });
    });