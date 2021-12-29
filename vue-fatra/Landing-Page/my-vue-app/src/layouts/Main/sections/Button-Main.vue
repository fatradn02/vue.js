<script setup>
import Button from '../components/Button.vue'
import Logo from './Logo.vue'
</script>
<template>
    <div class="space-x-4 flex text-center mt-8">
        <Button title="Book Demo" class="py-1 px-5 font-semibold bg-gray-900 text-white"/>
        <div class="flex items-center justify-center">
        <Button title="Our Showreel" class="py-3 px-9 font-semibol"/>
        <Logo/>   
        </div>
    </div>
</template>