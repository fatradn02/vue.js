<script setup>
import Navbar from './layouts/Navbar/index.vue'
import Footer from './layouts/Footer/Index.vue'
import Main from './layouts/Main/index.vue'
</script>
<template>
    <div class="bg-gradient-to-r from-blue-50 to-pink-50">
        <div class="container px-8 mx-auto ">
            <Navbar/>
            <Main/>
            <Footer/>
            <router-view></router-view>
        </div>
    </div>
</template>
