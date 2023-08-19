<template>
    <div>
        <h1> Enter Product Details </h1>
        <div class="pro-Details">
            <el-form ref="form" :model="signForm" label-width="150px">
                <el-form-item label="ProductName">
                    <el-input v-model="signForm.productName"></el-input>
                </el-form-item>
                <el-form-item label="brand">
                    <el-input v-model="signForm.brand"></el-input>
                </el-form-item>
                <el-form-item label="category">
                    <el-input v-model="signForm.category"></el-input>
                </el-form-item>
                <el-form-item label="price">
                    <el-input v-model="signForm.price"></el-input>
                </el-form-item>
                <el-form-item label="quantity">
                    <el-input v-model="signForm.quantity"></el-input>
                </el-form-item>
                <el-form-item label="img">
                    <file-upload @file-upload="handleImageUploaded($event)" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" background-color:balck @click="productup">Save</el-button>

                    <el-button type="danger" @click="$router.go(-1)">Cancel</el-button>
                </el-form-item>
            </el-form>

            <!-- Display Product Details -->
            <!-- <div class="p-details" v-if="pl">
                <h1>ProductDetails</h1>
                <p>productName:{{ pl.productName }}</p>
                <p>productPrice:{{ pl.price }}</p>
                <p>productBrand:{{ pl.brand }}</p>
                <p>productCategory:{{ pl.category }}</p>
                
                <img :src="pl.img" alt="Product img" v-if="pl.img"  class="circle-image"/>
            
            </div>   -->
        </div>
    </div>
</template>

<script>
import FileUpload from '../components/common/FileUpload.vue'

export default {
    data() {
        return {
            signForm: {
                productName: '',
                brand: '',
                category: '',
                price: '',
                quantity: '',
                img: '' // For storing the uploaded image URL
            },
            pl: null
        }
    },
    methods: {
        async productup() {
            let req = {
                productName: this.signForm.productName,
                brand: this.signForm.brand,
                category: this.signForm.category,
                price: this.signForm.price,
                quantity: this.signForm.quantity,
                img: this.signForm.img
            }
            let resp = await this.$store.dispatch('common/product_UP', req)
            if (!resp) return 0
            this.$router.push('/product-profile')
            this.$store.commit('common/SET_PRODUCTDATA', resp)
            if (resp) {
                this.pl = resp
            }
        },
        handleImageUploaded(imageUrl) {
            console.log('hello', imageUrl);
            this.signForm.img = imageUrl;
        }
    },
    components: {
        FileUpload
    }
}
</script>

<style >
.circle-image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 3px solid #ccc;
}

.pro-Details {
    border: 1px solid #902525;
    background-color: rgb(226, 232, 232);
    margin-left: 500px;
    margin-right: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
