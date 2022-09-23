<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: String,
  size: Number,
  color: String,
});

const getSize = (val) => typeof val === 'number' ? `${val}rem` : val;

const style = computed(() => {
  const { size, color } = props;
  return {
    display: 'inline-flex',
    verticalAlign: 'text-top',
    position: 'relative',
    color,
    fontSize: getSize(size),
  };
});

const formatSvg = computed(() => {
  const { icon } = props;
  return icon?.replace(
    '<svg',
    '<svg style="width: 1em;height: 1em;"',
  );
});
</script>

<template>
  <div
    class="k-icon"
    :style="style"
    v-html="formatSvg"
  />
</template>
