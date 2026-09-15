<script setup lang="ts">
import { onMounted, ref } from "vue";

const years = ref(0);
const roles = ref(0);
const functions = ref(0);

const animateCounter = (
  target: number,
  setter: (value: number) => void,
  duration = 1200,
) => {
  const startTime = performance.now();

  const update = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    const value = Math.floor(progress * target);

    setter(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      setter(target);
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  animateCounter(10, (value) => {
    years.value = value;
  });

  animateCounter(
    4,
    (value) => {
      roles.value = value;
    },
    900,
  );

  animateCounter(
    3,
    (value) => {
      functions.value = value;
    },
    1000,
  );
});
</script>

<template>
  <section class="hero">
    <div class="hero-grid-background"></div>

    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">Sales · Marketing · Communications</div>

        <h1 class="hero-title">
          Syed Ali
          <span>Syed Hashim</span>
        </h1>

        <p class="hero-role">Sales & Communications Manager</p>

        <p class="hero-description">
          I combine sales, marketing, communications and technology to build
          stronger customer relationships and drive meaningful business growth.
        </p>

        <div class="hero-actions">
          <a href="#experience" class="btn-primary"> Explore My Experience </a>

          <a href="#contact" class="btn-secondary"> Let's Connect </a>
        </div>

        <div class="hero-highlights">
          <div class="highlight-item">
            <strong>{{ years }}+</strong>
            <span>Years of Experience</span>
          </div>

          <div class="highlight-item">
            <strong>{{ roles }}</strong>
            <span>Career Roles</span>
          </div>

          <div class="highlight-item">
            <strong>{{ functions }}+</strong>
            <span>Business Functions</span>
          </div>
        </div>
      </div>

      <div v-reveal="{ delay: 250 }" class="hero-visual">
        <div class="portrait-wrapper">
          <div class="portrait-background"></div>

          <img
            src="/images/profile/syed-ali.jpg"
            alt="Syed Ali bin Syed Hashim"
            class="portrait-image"
          />

          <div class="floating-card role-card">
            <span>Current Role</span>

            <strong> Sales & Communications Manager </strong>

            <p>Sri Bintang Education</p>
          </div>

          <div class="floating-card experience-card">
            <strong>10+</strong>

            <span> Years of Professional Experience </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;

  padding: 145px 0 90px;
  overflow: hidden;
}

.hero-grid-background {
  position: absolute;

  inset: 0;

  z-index: -1;

  pointer-events: none;

  background-image:
    linear-gradient(to right, rgba(138, 61, 27, 0.18) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(138, 61, 27, 0.18) 1px, transparent 1px);

  background-size: 24px 32px;

  -webkit-mask-image: radial-gradient(
    ellipse 80% 70% at 50% 0%,
    #000 35%,
    transparent 100%
  );

  mask-image: radial-gradient(
    ellipse 80% 70% at 50% 0%,
    #000 35%,
    transparent 100%
  );
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 70px;
}

