<template>
  <a-layout>
    <a-layout-sider
      id="layout-sider"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="close-sidebar" @click="() => (collapsed = !collapsed)">
        <CloseOutlined />
      </div>

      <div class="text-center">
        <h1 class="full">Siemens</h1>
        <h1 class="collapse">S</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <router-link to="/" custom v-slot="{ navigate, href }">
          <a-menu-item key="1" @click="navigate" :href="href">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
            <span>Home</span>
          </a-menu-item>
        </router-link>
        <router-link to="/factory" custom v-slot="{ navigate, href }">
          <a-menu-item key="2" @click="navigate" :href="href">
            <img src="https://cdn-icons-png.flaticon.com/512/3399/3399269.png"/>
            <span>Factory</span>
          </a-menu-item>
        </router-link>
        <router-link to="/" custom v-slot="{ navigate, href }">
          <a-menu-item key="3" @click="navigate" :href="href">
            <img src="https://cdn-icons-png.flaticon.com/512/2652/2652218.png"/>
            <span>Products</span>
          </a-menu-item>
        </router-link>
        <router-link to="/" custom v-slot="{ navigate, href }">
          <a-menu-item key="4" @click="navigate" :href="href">
            <img src="https://icons.veryicon.com/png/o/internet--web/industrial-internet/bom-1.png"/>
            <span>BOM</span>
          </a-menu-item>
        </router-link>
        <router-link to="/" custom v-slot="{ navigate, href }">
          <a-menu-item key="5" @click="navigate" :href="href">
            <img src="https://cdn-icons-png.freepik.com/512/1574/1574572.png"/>
            <span>Workflow</span>
          </a-menu-item>
        </router-link>
        <router-link to="/" custom v-slot="{ navigate, href }">
          <a-menu-item key="6" @click="navigate" :href="href">
            <img src="https://cdn-icons-png.flaticon.com/512/1186/1186305.png"/>
            <span>Resurce</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout id="layout-main">
      <a-layout-header id="layout-header" style="background: #fff; padding: 0">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="light"
          mode="horizontal"
          :style="{ lineHeight: '64px', marginLeft: '20px' }"
        >
          <a-menu-item id="toggle" @click="() => (collapsed = !collapsed)">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              aria-disabled="true"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              style="margin-left: 18px"
            />
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content id="layout-content">
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <Suspense timeout="0">
              <template #default>
                <component :is="Component" :key="route.path"></component>
              </template>
              <template #fallback>
                <a-spin />
                <!-- <Loading /> -->
              </template>
            </Suspense>
          </template>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import {
  CloseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['2']);
const collapsed = ref<boolean>(false);
const route = useRoute();
</script>
