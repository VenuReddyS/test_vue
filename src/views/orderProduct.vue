
     <template>
        <div>
            <h1> ADD Products To Order</h1>
            <div class="order form">
                <el-form ref="form" :model="orderForm" label-width="150px">
                    <el-form-item label="items">
                        <div v-for="(item, index) in orderForm.items" :key="index">
                            <el-input v-model="item.productId" :placeholder="'productId ' + (index + 1)"></el-input>
                            <el-input v-model="item.quantity" :placeholder="'quantity ' + (index + 1)"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addProduct">Add Product</el-button>
                        <el-button type="primary" @click="OrderUp">order</el-button>
                        <el-button @click="$router.go(-1)">Cancel</el-button>
                    </el-form-item>
                </el-form>
                <file-upload />
            </div>
        </div>
    </template>
    
    <script>
    //import FileUpload from '../components/common/FileUpload.vue'

export default {
    data() {
        return {
            orderForm: {
                items: [
                    { productId: '', quantity: '' }
                ]
            }
        }
    },
    methods: {
        addProduct() {
            this.orderForm.items.push({ productId: '', quantity: '' });
        },
        async OrderUp() {
            // Convert quantity strings to numbers
            this.orderForm.items.forEach(item => {
                item.quantity = Number(item.quantity);
            });

            console.log('REQ', this.orderForm);
            let resp = await this.$store.dispatch('common/orderList', this.orderForm);
            if(!resp) return 0
            this.$router.push('/order-profile');
            this.$store.commit('common/SET_ORDERDATA', resp);
            console.log('RES', resp);
        }
    }
}
</script>


