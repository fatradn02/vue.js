<script setup>
  const props = defineProps({
       title: String,
       hoverMode: Boolean 

    });
</script>
<template>
    <button>
            {{ title }}
    </button>
</template>