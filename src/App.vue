<script setup lang="ts">
import { ref } from 'vue';

interface DataItem {
  InstanceID: string;
  Name: string;
  Description: string;
}
const data: DataItem[] = [
  {
    InstanceID: '1',
    Name: 'Factory A',
    Description: 'This is a factory',
  },
  {
    InstanceID: '2',
    Name: 'Factory B',
    Description: 'This is a factory',
  },
];

const open = ref<boolean>(false);
const showDrawer = () => {
  open.value = true;
};
</script>

<template>
  <div class="container">
    <a-divider>Factory</a-divider>
    <a-button @click="showDrawer" type="primary" class="pull-right">Create</a-button>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.Description">
            <template #title>
              <b>{{ item.Name }}</b>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
  <a-drawer
    v-model:open="open"
    title="Create Factory"
    placement="bottom"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
