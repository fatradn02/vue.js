<script setup>
 const props = defineProps({
     title: String,
 });
</script>
<template>
      <a class="text-md" href="#">{{ title }}</a>
</template>