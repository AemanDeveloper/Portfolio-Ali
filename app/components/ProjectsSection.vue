<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

<template>
  <section id="work" class="projects-section">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="section-label"> Selected Work </span>

          <h2>
            Turning strategy into
            <span>meaningful outcomes.</span>
          </h2>
        </div>

        <p>
          Selected initiatives across sales, marketing and customer engagement.
          Detailed case studies will be added based on completed campaigns and
          measurable outcomes.
        </p>
      </div>

      <div class="projects-list">
        <NuxtLink
          v-for="(project, index) in projects"
          :key="project.slug"
          v-reveal="{ delay: index * 100 }"
          :to="`/work/${project.slug}`"
          class="project-card"
        >
          <div class="project-number">
            {{ project.number }}
          </div>

          <div class="project-main">
            <div class="project-category">
              {{ project.category }}
            </div>

            <h3>
              {{ project.title }}
            </h3>

            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-meta">
              <div>
                <span>Role</span>
                <strong>{{ project.role }}</strong>
              </div>

              <div>
                <span>Outcome</span>
                <strong>{{ project.result }}</strong>
              </div>
            </div>

            <div class="project-tools">
              <span v-for="tool in project.tools" :key="tool">
                {{ tool }}
              </span>
            </div>
          </div>

          <div class="project-arrow">↗</div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 110px 0;
  background: white;
}

.section-header {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
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
  max-width: 480px;

  font-size: 1rem;
  line-height: 1.8;

  color: var(--text-muted);
}

.projects-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.project-card {
  display: grid;
  grid-template-columns: 90px 1fr 60px;
  gap: 30px;

  color: inherit;
  text-decoration: none;

  padding: 42px 0;

  border-bottom: 1px solid var(--border);

  transition: 0.25s ease;
}

.project-card:hover {
  padding-left: 14px;
  padding-right: 14px;

  background: var(--background);
}

.project-number {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;

  color: var(--accent);
}

.project-category {
  margin-bottom: 10px;

  font-size: 0.78rem;
  font-weight: 700;

  color: var(--text-muted);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-main h3 {
  max-width: 760px;

  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.15;

  color: var(--primary-dark);
}

.project-description {
  max-width: 720px;

  margin-top: 16px;

  line-height: 1.75;

  color: var(--text-muted);
}

.project-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 30px;

  max-width: 700px;

  margin-top: 28px;
}

.project-meta div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-meta span {
  font-size: 0.72rem;
  font-weight: 700;

  color: var(--text-muted);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-meta strong {
  font-size: 0.92rem;
  font-weight: 600;

  color: var(--text);
}

.project-tools {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 26px;
}

.project-tools span {
  padding: 7px 11px;

  border-radius: 999px;

  border: 1px solid var(--border);
  background: var(--background);

  font-size: 0.75rem;

  color: var(--text-muted);
}

.project-arrow {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  justify-self: end;

  border-radius: 50%;

  background: var(--primary);
  color: white;

  font-size: 1.15rem;

  transition: 0.25s ease;
}

.project-card:hover .project-arrow {
  background: var(--accent);
  transform: rotate(45deg);
}

@media (max-width: 850px) {
  .section-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .project-card {
    grid-template-columns: 50px 1fr;
  }

  .project-arrow {
    display: none;
  }
}

@media (max-width: 620px) {
  .projects-section {
    padding: 80px 0;
  }

  .project-card {
    grid-template-columns: 1fr;

    padding: 30px 0;
  }

  .project-number {
    margin-bottom: -10px;
  }

  .project-meta {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
