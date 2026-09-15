<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <a href="#" class="footer-brand"> Syed Ali </a>

        <p>Sales & Communications Manager</p>
      </div>

      <div class="footer-links">
        <a href="#about"> About </a>

        <a href="#experience"> Experience </a>

        <a href="#expertise"> Expertise </a>

        <a href="#work"> Work </a>

        <a href="#contact"> Contact </a>
      </div>

      <p class="copyright">© {{ currentYear }} Syed Ali bin Syed Hashim</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 0;

  background: var(--background);

  border-top: 1px solid var(--border);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto auto;

  align-items: center;

  gap: 40px;
}

.footer-brand {
  font-family: var(--font-heading);

  font-size: 1.2rem;
  font-weight: 800;

  color: var(--primary-dark);
}

.footer-inner > div:first-child p {
  margin-top: 4px;

  font-size: 0.8rem;

  color: var(--text-muted);
}

.footer-links {
  display: flex;

  gap: 22px;
}

.footer-links a {
  font-size: 0.85rem;
  font-weight: 500;

  color: var(--text-muted);

  transition: 0.2s ease;
}

.footer-links a:hover {
  color: var(--accent);
}

.copyright {
  font-size: 0.78rem;

  color: var(--text-muted);
}

@media (max-width: 850px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .footer-links {
    flex-wrap: wrap;
  }
}
</style>
