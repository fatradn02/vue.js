<script setup>
    const props = defineProps({
       title: String,
       hoverMode: Boolean 
    });
</script>
<template>
        <button 
            class="py-2 px-6 font-semibold rounded transition-all"
            :class="
            hoverMode 
            ? 'hover:bg-green-600 hover:text-white'
            : 'bg-green-600 text-white'
            "
            >
            {{ title }}
        </button>
</template>