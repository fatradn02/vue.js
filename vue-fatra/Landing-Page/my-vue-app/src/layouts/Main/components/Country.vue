<script setup>
  const props = defineProps({
       title: String,

    });
</script>
<template>
    <p class="text-gray-500 text-sm">
            {{ title }}
    </p>
</template>