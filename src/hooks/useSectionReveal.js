import { useEffect, useRef } from 'react';

function animateSkillBars(container) {
  container.querySelectorAll('.skill-bar-fill').forEach((bar) => {
    const w = bar.getAttribute('data-width');
    if (w) bar.style.width = `${w}%`;
  });
}

export function useSectionReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateSkillBars(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    root.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    root.querySelectorAll('.skill-category').forEach((el) => skillObserver.observe(el));

    return () => {
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return ref;
}
