<script setup lang="ts">
import CardMenu from './components/CardMenu.vue';
import { dataMenu } from './data/data-menu';
</script>

<template>
   <a-flex wrap="wrap" gap="large" :align="'flex-end'">
    <div v-for="(item, index) in dataMenu" :key="index">
      <CardMenu v-if="item.name !== 'Home'" :title="item.name" :description="item.description" :link="item.link" :img-url="item.img"/>
    </div>
   </a-flex>
</template>