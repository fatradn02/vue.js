<script setup>
    import { onMounted } from 'vue'
    import useStudents from '../composables/students'
    const { students, getStudents, deleteStudent } = useStudents();
    onMounted(getStudents)
</script>
<template>
    <div class="dashboard">
           <!--Main-->
            <main class="bg-white-300 flex-1 p-3 overflow-hidden ml-5 mt-5" style="width:1100px;">
                <div class="flex flex-col">
                    <!-- Card Sextion Starts Here -->
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <!-- card -->
                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Trending Categories</div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-grey-darkest">
                                    <thead class="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Nis</th>
                                        <th scope="col">Kelas</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Birth_Date</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="student in students" :key="student.id">
                                        <td>{{ student.id }}</td>
                                        <td>{{ student.name }}</td>
                                        <td>{{ student.nis }}</td>
                                        <td>{{ student.kelas }}</td>
                                        <td>{{ student.gender }}</td>
                                        <td>{{ student.birth_date }}</td>
                                        <td>{{ student.alamat }}</td>
                                        <td>
                                            <a @click="deleteStudent(student.id)">delete</a>
                                                <router-link :to="{
                                                    path: '/home',
                                                    query: {
                                                        id: student.id
                                                        }
                                                }">
                                                edit</router-link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- /card -->

                    </div>
                    <!-- /Cards Section Ends Here -->
                </div>
            </main>
            <!--/Main-->
    </div>
</template>
