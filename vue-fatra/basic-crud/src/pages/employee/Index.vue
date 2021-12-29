<script setup>
    import { onMounted } from 'vue'
    import useEmployees from '../../composables/employees'
    
    const {isLoading, employees, getEmployees , deleteEmployees } = useEmployees();
    onMounted(getEmployees)
</script>
<template>
    <h1 class="text-red-600">
        List Employees
    </h1>
    <br>
    
    
    <router-link to="/employees/form">Create Employee</router-link>
    <p v-if="isLoading">loading...</p>
    <table v-else width="100%" border="2">
        <thead>
            <tr>
                <th>NAME</th>
                <th>NIP</th>
                <th>POSITION</th>
                <th>GENDER</th>
                <th>BIRTH DATE</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.nip }}</td>
                <td>{{ employee.position }}</td>
                <td>{{ employee.gender }}</td>
                <td>{{ employee.birth_data }}</td>
                <td>
                    <a @click="deleteEmployees(employee.id)">delete</a>
                    <router-link :to="{
                        path: '/emplotees/form',
                        query: {
                            id: employee.id
                            }
                      }">
                    edit</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>