.hero-badge {
  display: inline-flex;
  padding: 9px 15px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-title {
  max-width: 760px;
  font-size: clamp(3rem, 7vw, 5.7rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: var(--primary-dark);
}

.hero-title span {
  display: block;
  color: var(--accent);
}

.hero-role {
  margin-top: 24px;
  font-family: var(--font-heading);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--primary);
}

.hero-description {
  max-width: 650px;
  margin-top: 20px;
  font-size: 1.08rem;
  color: var(--text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.btn-primary,
.btn-secondary {
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: var(--primary-dark);
}

.btn-secondary {
  border: 1px solid var(--border);
  background: white;
  color: var(--primary);
}

.btn-secondary:hover {
  border-color: var(--primary);
}

.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 44px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
}

.highlight-item strong {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  color: var(--primary-dark);
  min-width: 50px;
  font-variant-numeric: tabular-nums;
}

.highlight-item span {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-wrapper {
  position: relative;

  width: 100%;
  max-width: 460px;

  min-height: 560px;
}

.portrait-background {
  position: absolute;

  inset: 30px 20px 0 20px;

  border-radius: 34px;

  background: linear-gradient(145deg, var(--primary), var(--primary-dark));

  overflow: hidden;
}

.portrait-background::before {
  content: "";

  position: absolute;

  width: 260px;
  height: 260px;

  top: -100px;
  right: -100px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);
}

.portrait-background::after {
  content: "";

  position: absolute;

  width: 200px;
  height: 200px;

  bottom: -80px;
  left: -70px;

  border-radius: 50%;

  background: rgba(196, 106, 71, 0.35);

  filter: blur(12px);
}

.portrait-image {
  position: absolute;

  width: calc(100% - 40px);
  height: calc(100% - 30px);

  left: 20px;
  bottom: 0;

  object-fit: cover;
  object-position: center 22%;

  border-radius: 32px;

  z-index: 2;

  transform: scale(1.12);
  transform-origin: center top;
}
@keyframes floatRole {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(-0.5deg);
  }
}

@keyframes floatExperience {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(8px) rotate(0.7deg);
  }
}
.floating-card {
  position: absolute;

  z-index: 3;

  padding: 16px 18px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.94);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border: 1px solid rgba(255, 255, 255, 0.4);

  box-shadow: 0 18px 40px rgba(24, 42, 58, 0.15);
}

.role-card {
  width: 235px;

  left: -30px;
  bottom: 32px;

  animation: floatRole 5s ease-in-out infinite;
}

.role-card span {
  display: block;

  margin-bottom: 6px;

  font-size: 0.68rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: var(--accent);
}

.role-card strong {
  display: block;

  font-family: var(--font-heading);

  line-height: 1.3;

  color: var(--primary-dark);
}

.role-card p {
  margin-top: 5px;

  font-size: 0.78rem;

  color: var(--text-muted);
}

.experience-card {
  width: 150px;

  top: 0;
  right: -10px;

  animation: floatExperience 6s ease-in-out infinite;
}

.experience-card strong {
  display: block;

  font-family: var(--font-heading);

  font-size: 2rem;

  line-height: 1;

  color: var(--accent);
}

.experience-card span {
  display: block;

  margin-top: 6px;

  font-size: 0.72rem;
  line-height: 1.4;

  color: var(--text-muted);
}

@media (max-width: 900px) {
  .portrait-wrapper {
    max-width: 420px;

    min-height: 500px;
  }

  .role-card {
    left: -10px;
  }

  .experience-card {
    right: -5px;
  }
}

@media (max-width: 520px) {
  .portrait-wrapper {
    min-height: 500px;
  }

  .portrait-background {
    inset: 20px 0 0;
    border-radius: 28px;
  }

  .portrait-image {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;

    object-fit: cover;
    object-position: 50% 35%;

    border-radius: 28px;
  }

  .role-card {
    width: 180px;

    left: 12px;
    bottom: 14px;

    padding: 14px 16px;
  }

  .role-card strong {
    font-size: 1rem;
  }

  .role-card p {
    font-size: 0.75rem;
  }

  .experience-card {
    width: 135px;

    top: 0;
    right: 10px;

    padding: 14px 16px;
  }

  .experience-card strong {
    font-size: 1.7rem;
  }

  .experience-card span {
    font-size: 0.68rem;
  }
}

.visual-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 42px;
  border-radius: 30px;
  background: linear-gradient(145deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 30px 70px rgba(36, 59, 83, 0.18);
}

.visual-label {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.8rem;
  margin-bottom: 22px;
}

.visual-card h3 {
  font-size: 2rem;
  line-height: 1.15;
}

.visual-card p {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.visual-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.visual-tags span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 80px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .role-card {
    animation: floatRoleMobile 5s ease-in-out infinite;
  }

  .experience-card {
    animation: floatExperienceMobile 6s ease-in-out infinite;
  }
}

@keyframes floatRoleMobile {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes floatExperienceMobile {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}
</style>
