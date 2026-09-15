<template>
  <section id="about" class="about-section">
    <div class="container about-grid">
      <div class="about-heading">
        <span class="section-label"> About Me </span>

        <h2>Connecting people, ideas and business.</h2>
      </div>

      <div class="about-content">
        <p class="about-main">
          I’m a marketing and business development professional with experience
          in sales, digital marketing, customer engagement and communications.
        </p>

        <p>
          I enjoy combining creativity, technology and data to solve problems,
          strengthen customer relationships and drive meaningful business
          results.
        </p>

        <div class="about-focus">
          <div>
            <span>01</span>
            <strong>Business Growth</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Customer Experience</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Digital Strategy</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 100px 0;
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
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

.about-heading h2 {
  max-width: 520px;
  font-size: clamp(2.3rem, 5vw, 4.3rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--primary-dark);
}

.about-content {
  max-width: 650px;
}

.about-content p {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.about-main {
  font-size: 1.3rem !important;
  color: var(--text) !important;
  margin-bottom: 22px;
}

.about-focus {
  margin-top: 40px;
  border-top: 1px solid var(--border);
}

.about-focus div {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.about-focus span {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 700;
}

.about-focus strong {
  font-family: var(--font-heading);
  font-size: 1rem;
}

@media (max-width: 850px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
