axios.defaults.baseURL = 'http://localhost:8000/api'

const CATEGORY_ALL = {id: 'all' , name: 'All item'}

let vm = new Vue({
    el: '#app',
    data: {
        items: '[...new Array(12).keys()]',

        categories :[CATEGORY_ALL],
        products : [],
        cartItems: [],

        selectedCategory: CATEGORY_ALL.id 
        
    },
    computed:{
        total(){
            return this.cartItems.reduce((total,item) => total + item.subtotal,0)
        },

        filteredProducts(){
            return this.selectedCategory === CATEGORY_ALL.id
            ? this.products
            : this.products.filter(
            product => product.category_id === this.selectedCategory)
        }
    },
    methods: {
        getCategories(){
            axios.get('/categories')
            .then( res => {
                this.categories = [
                    CATEGORY_ALL,
                    ...res.data
                ]
                // js callback
            })

            .catch(err=>{
                alert('mon maaf,ada error m(_ _)m',)
                console.log(err)
                console.log(err.response)
                console.log(err.request)
                // komoji
            })
        },
        getProducts(){
            axios.get('/products')
            .then( res => {
                this.products = res.data
                // js callback
            })

            .catch(err=>{
                alert('mon maaf,ada error m(_ _)m',)
                console.log(err)
                console.log(err.response)
                console.log(err.request)
                // komoji
            })
        },
        isActive(id){
            return this.cartItems.find(item => item.id === id)
        },
        addItem(item){
            if(this.isActive(item.id)){
                this.removeItem(item.id)
            }else{
                this.cartItems.push({
                    ...item,
                    quantity: 1,
                    subtotal: item.price
                })
            }
        },
        removeItem(id){
            const index = this.cartItems.findIndex((item) => item.id === id);
            this.cartItems.splice(index,1)
        },
        addQuantity(item){
             item.quantity++;
             this.countSubtotal(item)
        },
        removeQuantity(item){
             item.quantity--;
             this.countSubtotal(item)

        },

        reduceQuantity(item){
            if(item.quantity <= 1){
                 this.removeItem(item)
            }else{
                item.quantity--
                this.countSubtotal($item)
            }
        },
        countSubtotal(item){
            item.subtotal = item.quantity * item.price
        },

        clearCart(){
            this.cartItems = []
        },
        setSelectedCategory(id){
            this.selectedCategory = id
        }
    },

    mounted() {
        this.getCategories()
        this.getProducts()
    },

    
})

// apa itu titik tiga 
// => spread operator.three dot operator

 
