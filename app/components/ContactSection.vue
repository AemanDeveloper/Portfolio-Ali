<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-card">
        <div class="contact-content">
          <span class="section-label"> Let’s Connect </span>

          <h2>
            Have an opportunity,
            <span>idea or collaboration?</span>
          </h2>

          <p>
            I’m always open to meaningful conversations around sales, marketing,
            communications and business growth.
          </p>

          <div class="contact-actions">
            <a href="mailto:syedali.syedhashim@gmail.com" class="primary-link">
              Email Me
            </a>

            <a
              href="https://wa.me/60123418808"
              target="_blank"
              rel="noopener noreferrer"
              class="secondary-link"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div class="contact-info">
          <div class="info-item">
            <span>Email</span>

            <a href="mailto:syedali.syedhashim@gmail.com">
              syedali.syedhashim@gmail.com
            </a>
          </div>

          <div class="info-item">
            <span>WhatsApp</span>

            <a
              href="https://wa.me/60123418808"
              target="_blank"
              rel="noopener noreferrer"
            >
              +60 12-341 8808
            </a>
          </div>

          <div class="info-item">
            <span>LinkedIn</span>

            <a
              href="https://linkedin.com/in/syedalisyedhashim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/syedalisyedhashim
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 110px 0;
  background: white;
}

.contact-card {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 70px;

  padding: 70px;

  border-radius: 32px;

  background: var(--primary-dark);
  color: white;
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

.contact-content h2 {
  max-width: 700px;

  font-size: clamp(2.6rem, 5vw, 4.8rem);
  line-height: 1.02;

  letter-spacing: -0.04em;
}

.contact-content h2 span {
  display: block;
  color: var(--accent);
}

.contact-content p {
  max-width: 620px;

  margin-top: 24px;

  color: rgba(255, 255, 255, 0.66);

  line-height: 1.8;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 34px;
}

.primary-link,
.secondary-link {
  padding: 14px 22px;

  border-radius: 999px;

  font-weight: 600;

  transition: 0.2s ease;
}

.primary-link {
  background: var(--accent);
  color: white;
}

.primary-link:hover {
  transform: translateY(-2px);
}

.secondary-link {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.secondary-link:hover {
  background: rgba(255, 255, 255, 0.08);
}

.contact-info {
  display: flex;
  flex-direction: column;

  justify-content: center;
}

.info-item {
  padding: 22px 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.info-item:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.info-item span {
  display: block;

  margin-bottom: 8px;

  font-size: 0.72rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: rgba(255, 255, 255, 0.45);
}

.info-item a {
  color: white;

  font-size: 0.95rem;

  word-break: break-word;

  transition: 0.2s ease;
}

.info-item a:hover {
  color: var(--accent);
}

@media (max-width: 900px) {
  .contact-card {
    grid-template-columns: 1fr;

    padding: 50px;

    gap: 50px;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 80px 0;
  }

  .contact-card {
    padding: 32px 24px;

    border-radius: 24px;
  }
}
</style>
