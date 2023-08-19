
<template>
    <div class="details">
        <h1>Thank you for register</h1>
        <img :src="isUserInfo.img" alt="User img" v-if="isUserInfo.img" class="circle-image" />
        <p> {{ isUserInfo.name }} ==={{ isUserInfo.email }} ==={{ isUserInfo.customerId }}=={{ isUserInfo.mobile }}</p>
        <el-button @click="$router.go(-1)">Cancel</el-button>
    </div>
</template>
<script>


export default ({
    data() {
        return {
            user: null,
            firstName: 'hello',
            LastName: 'vue',
            address: ''
        }
    },
    computed: {
        isUserInfo() {
            return this.$store.getters['common/getUserDetails']
        },
        fullName() {
            return this.firstName + this.LastName
        }
    },
    watch: {
        address: {
            immediate: false,
            handler() {
                console.log('WaTCH', this.address)
            }
        }
    }
})

</script>
<style>
.details {
    border: 1px solid #902525;
    background-color: rgb(107, 110, 110);
    margin-left: 200px;
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style> 