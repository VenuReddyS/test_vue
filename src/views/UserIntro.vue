<template>
    <div>
        <h1> Enter user Details </h1>
        <div class="rowthing">
            <el-form ref="form" :model="signupForm" label-width="150px">
                <el-form-item label="name">
                    <el-input v-model="signupForm.name"></el-input>
                </el-form-item>
                <el-form-item label="email">
                    <el-input v-model="signupForm.email"></el-input>
                </el-form-item>
                <el-form-item label="password">
                    <el-input type='password' v-model="signupForm.password"></el-input>
                </el-form-item>
                <el-form-item label="repeatPassword">
                    <el-input v-model="signupForm.repeatPassword"></el-input>
                </el-form-item>
                <el-form-item label="mobile">
                    <el-input v-model="signupForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="address"><br>
                    <el-input v-model="signupForm.address.street" placeholder="street"></el-input>
                    <el-input v-model="signupForm.address.district" placeholder="district"></el-input>
                    <el-input v-model="signupForm.address.mandal" placeholder="mandal"></el-input>
                    <el-input v-model="signupForm.address.village" placeholder="district"></el-input>
                    <el-input v-model="signupForm.address.pincode" placeholder="pincode"></el-input>
                </el-form-item>
                <el-form-item label="img">
                    <file-upload @file-upload="handleImageUploaded($event)" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="signup">Save</el-button>
                    <el-button @click="$router.go(-1)">Cancel</el-button>
                </el-form-item>
            </el-form>
          
          
        </div>
    </div>
</template>

<script>
import FileUpload from '../components/common/FileUpload.vue'

export default {
    data() {
        return {
            signupForm: {
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
                mobile: '',
                img:'',
                address: {
                    street: '',
                    district: '',
                    mandal: '',
                    village: '',
                    pincode: ''
                }
            }, pl: null
        }
    },
    methods: {
        async signup() {

            let resp = await this.$store.dispatch('common/SIGN_UP', this.signupForm)
            if(!resp) return 0
            console.log('RES', resp);
            if (resp) {
                this.pl = resp
                console.log('RES', this.pl);
            }
            this.$router.push('/user-details')
            this.$store.commit('common/SET_USERDETAILS', resp)
            console.log('RES', resp);
        }, 
        handleImageUploaded(imageUrl) {
            console.log('hello', imageUrl);
            this.signupForm.img = imageUrl;
        }
       
    },
    components: {
            FileUpload
        }
}
</script>
<style>
.rowthing {
    border: 10px solid #851010;
    background-color: rgb(241, 232, 232);
    margin-left: 600px;
    margin-right: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    </style>