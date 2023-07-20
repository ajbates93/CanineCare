<script setup lang="ts">
const { data: users, pending, refresh } = await useFetch('/api/users')

</script>
<template>
  <div>
    <div>Hi</div>
    <div v-if="pending">PENDING</div>
    <div>Here's some users:</div>
    <div v-for="user in users">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
    </div>
  </div>
</template>
