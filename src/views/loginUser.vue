<template>
    <div>
        <h1> Enter login Details </h1>
        <div class="row form">
            <el-form ref="form" :model="login" label-width="150px">
          
                <el-form-item label="email">
                    <el-input v-model="login.email"></el-input>
                </el-form-item>
                <el-form-item label="password">
                    <el-input  v-model="login.password" show-password></el-input>
                    </el-form-item>
                <el-form-item>
                    <div class="button">
                    <el-button type="primary" @click="loginUser">Login</el-button>
                    <el-button @click="$router.go(-1)">Cancel</el-button>
                </div>
                </el-form-item>
                <div class="subcontainer">
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                    <p class="forgotpsd"> <a href="http://localhost:8080/updatePassword">Forgot Password?</a></p>
                </div>

                <p class="register">new a member? <a href="http://localhost:8080/signup">Register here!</a></p>

            </el-form>
            <file-upload />
        </div>
    </div>
</template>
<!-- <style scoped>

.row form{
  border: 10px solid #9f7584;
  background-color: rgb(241, 232, 232);
  margin-left:180px;
  margin-right:180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button{
  padding: 10px;
  margin-right: 130px;
  text-align: center;
}
.subcontainer{

  background-color: rgb(244, 241, 235);
  padding: 10px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
}
</style> -->
<script>
import FileUpload from '../components/common/FileUpload.vue'

export default {
    data() {
        return {
            login:{
                email:'',
                password: '',
                
            }
        }
    },
    methods: {
        async loginUser() {
            
            let resp = await this.$store.dispatch('common/SIGN_IN', this.login)
            localStorage.setItem('token',resp.token)
            console.log('token from localStroage',resp.token)
            if(!resp) return 0
            this.$router.push('/logeduser-profile')
            this.$store.commit('common/SET_USERDATA', resp)
            
            console.log('RES', resp.customerdetails);
        },
        components: {
            FileUpload
        }
    }
}
</script>
    <style>
.row form{
  border: 10px solid #9f7584;
  background-color: rgb(241, 232, 232);
  margin-left:180px;
  margin-right:180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>