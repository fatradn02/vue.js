<script setup>
    const props = defineProps({
       title: String,
       hoverMode: Boolean 
    });
</script>
<template>
        <button 
            class="py-3 px-9 font-semibold transition-all"
            :class="
            hoverMode 
            ? 'hover:bg-gray-900 hover:text-white'
            : 'bg-gray-900 text-white'
            "
            >
            {{ title }}
        </button>
</template>