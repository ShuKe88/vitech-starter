<template>
  <div>
    <h1>404</h1>
    <router-view></router-view>
    <button @click="goback()">返回上一页</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const goback = () => {
  router.back()
}
</script>

<style scoped></style>
