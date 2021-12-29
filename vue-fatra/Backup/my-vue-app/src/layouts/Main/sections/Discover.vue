<script setup>
import Discover from '../components/Checkbox.vue'
import Country  from '../components/Country.vue'
import Category from '../components/Category.vue'
import DiscoverImg from '../components/Discover-img.vue'
import Box from '../components/Box.vue'
</script>
<template>
    <div class="absolute bg-white w-11/12 bottom-8 right-52 shadow-2xl">
        <Discover/>
        <Country/>
        <Category/>
        <div class="flex justify-between pl-5 mb-5">
            <DiscoverImg/>
            <Box/>
        </div>
    </div>
</template>
