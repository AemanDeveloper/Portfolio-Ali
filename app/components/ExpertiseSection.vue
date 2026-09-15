<script setup lang="ts">
const expertise = [
  {
    number: "01",
    title: "Sales & Business Development",
    description:
      "Building relationships, identifying opportunities and supporting business growth through strategic sales activities.",
    skills: ["Sales Strategy", "Business Development", "Negotiation"],
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Supporting digital campaigns across paid and organic channels to improve reach, engagement and conversion.",
    skills: ["Meta Ads", "Google Ads", "Campaign Planning"],
  },
  {
    number: "03",
    title: "Lead Generation",
    description:
      "Generating, managing and nurturing prospects throughout the customer journey and sales funnel.",
    skills: ["Lead Management", "CRM", "Conversion"],
  },
  {
    number: "04",
    title: "Customer Experience",
    description:
      "Creating positive customer interactions through clear communication, relationship management and service-focused strategies.",
    skills: ["Customer Engagement", "Communication", "Retention"],
  },
  {
    number: "05",
    title: "Content & Social Media",
    description:
      "Creating and coordinating content that supports brand communication, engagement and marketing objectives.",
    skills: ["Content Creation", "Social Media", "Canva"],
  },
  {
    number: "06",
    title: "CRM, Data & Technology",
    description:
      "Using customer data, CRM systems and modern AI-powered tools to improve efficiency and support better decision-making.",
    skills: ["CRM Management", "Data Analysis", "AI Tools"],
  },
];
</script>

<template>
  <section id="expertise" class="expertise-section">
    <div class="container">
      <div class="section-header">
        <div class="section-title">
          <span class="section-label"> Core Expertise </span>

          <h2>
            Skills built around
            <span>growth and connection.</span>
          </h2>
        </div>

        <p class="section-description">
          A multidisciplinary background across sales, customer experience,
          communications and digital marketing allows me to approach business
          challenges from multiple perspectives.
        </p>
      </div>

      <div class="expertise-grid">
        <article
          v-for="item in expertise"
          :key="item.title"
          class="expertise-card"
        >
          <div class="card-header">
            <span class="card-number">
              {{ item.number }}
            </span>

            <span class="card-arrow"> ↗ </span>
          </div>

          <div class="card-content">
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>
          </div>

          <div class="card-skills">
            <span v-for="skill in item.skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: 110px 0;
  background: var(--primary-dark);
  color: white;
}

.section-header {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 64px;
}

.section-label {
  display: block;
  margin-bottom: 16px;

  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: var(--accent);
}

.section-title h2 {
  max-width: 760px;

  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;

  color: white;
}

.section-title h2 span {
  display: block;
  color: var(--accent);
}

.section-description {
  max-width: 500px;

  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.expertise-card {
  position: relative;

  min-height: 360px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.expertise-card:hover {
  transform: translateY(-6px);

  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.18);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-number {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}

.card-arrow {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  font-size: 1.1rem;

  transition: 0.25s ease;
}

.expertise-card:hover .card-arrow {
  background: var(--accent);
  transform: rotate(45deg);
}

.card-content {
  margin-top: 54px;
}

.card-content h3 {
  max-width: 280px;

  font-size: 1.45rem;
  line-height: 1.2;

  color: white;
}

.card-content p {
  margin-top: 16px;

  font-size: 0.94rem;
  line-height: 1.7;

  color: rgba(255, 255, 255, 0.6);
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  margin-top: auto;
  padding-top: 30px;
}

.card-skills span {
  padding: 7px 10px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.07);

  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 1000px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  .section-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 620px) {
  .expertise-section {
    padding: 80px 0;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }

  .expertise-card {
    min-height: 320px;
  }
}
</style>
