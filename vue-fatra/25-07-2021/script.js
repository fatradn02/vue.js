let vm = new Vue ({
    el: '#app',

    data:{
        todos:[
           
        ],
        newTodo: ''
    },

    computed: {
        totalTask() {
            return this.todos.length
        },

        remainingTask(){
            return this.todos.filter( value =>!value.isFinish ).length

        }
    },
   
    methods: {
        
        getTodo(){
            axios.get('http://localhost:8001/api/todos')
            .then((res)=>{
                this.todos = res.data
            })
        },

        addTodo(){
            
            if(this.newTodo.length === 0) return
            
            const payload = {
                name: this.newTodo
            }
            
            axios.post('http://localhost:8001/api/todos/create',payload)

            .then( () => {
                this.getTodo()
            })

            this.newTodo = ''
        },
       
        deleteTodo(id){
       axios.delete('http://localhost:8001/api/todos/' + id)
       .then(()=>{
           this.getTodo()
       })
       },
       
       updateFinish(e,id) {

        const payload = {
            isFinish: e.target.checked
        }
           
        axios.post('http://localhost:8001/api/todos/update-finish/' + id,payload)

            .then(()=>{
                this.getTodo()
            })
       },

    },

    created(){
        this.getTodo()
    }
})


