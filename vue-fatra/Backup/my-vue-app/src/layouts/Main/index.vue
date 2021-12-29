<script setup>
import Button from './sections/Button-Main.vue'
import HeaderContent from './sections/Header-Content.vue'
import Paragraf from './sections/Paragraf.vue'
import Title from './sections/Title.vue'
import Search from './sections/Search.vue'
import Discover from './sections/Discover.vue'
import Image from './sections/Image.vue'
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
                        <Discover/>
                    </div>
                </section>
    </main>
</template>
