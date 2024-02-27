<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue';
import Form from '../components/FormNDO.vue';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { INDO, getList, deletes } from '../service/ndo.service';
import { notification } from 'ant-design-vue';

// state
const data = ref<INDO[]>();
const isCreate = ref<boolean>(false);
const open = ref<boolean>(false);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  domainName: {
    type: String,
    required: true,
  }
})

// Before mount load the data
onBeforeMount( async () => {
  await loadData();
})

// Details the data for form
const detailData = reactive<INDO>({
  Name: '',
  Description: '',
})


// Drawer for form
const showDrawer = (create: boolean, item?: INDO) => {
  if (item) {
    detailData.Name = item.Name;
    detailData.Description = item.Description;
  } else {
    detailData.Name = '';
    detailData.Description = '';
  }
  open.value = true;
  isCreate.value = create;
};

// delete the item
const deleteItem = async (name: string) => {
  const message = await deletes(props.domainName, name)
  if (message) {
    notification.success({
      message,
      placement: 'topRight',
    });
    loadData();
  }
}

const loadData = async () => {
  data.value = await getList(props.domainName);
  open.value = false;
}
</script>

<template>
  <div class="container">
    <a-breadcrumb>
      <router-link to="/" custom v-slot="{ navigate, href }"><a-breadcrumb-item @click="navigate" :href="href">Home</a-breadcrumb-item></router-link>
      <a-breadcrumb-item>{{ title }}</a-breadcrumb-item>
    </a-breadcrumb>
    <a-button @click="showDrawer(true)" type="primary">
      <template #icon>
        <PlusOutlined />
      </template>Create
    </a-button>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a-button v-if="item.Name != 'PT. PCI ELEKTRONIK INTERNATIONAL'" @click="showDrawer(false, item)" key="list-loadmore-edit" type="primary">
              <template #icon>
                <EditOutlined />
              </template>
            </a-button>
            <a-button v-if="item.Name != 'PT. PCI ELEKTRONIK INTERNATIONAL'" @click="deleteItem(item.Name)" key="list-loadmore-delete" type="primary" danger>
              <template #icon>
                <DeleteOutlined />
              </template>
            </a-button>
          </template>
          <a-list-item-meta :description="item.Description ? item.Description : 'Undefined'">
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
    :title="isCreate ? `Create ${title}` : `Update ${title}`"
    placement="left"
  >
    <Form :domain-name="domainName" @is-submit-success="loadData" :name="detailData.Name" :title="isCreate ? `Create ${title}` : `Update ${title}`" :description="detailData.Description" :is-create="isCreate" />
  </a-drawer>
</template>../service/ndo.service