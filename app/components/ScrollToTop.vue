<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="scroll-button">
    <button
      v-if="visible"
      class="scroll-top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top {
  position: fixed;

  right: 24px;
  bottom: 24px;

  z-index: 90;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  background: var(--primary);
  color: white;

  font-size: 1.1rem;

  cursor: pointer;

  box-shadow: 0 14px 30px rgba(24, 42, 58, 0.18);

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.scroll-top:hover {
  transform: translateY(-3px);
  background: var(--accent);
}

.scroll-button-enter-active,
.scroll-button-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.scroll-button-enter-from,
.scroll-button-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 600px) {
  .scroll-top {
    right: 16px;
    bottom: 16px;

    width: 44px;
    height: 44px;
  }
}
</style>
