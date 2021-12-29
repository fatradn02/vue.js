<script setup>
import Button from './sections/Button-Main.vue'
import HeaderContent from './sections/Header-Content.vue'
import Paragraf from './sections/Paragraf.vue'
import Title from './sections/Title.vue'
import Search from './sections/Search.vue'
import Discover from './sections/Discover.vue'
import Image from './sections/Image.vue'
import CheckBox from './sections/Checkbox.vue'
import Country from './sections/Country.vue'
import Category from './sections/Category.vue'
import DiscoverImg from './sections/Discover-img.vue'
import Box from './sections/Box.vue'
</script>
<template>
     <main class="flex items-center justify-between">
                <section>
                    <Title/>
                    <HeaderContent/>
                    <Paragraf/>
                    <Button/>
                </section>
                <section>
                    <div class="relative flex space-x-4 mt-40">
                        <Image/>
                        <Search/>
                        <div class="absolute bg-white w-11/12 bottom-8 right-52 shadow-2xl">
                            <CheckBox/>
                            <Country/>
                            <Category/>
                            <div class="flex justify-between pl-5 mb-5">
                                <DiscoverImg/>
                                <Box/>
                            </div>
                         </div>
                    </div>
                </section>
    </main>
</template>
