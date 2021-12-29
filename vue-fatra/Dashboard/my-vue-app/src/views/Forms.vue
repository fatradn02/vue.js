<script setup>
import {reactive} from 'vue'
import useStudents from '../composables/students'
const {form, createStudent} = useStudents();
</script>
<template>
    <div>
          <!--Main-->
            <main class="bg-white-500 flex-1 p-3 overflow-hidden ml-16 mt-10" style="width:1000px;">
                <div class="flex flex-col">
                    <!--Grid Form-->
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                            <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                                Form Grid
                            </div>
                            <div class="p-3">
                                <form class="w-full" @submit.prevent="createStudent">
                                    <div class="flex flex-wrap mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-5">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-last-name">
                                                Nama
                                            </label>
                                            <input class="appearance-none block w-full bg-white text-grey-darker border border-gray-400 rounded py-2 px-4 leading-tight hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                   id="grid-last-name" 
                                                   type="text" 
                                                   placeholder="Nama"
                                                   v-model="form.name">
                                        </div>
                                        <div class="w-full md:w-1/2 px-3 mb-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light"
                                                   for="grid-last-name">
                                                Nis
                                            </label>
                                            <input class="appearance-none block w-full bg-white text-grey-darker border border-gray-400 rounded py-2 px-4 leading-tight hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                   id="grid-last-name" 
                                                   type="number" 
                                                   placeholder="Nis"
                                                   v-model="form.nis">
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <select v-model="form.kelas" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                <option value="X">X</option>
                                                <option value="XI">XI</option>
                                                <option value="XII">XII</option>
                                            </select>
                                            <div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>

                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-2"
                                                   for="grid-last-name">
                                                Gender
                                            </label>
                                            <div class="flex">
                                                <div class="flex items-center mb-4">
                                                    <input id="country-option-3" type="radio" name="countries" value="L" v-model="form.gender" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
                                                    <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
                                                    Laki
                                                    </label>
                                                </div>

                                                <div class="flex items-center mb-4">
                                                    <input id="country-option-4" type="radio" name="countries" value="P" v-model="form.gender" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 ml-2" aria-labelledby="country-option-4" aria-describedby="country-option-4">
                                                    <label for="country-option-4" class="text-sm font-medium text-gray-900 ml-2 block">
                                                    Perempuan
                                                    </label>
                                                </div>
                                            </div>
                                        </div>    

                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-last-name">
                                                Birth_Date
                                            </label>
                                            <input class="appearance-none block w-full bg-white text-grey-darker border border-gray-400 rounded py-2 px-4 leading-tight hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                   id="grid-last-name" 
                                                   type="date" 
                                                   placeholder="Birth_Date"
                                                   v-model="form.birth_date">
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-last-name">
                                                Birth_Date
                                            </label>
                                            <textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" v-model="form.alamat"></textarea>
                                            <button  class="bg-gray-100">sumbit</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--/Grid Form-->
                </div>
            </main>
            <!--/Main-->
    </div>
</template>
