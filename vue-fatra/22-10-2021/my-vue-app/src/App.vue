<script setup>
    
    import { ref } from 'vue'

    const test = ref('hello world!')
    function changeTest() {
    test.value = 'hai dunia'
    }
    
    const counter = ref(0)
    function addCounter(){
        counter.value++
    }

</script>
<template>

  <div>
     <div id='app'>
        {{ test }}   <!-- Menampilkan Hasil dari data test-->
        <br>
        <button @click="changeTest"> 
            change test  <!-- Menampilkan Hasil Ketika Mengklik dari Function changeTest -->
        </button>
        <br>
        <p @click="addCounter">
            {{ counter }}  <!-- Menampilkan Hasil Function addCounter-->
        </p>
    </div>
  </div>
</template>
