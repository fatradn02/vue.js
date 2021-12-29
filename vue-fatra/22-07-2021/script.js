let vm = new Vue ({
    el: '#app',

    data:{
        todos:[
            {
                name: 'Membersihkan Kelas',
                isFinish: false
            },
            {
                name: 'Mengerjakan Tugas',
                isFinish: false
            },
            {
                name: 'Tugas',
                isFinish: true
            }
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
        addTodo(){
            
            if(this.newTodo.length === 0) return
            
            const newTodoObject = {
                name: this.newTodo,
                isFinish:false
            }
            
            this.todos.push(newTodoObject)

            this.newTodo = ''
        },

        deleteTodo(index){
           this.todos.splice(index,1)
        }
    },
})


