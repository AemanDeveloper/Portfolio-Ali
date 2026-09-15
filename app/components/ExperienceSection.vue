<script setup lang="ts">
const experiences = [
  {
    year: "2025 — Present",
    role: "Sales & Communications Manager",
    company: "Sri Bintang Education",
    description:
      "Leading sales and communications initiatives while supporting customer engagement, business growth and digital marketing activities.",
    tags: [
      "Sales Strategy",
      "Communications",
      "Business Development",
      "Customer Engagement",
    ],
  },
  {
    year: "2022 — 2025",
    role: "Sales Executive",
    company: "Sri Bintang Education",
    description:
      "Managed sales activities, customer enquiries and lead engagement while supporting marketing initiatives and conversion efforts.",
    tags: ["Sales", "Lead Generation", "CRM", "Customer Relations"],
  },
  {
    year: "2021 — 2022",
    role: "Assistant Manager, Customer Service",
    company: "Startek Aegis BPO",
    description:
      "Supported customer service operations, team coordination and customer experience management in a fast-paced service environment.",
    tags: [
      "Customer Experience",
      "Team Coordination",
      "Operations",
      "Communication",
    ],
  },
  {
    year: "2016 — 2021",
    role: "Human Resource Executive",
    company: "Allure Avenue",
    description:
      "Handled human resource functions and employee-related matters while supporting internal communication and daily operations.",
    tags: [
      "Human Resources",
      "People Management",
      "Administration",
      "Internal Communication",
    ],
  },
];
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="section-label"> Career Journey </span>

          <h2>
            Experience shaped across
            <span>people, sales and growth.</span>
          </h2>
        </div>

        <p>
          My career has evolved from people operations and customer service into
          sales, business development and strategic communications.
        </p>
      </div>

      <div class="timeline">
        <article
          v-for="(experience, index) in experiences"
          :key="experience.role"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <span>
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </div>

          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-year">
                {{ experience.year }}
              </span>

              <span v-if="index === 0" class="current-badge"> Current </span>
            </div>

            <h3>
              {{ experience.role }}
            </h3>

            <p class="company">
              {{ experience.company }}
            </p>

            <p class="description">
              {{ experience.description }}
            </p>

            <div class="tags">
              <span v-for="tag in experience.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 110px 0;
  background: var(--background);
}

.section-header {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 70px;
}

.section-label {
  display: block;
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.section-header h2 {
  max-width: 760px;
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--primary-dark);
}

.section-header h2 span {
  color: var(--accent);
}

.section-header p {
  max-width: 460px;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 31px;
  width: 1px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 28px;
  padding-bottom: 30px;
}

.timeline-marker {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.timeline-marker span {
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: var(--font-heading);
  box-shadow: 0 10px 30px rgba(36, 59, 83, 0.12);
}

.timeline-content {
  padding: 34px 38px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: white;
  transition: 0.25s ease;
}

.timeline-content:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(36, 59, 83, 0.08);
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.timeline-year {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 700;
}

.current-badge {
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
}

.timeline-content h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--primary-dark);
  line-height: 1.2;
}

.company {
  margin-top: 7px;
  color: var(--primary);
  font-weight: 600;
}

.description {
  max-width: 760px;
  margin-top: 18px;
  color: var(--text-muted);
  line-height: 1.75;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 24px;
}

.tags span {
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--background);
  border: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 850px) {
  .section-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .timeline::before {
    left: 22px;
  }

  .timeline-item {
    grid-template-columns: 46px 1fr;
    gap: 18px;
  }

  .timeline-marker span {
    width: 44px;
    height: 44px;
  }

  .timeline-content {
    padding: 26px;
  }
}

@media (max-width: 560px) {
  .experience-section {
    padding: 80px 0;
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-marker {
    display: none;
  }

  .timeline-content {
    padding: 22px;
  }
}
</style>
