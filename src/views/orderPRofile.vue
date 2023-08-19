<template>
    <div class="orderdetails"> 
        <h1>Thank you for your order</h1>
        <p>TransactionID:{{ isOrderInfo.transactionId }}</p>
        <p>TotalAmount:{{ isOrderInfo.totalPrice }}</p>
        <div v-for="(item, index) in isOrderInfo.totalItems" :key="index" class="order-item">
            <img :src="item.img" alt="order img" v-if="item.img"  class="circle-image"/>
            <p>ProductName:{{item.productName }}</p>
            <p>productPrice:{{ item.price }}</p>
        </div>
        
        <el-button @click="$router.go(-1)">Cancel</el-button>
    </div>
</template>
<script>
export default ({
  
    computed: {
        isOrderInfo () {
            return this.$store.getters['common/getOrderData']
        },
        
    },
   
})

</script>
<style>
.orderdetails{

    border: 1px solid #902525;
    background-color: rgb(204, 208, 208);
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>