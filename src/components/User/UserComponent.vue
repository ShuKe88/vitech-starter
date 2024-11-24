<template>
  <div @click="handleClick">this.is usercomponent</div>
</template>

<script setup lang="ts">
const num = ref(0)
const emits = defineEmits<{
  // <eventName>: <expected arguments>
  update: [value: number] // named tuple syntax
}>()
const handleClick = () => {
  console.log('you are clicking')
  emits('update', ++num.value)
}
</script>

<style scoped></style>
