<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
  };
}>();

const handleBackHome = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div class="error-page">
    <div class="container error-content">
      <span class="error-code">
        {{ error.statusCode || 404 }}
      </span>

      <h1>Page not found.</h1>

      <p>
        The page you’re looking for may have been moved, renamed or is no longer
        available.
      </p>

      <button @click="handleBackHome">Back to Home</button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;

  display: flex;
  align-items: center;

  background: var(--primary-dark);
  color: white;
}

.error-content {
  text-align: center;
}

.error-code {
  display: block;

  font-family: var(--font-heading);
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 800;

  color: var(--accent);

  line-height: 1;
}

h1 {
  margin-top: 20px;

  font-size: clamp(2rem, 5vw, 4rem);
}

p {
  max-width: 550px;

  margin: 20px auto 0;

  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
}

button {
  margin-top: 30px;

  padding: 14px 22px;

  border: 0;
  border-radius: 999px;

  background: var(--accent);
  color: white;

  font-weight: 600;

  cursor: pointer;
}
</style>
