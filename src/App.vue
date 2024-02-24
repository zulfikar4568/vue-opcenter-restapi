<script setup lang="ts">
import { ref, reactive } from 'vue';
import Form from './components/FormFactory.vue';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';

interface DataItem {
  Name: string;
  Description: string;
}
const data: DataItem[] = [
  {
    Name: 'Factory A',
    Description: 'This is a factory',
  },
  {
    Name: 'Factory B',
    Description: 'This is a factory',
  },
];

const isCreate = ref<boolean>(false);
const open = ref<boolean>(false);
const showDrawer = (create: boolean) => {
  open.value = true;
  isCreate.value = create;
};

const detailData = reactive<DataItem>({
  Name: '',
  Description: '',
})
</script>

<template>
  <div class="container">
    <a-divider>Factory</a-divider>
    <a-button @click="showDrawer(true)" type="primary" class="pull-right">Create</a-button>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a-button @click="showDrawer(false)" key="list-loadmore-edit" type="primary">
              <template #icon>
                <EditOutlined />
              </template>
            </a-button>
            <a-button key="list-loadmore-delete" type="primary" danger>
              <template #icon>
                <DeleteOutlined />
              </template>
            </a-button>
          </template>
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
    :title="isCreate ? 'Create Factory' : 'Update Factory'"
    placement="left"
  >
    <Form :name="detailData.Name" :title="isCreate ? 'Create Factory' : 'Update Factory'" :description="detailData.Description" :is-create="isCreate" />
  </a-drawer>
</template>
