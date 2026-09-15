<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const isOpen = ref(false);
const activeSection = ref("");

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const closeMenu = () => {
  isOpen.value = false;
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter((section): section is HTMLElement => Boolean(section));

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      const activeEntry = visibleEntries[0];

      if (!activeEntry) return;

      activeSection.value = activeEntry.target.id;
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5],
    },
  );

  sections.forEach((section) => {
    observer?.observe(section);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="#" class="brand" @click="closeMenu"> Nex4 </a>

      <nav class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link"
          :class="{
            active: activeSection === item.id,
          }"
        >
          {{ item.label }}
        </a>
      </nav>

      <a href="#contact" class="nav-cta"> Let's Connect </a>

      <button
        class="menu-toggle"
        :class="{ active: isOpen }"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="isOpen" class="mobile-menu">
        <div class="container mobile-menu-inner">
          <nav>
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              :class="{
                active: activeSection === item.id,
              }"
              @click="closeMenu"
            >
              {{ item.label }}

              <span>↗</span>
            </a>
          </nav>

          <div class="mobile-contact">
            <p>Sales & Communications Manager</p>

            <a href="mailto:syedali.syedhashim@gmail.com" @click="closeMenu">
              syedali.syedhashim@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 14px;
  z-index: 100;

  padding: 0 20px;

  background: transparent;
  border-bottom: none;
}

.navbar-inner {
  position: relative;
  overflow: hidden;

  min-height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding: 0 22px;

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.42);

  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);

  border: 1px solid rgba(255, 255, 255, 0.55);

  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.navbar-inner::before {
  content: "";

  position: absolute;
  inset: 0;

  border-radius: inherit;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.42),
    rgba(255, 255, 255, 0.08)
  );

  pointer-events: none;
}

.brand {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  position: relative;

  padding: 6px 0;

  font-size: 0.92rem;
  font-weight: 500;

  color: var(--text-muted);

  transition: color 0.2s ease;
}

.nav-link::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: 0;

  width: 0;
  height: 2px;

  background: var(--accent);

  transition: width 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-dark);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-cta {
  padding: 11px 18px;

  border-radius: 999px;

  background: var(--primary);
  color: white;

  font-size: 0.88rem;
  font-weight: 600;

  box-shadow: 0 8px 20px rgba(24, 42, 58, 0.16);

  transition: 0.2s ease;
}

.nav-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.menu-toggle {
  position: relative;
  z-index: 102;

  display: none;

  width: 46px;
  height: 46px;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  background: var(--primary);

  cursor: pointer;
}

.menu-toggle span {
  position: absolute;

  width: 18px;
  height: 1.5px;

  background: white;

  transition:
    transform 0.25s ease,
    top 0.25s ease;
}

.menu-toggle span:first-child {
  transform: translateY(-4px);
}

.menu-toggle span:last-child {
  transform: translateY(4px);
}

.menu-toggle.active span:first-child {
  transform: rotate(45deg);
}

.menu-toggle.active span:last-child {
  transform: rotate(-45deg);
}

.mobile-menu {
  position: absolute;

  top: 76px;
  left: 0;

  width: 100%;

  background: var(--primary-dark);

  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu-inner {
  padding-top: 28px;
  padding-bottom: 36px;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
}

.mobile-menu nav a {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 7vw, 2rem);
  font-weight: 600;

  color: rgba(255, 255, 255, 0.65);

  transition: color 0.2s ease;
}

.mobile-menu nav a.active {
  color: white;
}

.mobile-menu nav a.active span {
  color: var(--accent);
}

.mobile-menu nav a span {
  font-size: 1rem;

  color: rgba(255, 255, 255, 0.35);
}

.mobile-contact {
  margin-top: 34px;
}

.mobile-contact p {
  font-size: 0.75rem;

  color: rgba(255, 255, 255, 0.45);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mobile-contact a {
  display: inline-block;

  margin-top: 8px;

  color: white;

  font-size: 0.9rem;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 860px) {
  .nav-links,
  .nav-cta {
    display: none;
  }

  .navbar {
    top: 10px;
    padding: 0 12px;
  }

  .navbar-inner {
    min-height: 70px;
    border-radius: 20px;
    padding: 0 16px;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
