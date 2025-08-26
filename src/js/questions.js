import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.accordion-container')
    .forEach((accordionElement, index) => {
      try {
        const acc = new Accordion(accordionElement, {
          duration: 300,
          showFirst: false,
        });

        if (index === 0) {
          acc.open(0);
        }
      } catch (error) {
        console.error('Accordion initialization error:', error);
      }
    });
});
