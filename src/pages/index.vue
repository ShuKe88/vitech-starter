<template>
  <div class="text-3xl font-bold underline" ref="target">
    hello router{{ msg }}
  </div>
  <p>x: {{ x }}, y: {{ y }}, isOutside: {{ isOutside }}</p>
  <HelloWorld />
  <UserComponent @update="listenAddNumber"></UserComponent>
  <el-button>Default</el-button>
  <div class="i-logos-vue text-3xl">
    <div class="i-mdi-alarm text-orange-400" />
  </div>
</template>

<script setup lang="ts">
const msg = ref('ws')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
defineOptions({
  name: 'index1',
})
const listenAddNumber = (number: number) => {
  console.log('打印监听到的值', number)
}
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
