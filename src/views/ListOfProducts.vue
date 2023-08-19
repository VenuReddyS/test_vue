<template>
    <div>
        <div class="container-fluid">
            <h1> Select Your Product </h1>
            <div class="row">
                <product-list/>
            </div>
        </div>
    </div>
</template>

<script>

import ProductList from '@/components/Products/ProductList.vue'

export default {

    components: {
        ProductList   
    }

}

</script>