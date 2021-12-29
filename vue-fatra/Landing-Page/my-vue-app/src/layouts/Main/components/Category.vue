<script setup>
    const props = defineProps({
       title: String,
       colorMode: Boolean 
    });
</script>
<template>
        <button 
            class="py-1 px-4 rounded-full text-sm"
            :class="
            colorMode 
            ? 'bg-blue-100'
            : 'bg-pink-100'
            "
            >
            {{ title }}
        </button>
</template>