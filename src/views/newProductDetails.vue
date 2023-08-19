
<template>
    <div class="details"> 

        <div class="p-details" v-if="isproductInfo">
                <h1>ProductDetails</h1>
                <p>productName:{{ isproductInfo .productName }}</p>
                <p>productPrice:{{ isproductInfo .price }}</p>
                <p>productBrand:{{ isproductInfo .brand }}</p>
                <p>productCategory:{{ isproductInfo .category }}</p>
                
                <img :src="isproductInfo.img" alt="Product img" v-if="isproductInfo.img"  class="circle-image"/>
            
            </div>  
          
        <el-button @click="$router.go(-1)">Cancel</el-button>
    </div>
</template>
<script>


//import router from "@/router"

// router watch computed state management set time
export default ({
  
    computed: {
      
        isproductInfo () {
            return this.$store.getters['common/getproductData']
        },
        
    },
   
})
</script>
