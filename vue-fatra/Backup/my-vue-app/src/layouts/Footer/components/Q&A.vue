<script setup>
 const props = defineProps({
     title: String,
 });
</script>
<template>
        <p class="text-gray-700">{{ title }}</p>
</template>