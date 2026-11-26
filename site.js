'use strict';

document.documentElement.classList.add('js');

// A hairline under the navigation once the page moves.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 4);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Sections fade in once as they arrive.
const fades = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('in'); fades.unobserve(entry.target); }
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.fade').forEach(el => fades.observe(el));

// Notes that show their work: choosing a note lights up the line of the lecture it came from.
const proof = document.querySelector('[data-proof]');
if (proof) {
  const notes = [...proof.querySelectorAll('button[data-line]')];
  for (const note of notes) {
    note.addEventListener('click', () => {
      for (const other of notes) other.setAttribute('aria-pressed', String(other === note));
      for (const line of proof.querySelectorAll('.proof-transcript li')) line.classList.toggle('lit', line.id === note.dataset.line);
    });
  }
}
