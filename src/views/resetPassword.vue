<template>
    <div>
        <h1> Enter login Details </h1>
        <div class="reset form">
            <el-form ref="form" :model="Change" label-width="150px">
           
                <el-form-item label="email">
                    <el-input v-model="Change.email"></el-input>
                </el-form-item>
                <el-form-item label="password">
                    <el-input type='password' v-model="Change.password"></el-input>
                </el-form-item>
                <el-form-item label="resetPassword">
                    <el-input type='password' v-model="Change.repeatPassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="ChangePW">RESET</el-button>
                    <el-button @click="$router.go(-1)">Cancel</el-button>
                </el-form-item>

            </el-form>
            <file-upload />
        </div>
    </div>
</template>
<script>
import FileUpload from '../components/common/FileUpload.vue'

export default {
    data() {
        return {
            Change:{
                email:'',
                password: '',
                repeatPassword:''
                
            }
        }
    },
    methods: {
        async ChangePW() {
            
            let resp = await this.$store.dispatch('common/CHANGE_IN', this.Change)
            console.log('RES', resp);
            if(!resp) return 0
            this.$router.push('/update-password')
            this.$store.commit('common/SET_USERPASSDATA', resp)
        },
        components: {
            FileUpload
        }
    }
}
</script>
<style>
.reset form {
    border: 10px solid #851010;
    background-color: rgb(241, 232, 232);
    margin-left: 180px;
    margin-right: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    </style>