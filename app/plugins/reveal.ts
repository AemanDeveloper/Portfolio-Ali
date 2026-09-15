export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    mounted(el, binding) {
      const delay = binding.value?.delay || 0;

      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `
        opacity 0.7s ease ${delay}ms,
        transform 0.7s ease ${delay}ms
      `;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry || !entry.isIntersecting) return;

          el.style.opacity = "1";
          el.style.transform = "translateY(0)";

          observer.unobserve(el);
        },
        {
          threshold: 0.15,
        },
      );

      observer.observe(el);
    },
  });
});
