
<template>
    <div class="details">
        <h1>Thank you for Login</h1>
        <img :src="isUserInfo.img" alt="loged img" v-if="isUserInfo.img" class="circle-image" />
        <p> {{ isUserInfo.name }} ==={{ isUserInfo.email }} ==={{ isUserInfo.customerId }}=={{ isUserInfo.mobile }}</p>
        <el-button @click="$router.go(-1)">Cancel</el-button>
    </div>
</template>
<script>


export default ({
    
    computed: {
        isUserInfo() {
            return this.$store.getters['common/getUserData']
        }
    },
  
})

</script>