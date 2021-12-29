<script setup>
import Navbar from './layouts/Navbar.vue'
import Sidebar from './layouts/Sidebar.vue'
import Dashboard from './views/Dashboard.vue'
import Forms from './views/Forms.vue'
</script>
<template>
    <div>
        <nav>
            <Navbar/>
        </nav>
        <div class="Sidebar">
         <div class="flex flex-1">
        
            <Sidebar/>
            <router-view></router-view>
         </div>
        </div>

    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i');
</style>