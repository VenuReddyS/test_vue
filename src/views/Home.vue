<template>
  <div class="home-page">
    <div class="heading">
      <h1>Welcome to Your VLX</h1>
    </div>
    
    <div class="buttons">
      <el-button type="success" @click="$router.push('/addProduct')" plain> 
        Add Product
      </el-button>
  
      <el-button type="success" @click="$router.push('/getproducts')" plain> 
        getproducts
      </el-button>
      <el-button type="success" @click="$router.push('/signup')" plain> 
        SignUp
      </el-button>
      <el-button type="success" @click="$router.push('/login')" plain> 
        login
      </el-button>
      <el-button type="success" @click="$router.push('/order')" plain> 
        Order
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.home-page {
  background-image: url('/home/maren/Desktop/images (1).jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: top;
  color: rgb(206, 200, 26);
}

.heading {
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
