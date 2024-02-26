<script setup lang="ts">
import CardMenu from './components/CardMenu.vue';
</script>

<template>
   <a-flex wrap="wrap" gap="large" :align="'flex-end'">
     <CardMenu :title="'Factories'" :description="'A Factory is any division, department, or group that is separated for accounting and reporting purposes. An enterprise can contain one or more factories'" :link="'/factory'" :img-url="'https://cdn-icons-png.flaticon.com/512/3399/3399269.png'"/>
     <CardMenu :title="'Products'" :description="'Products are the materials produced in a factory or by outside suppliers for a factory. Products can be enditems, subassemblies, and components.'" :link="'/'" :img-url="'https://cdn-icons-png.flaticon.com/512/2652/2652218.png'"/>
     <CardMenu :title="'BOM'" :description="'Manufactured products are built using an enumerated and well-defined list of raw materials and subassemblies. A bill CDO facilitates a collection of material lists.'" :link="'/'" :img-url="'https://icons.veryicon.com/png/o/internet--web/industrial-internet/bom-1.png'"/>
     <CardMenu :title="'Workflow'" :description="'Workflows are the fundamental components of modeling. A workflow is a sequence of steps used to manufacture a product. Not all products need a workflow.'" :link="'/'" :img-url="'https://cdn-icons-png.freepik.com/512/1574/1574572.png'"/>
     <CardMenu :title="'Resource'" :description="'Resources are part of the physical components in your manufacturing facility. They are the machines, equipment, and people involved in your manufacturing processes. '" :link="'/'" :img-url="'https://cdn-icons-png.flaticon.com/512/1186/1186305.png'"/>
   </a-flex>
</template>