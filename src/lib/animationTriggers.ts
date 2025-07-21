export const triggerAnimation = (sectionId: string) => {
  const target = document.getElementById(sectionId);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-to-animate-left");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (target) {
    observer.observe(target);
  }

  return () => {
    if (target) observer.unobserve(target);
  };
};
export const triggerAnimationRight = (sectionId: string) => {
  const target = document.getElementById(sectionId);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-to-animate-right");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (target) {
    observer.observe(target);
  }

  return () => {
    if (target) observer.unobserve(target);
  };
};
