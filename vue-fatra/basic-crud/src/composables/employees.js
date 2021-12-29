import {ref, reactive} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'


export default function employees(){
    const router = useRouter()
    const employees = ref({});
    const isLoading = ref(false);
    const form = reactive({
        name:null,
        nip:null,
        position:null,
        gender:null,
        birth_date:null,
    });
    
    async function getEmployees(){
        try{
            isLoading.value = true
            const res = await axios.get('http://localhost:8000/api/employees')
            employees.value = res.data 
        }catch (err){
            alert(err)
            console.error(err)
        }finally{
            isLoading.value = false
        }
    }

    async function deleteEmployees(id){
        try{
            isLoading.value = true
            await axios.delete('http://localhost:8000/api/employees/' + id)
        }catch(e){
            alert(e)
            console.error(e)
        }finally{
            isLoading.value = false
        }
        await getEmployees()
    }

    async function createEmployee (){
        try{
            isLoading.value = true
            await axios.post('http://localhost:8000/api/employees/', form)
            router.push('/employees')
        }catch(err){
            alert(err)
            console.log(err)
        }finally{
            isLoading = false
        }
    }
    return {form, isLoading, employees, getEmployees, deleteEmployees, createEmployee}
}