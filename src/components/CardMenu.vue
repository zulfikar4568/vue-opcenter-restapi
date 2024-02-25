<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  link: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  }
})
</script>
<template>
  <router-link :to="link" custom v-slot="{ navigate, href }">
    <a-card hoverable style="width: 240px" class="card-menu" @click="navigate" :href="href">
      <template #cover>
        <img alt="" style="padding: 30px" :src="imgUrl" />
      </template>
      <a-card-meta :title="title">
        <template #description>{{ description }}</template>
      </a-card-meta>
    </a-card>
  </router-link>
</template>