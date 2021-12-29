<script setup>
import Navbar from './layouts/Navbar/index.vue'
</script>
<template>
    <div>
        <div class="container px-8 mx-auto">
            <Navbar/>
            <router-view></router-view>
        </div>
       
    </div>
</template>