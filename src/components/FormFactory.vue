<template>
  <a-form
    :model="data"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    :layout="'vertical'"
  >
    <a-form-item
      label="Factory Name"
      name="name"
      :rules="[{ required: true, message: 'Please input factory name!' }]"
    >
      <a-input v-model:value="data.name" />
    </a-form-item>

    <a-form-item
      label="Description"
      name="description"
      :rules="[{ required: false, message: 'Please input factory description!' }]"
    >
      <a-input v-model:value="data.description" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  isCreate: {
    type: Boolean,
    required: true,
  }
})

const data = reactive({
  name: props.name,
  description: props.description
})

const onFinish = (values: any) => {
  console.log('Success:', values);
};
</script>