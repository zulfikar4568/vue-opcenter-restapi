<template>
  <a-form
    :model="data"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    :layout="'vertical'"
  >
    <a-form-item
      :label="`${title} Name`"
      name="Name"
      :rules="[{ required: true, message: `Please input ${title} name!` }]"
    >
      <a-input v-model:value="data.Name" />
    </a-form-item>

    <a-form-item
      label="Description"
      name="Description"
      :rules="[
        { required: false, message: `Please input ${title} description!` },
      ]"
    >
      <a-input v-model:value="data.Description" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { INDO, create, update } from '../service/ndo.service';
import { notification } from 'ant-design-vue';

const emit = defineEmits(['isSubmitSuccess'])

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
  },
  domainName: {
    type: String,
    required: true,
  }
});

const data = reactive<INDO>({
  Name: props.name,
  Description: props.description ? props.description : '',
});

watch(props, (current) => {
  data.Name = current.name;
  data.Description = current.description ? current.description : '';
})

const onFinish = async (values: INDO) => {
  let message: string = '';
  if (props.isCreate) {
    message = await create(props.domainName, values);
  } else {
    message = await update(props.domainName, props.name, values);
  }

  if (message) {
    notification.success({
      message,
      placement: 'topRight',
    });
    emit('isSubmitSuccess');
    data.Name = '';
    data.Description = '';
  }
};
</script>../service/ndo.service