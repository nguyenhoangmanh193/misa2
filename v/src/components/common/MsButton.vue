<template>
  <button 
    class="btn" 
    :class="[variantClass]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import '@/assets/styles/components/button.scss' 

defineProps({
  variant: {
    type: String,
    default: 'primary', }
})

const variantClass = computed(() => `btn-${props.variant}`)
</script>
