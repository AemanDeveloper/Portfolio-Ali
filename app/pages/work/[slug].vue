<script setup lang="ts">
import { projects } from "~/data/projects";

const route = useRoute();

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
  });
}

useSeoMeta({
  title: () => project.value?.title || "Project",

  description: () => project.value?.description || "",
});

const currentIndex = computed(() =>
  projects.findIndex((item) => item.slug === route.params.slug),
);

const previousProject = computed(() => {
  if (currentIndex.value <= 0) return null;

  return projects[currentIndex.value - 1];
});

const nextProject = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value >= projects.length - 1) {
    return null;
  }

  return projects[currentIndex.value + 1];
});
</script>

<template>
  <div v-if="project">
    <AppNavbar />

    <main>
      <section class="project-hero">
        <div class="container">
          <NuxtLink to="/#work" class="back-link">
            ← Back to selected work
          </NuxtLink>

          <span class="project-category">
            {{ project.category }}
          </span>

          <h1>
            {{ project.title }}
          </h1>

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
        </div>
      </section>

      <section class="case-study">
        <section class="project-navigation">
          <div class="container project-nav-grid">
            <NuxtLink
              v-if="previousProject"
              :to="`/work/${previousProject.slug}`"
              class="project-nav-card"
            >
              <span class="nav-direction"> ← Previous Project </span>

              <strong>
                {{ previousProject.title }}
              </strong>
            </NuxtLink>

            <div v-else class="project-nav-placeholder"></div>

            <NuxtLink
              v-if="nextProject"
              :to="`/work/${nextProject.slug}`"
              class="project-nav-card next"
            >
              <span class="nav-direction"> Next Project → </span>

              <strong>
                {{ nextProject.title }}
              </strong>
            </NuxtLink>
          </div>
        </section>
        <div class="container case-grid">
          <div class="case-heading">
            <span class="section-label"> Case Study </span>

            <h2>From objective to execution.</h2>
          </div>

          <div class="case-content">
            <article>
              <span>01</span>

              <div>
                <h3>Objective</h3>

                <p>
                  {{ project.objective }}
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Strategy</h3>

                <p>
                  {{ project.strategy }}
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Tools & Channels</h3>

                <div class="tools">
                  <span v-for="tool in project.tools" :key="tool">
                    {{ tool }}
                  </span>
                </div>
              </div>
            </article>

            <article>
              <span>04</span>

              <div>
                <h3>Outcome</h3>

                <p>
                  {{ project.result }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.project-hero {
  padding: 100px 0;
  background: var(--background);
}

.back-link {
  display: inline-block;
  margin-bottom: 50px;

  font-size: 0.85rem;
  font-weight: 600;

  color: var(--text-muted);
}

.back-link:hover {
  color: var(--accent);
}

.project-category {
  display: block;

  margin-bottom: 18px;

  font-size: 0.8rem;
  font-weight: 700;

  color: var(--accent);

  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.project-hero h1 {
  max-width: 900px;

  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.98;

  letter-spacing: -0.05em;

  color: var(--primary-dark);
}

.project-description {
  max-width: 720px;

  margin-top: 28px;

  font-size: 1.1rem;
  line-height: 1.8;

  color: var(--text-muted);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;

  gap: 50px;

  margin-top: 40px;
}

.project-meta div {
  display: flex;
  flex-direction: column;

  gap: 5px;
}

.project-meta span {
  font-size: 0.72rem;
  font-weight: 700;

  color: var(--text-muted);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-meta strong {
  color: var(--primary-dark);
}

.project-navigation {
  padding: 70px 0 100px;
  background: var(--background);
}

.project-nav-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.project-nav-card {
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 30px;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: white;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.project-nav-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  background: var(--primary-dark);
}

.project-nav-card:hover strong,
.project-nav-card:hover .nav-direction {
  color: white;
}

.project-nav-card.next {
  text-align: right;
  align-items: flex-end;
}

.nav-direction {
  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: var(--accent);
}

.project-nav-card strong {
  max-width: 340px;

  font-family: var(--font-heading);

  font-size: 1.3rem;
  line-height: 1.3;

  color: var(--primary-dark);
}

.project-nav-placeholder {
  min-height: 1px;
}

@media (max-width: 700px) {
  .project-nav-grid {
    grid-template-columns: 1fr;
  }

  .project-nav-card.next {
    text-align: left;
    align-items: flex-start;
  }

  .project-nav-placeholder {
    display: none;
  }
}

.case-study {
  padding: 100px 0;

  background: white;
}

.case-grid {
  display: grid;

  grid-template-columns: 0.8fr 1.2fr;

  gap: 80px;
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

.case-heading h2 {
  max-width: 420px;

  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.05;

  color: var(--primary-dark);
}

.case-content article {
  display: grid;

  grid-template-columns: 45px 1fr;

  gap: 20px;

  padding: 30px 0;

  border-bottom: 1px solid var(--border);
}

.case-content article:first-child {
  border-top: 1px solid var(--border);
}

.case-content article > span {
  font-size: 0.8rem;
  font-weight: 700;

  color: var(--accent);
}

.case-content h3 {
  margin-bottom: 10px;

  font-size: 1.3rem;

  color: var(--primary-dark);
}

.case-content p {
  color: var(--text-muted);

  line-height: 1.8;
}

.tools {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
}

.tools span {
  padding: 8px 12px;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: var(--background);

  font-size: 0.78rem;

  color: var(--text-muted);
}

@media (max-width: 800px) {
  .project-hero {
    padding: 70px 0;
  }

  .case-grid {
    grid-template-columns: 1fr;

    gap: 40px;
  }
}
</style>
