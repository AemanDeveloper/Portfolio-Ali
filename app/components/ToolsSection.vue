<script setup lang="ts">
const tools = [
  {
    name: "Canva",
    category: "Content & Design",
  },
  {
    name: "Meta Ads",
    category: "Paid Social",
  },
  {
    name: "Google Ads",
    category: "Paid Search",
  },
  {
    name: "CRM Platforms",
    category: "Sales & Customer Management",
  },
  {
    name: "Data Analysis",
    category: "Insights & Reporting",
  },
  {
    name: "AI-Powered Tools",
    category: "Productivity & Automation",
  },
];
</script>

<template>
  <section class="tools-section">
    <div class="container">
      <div class="tools-header">
        <div>
          <span class="section-label"> Tools & Technology </span>

          <h2>
            Combining creativity with
            <span>modern tools.</span>
          </h2>
        </div>

        <p>
          I use digital platforms, customer data and emerging technologies to
          support marketing, sales and communication activities more
          effectively.
        </p>
      </div>

      <div class="tools-grid">
        <div v-for="(tool, index) in tools" :key="tool.name" class="tool-item">
          <div class="tool-number">
            {{ String(index + 1).padStart(2, "0") }}
          </div>

          <div class="tool-content">
            <h3>
              {{ tool.name }}
            </h3>

            <p>
              {{ tool.category }}
            </p>
          </div>
        </div>
      </div>

      <div class="capabilities">
        <div class="capabilities-intro">
          <span> Professional Capabilities </span>

          <h3>Beyond the tools.</h3>
        </div>

        <div class="capability-list">
          <span>Sales Strategy</span>
          <span>Business Development</span>
          <span>Lead Generation</span>
          <span>Digital Marketing</span>
          <span>Social Media</span>
          <span>Content Creation</span>
          <span>CRM Management</span>
          <span>Customer Experience</span>
          <span>Communication</span>
          <span>Data Analysis</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tools-section {
  padding: 110px 0;
  background: var(--background);
}

.tools-header {
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

.tools-header h2 {
  max-width: 760px;

  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 1.05;

  letter-spacing: -0.04em;

  color: var(--primary-dark);
}

.tools-header h2 span {
  color: var(--accent);
}

.tools-header p {
  max-width: 480px;

  line-height: 1.8;

  color: var(--text-muted);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);

  background: white;
}

.tool-item {
  min-height: 180px;

  padding: 28px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  transition: 0.25s ease;
}

.tool-item:hover {
  background: var(--primary);
}

.tool-number {
  font-size: 0.75rem;
  font-weight: 700;

  color: var(--accent);
}

.tool-content h3 {
  font-family: var(--font-heading);

  font-size: 1.25rem;

  color: var(--primary-dark);

  transition: 0.25s ease;
}

.tool-content p {
  margin-top: 4px;

  font-size: 0.82rem;

  color: var(--text-muted);

  transition: 0.25s ease;
}

.tool-item:hover .tool-content h3 {
  color: white;
}

.tool-item:hover .tool-content p {
  color: rgba(255, 255, 255, 0.65);
}

.capabilities {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;

  gap: 60px;

  margin-top: 70px;
  padding-top: 60px;

  border-top: 1px solid var(--border);
}

.capabilities-intro span {
  font-size: 0.75rem;
  font-weight: 700;

  color: var(--accent);

  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.capabilities-intro h3 {
  margin-top: 12px;

  font-size: 2rem;

  color: var(--primary-dark);
}

.capability-list {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.capability-list span {
  padding: 11px 16px;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: white;

  font-size: 0.85rem;
  font-weight: 500;

  color: var(--text);

  transition: 0.2s ease;
}

.capability-list span:hover {
  background: var(--accent);
  border-color: var(--accent);

  color: white;
}

@media (max-width: 900px) {
  .tools-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .capabilities {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 580px) {
  .tools-section {
    padding: 80px 0;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
