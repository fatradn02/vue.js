<script setup>
import {reactive} from 'vue'
import useEmployees from '../../composables/employees.js'
const {form, isLoading, createEmployee} = useEmployees();

</script>
<template>
    <form @submit.prevent="createEmployee">
        <div class="">
            Name:
            <input type="text" class="bg-gray-100" v-model="form.name">
        </div>
        <br>
        <div>
            Nip:
            <input type="text" class="bg-gray-100" v-model="form.nip">
        </div>
        <br>

        <div>
            Position:
            <select v-model="form.position">
                <option value="manager">manager</option>
                <option value="cp">cp</option>
                <option value="staff">staff</option>
                <option value="ob">ob</option>
                <option value="sales">sales</option>
            </select>
            
        </div>        
        <br>
        <div>
            Gender:
            <label>
                <input type="radio" value="L" v-model="form.gender">
                Laki Laki
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type="radio" value="P" v-model="form.gender">
                Perempuan
            </label>
        </div>
        <br>
        <div>
            Birth_Date:
            <input type="date" class="bg-gray-100" v-model="form.birth_date">           
        </div>
        <br>
        <p v-if="isLoading">loading...</p>        
        <button v-else class="bg-gray-100">sumbit</button>
    </form>
    <p>{{ form.name }}</p>
    <p>{{ form.nip }}</p>
    <p>{{ form.position }}</p>
    <p>{{ form.gender }}</p>
    <p>{{ form.birth_date }}</p>
</template>