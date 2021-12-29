<script setup>
 const props = defineProps({
     title: String,
 });
</script>
<template>
      <a class="text-sm" href="#">{{ title }}</a>
</template>