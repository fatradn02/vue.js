import {ref, reactive} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

export default function students(){
    const router = useRouter()
    const students = ref({});
    const form = reactive({
        name:null,
        nis:null,
        kelas:null,
        gender:null,
        birth_date:null,
        alamat:null,
    });

    async function getStudents(){
        try{
            const res = await axios.get('http://localhost:8001/api/students')
            students.value = res.data
        }catch(err){
            alert(err)
            console.error(err)
        }
    
    }

    async function deleteStudent(id){
        try{
            await axios.delete('http://localhost:8001/api/students/' + id)
        }catch(e){
            alert(e)
            console.error(e)
        } 
        await getStudents()
    }

     async function createStudent(){
        try{
            await axios.post('http://localhost:8001/api/students', form)
            router.push('/home')
        }catch(err){
            alert(err)
            console.log(err)
        }
    }
    
    return {form, students, getStudents ,createStudent, deleteStudent}
}

