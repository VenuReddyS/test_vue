
import axios from 'axios'
import config from '../../../config/endpoint'
import confi from "../../config"
const IMG_URL = config.img_url
export default {
    namespaced: true,
    state: {
    },
    actions: {
        async MEDIA_UPLOAD({commit}, payload){
            console.log('commit', commit)
            const { data } = await axios.post(IMG_URL, payload)
            console.log('DATA', data);
            if( data.status == 'success' ){
                return data
            }
        },
        async SIGN_UP({commit}, payload){
            console.log('commit', commit)
            const { data } = await axios.post(`${confi.CUSTOMER_URL}/creation`, payload, { headers: { "Content-Type" : "application/json"
        }})
            console.log('RES', data);
            // if( data.status == 'success' ){
            //     return data
            // }
            return data.data
        },
        async product_UP({commit}, payload){
           try{ console.log('commit', commit)
            const { data } = await axios.post(`${confi.PRODUCT_URL}/createproduct`, payload, { headers: { "Content-Type" : "application/json"
        }})
            console.log('RES', data);
            if( data.status === true  ){
                return data.data
            }
            // return data.data
        }catch(err){
            return err
        }
    },

        async SIGN_IN({commit}, payload){
            console.log('commit', commit)
            const { data } = await axios.post(`${confi.CUSTOMER_URL}/login`, payload, { headers: { "Content-Type" : "application/json"
        }})
            console.log('RES', data);
            // if( data.status == 'success' ){
            //     return data
            // }
            return data.data
        },
        async CHANGE_IN({commit}, payload){
            console.log('commit', commit)
            const { data } = await axios.put(`${confi.CUSTOMER_URL}/updatepassword`, payload, {
                 headers: { "Content-Type" : "application/json","authorization":localStorage.getItem('token')
        }})
            console.log('RES', data);
            // if( data.status == 'success' ){
            //     return data
            // }
            return data.data;
        },
        async orderList({commit}, payload){
            console.log('commit', commit)
            const { data } = await axios.post(`${confi.ORDER_URL}/order`, payload, { 
                headers: { "Content-Type" : "application/json","authorization":localStorage.getItem('token')
        }})
            console.log('RES', data);
            // if( data.status == 'success' ){
            //     return data
            // }
            return data.data
        },
    },
   
    
    mutations: {
        SET_USERDATA(state, logInfo) {
            console.log('token', logInfo.token);
            state.logData = logInfo
            console.log(state.logData)
        },
        SET_ORDERDATA(state, orderInfo) {
            console.log('data', orderInfo);
            state.orderData = orderInfo
        },
        SET_PRODUCTDATA(state,productInfo){
            console.log('data', productInfo);
            state.productData = productInfo
        },
        SET_USERDETAILS(state, userInfo) {
            console.log('data', userInfo);
            state.userData = userInfo
        },
        SET_USERPASSDATA(state, repeatInfo) {
            console.log('data', repeatInfo);
            state.repeatData = repeatInfo
        }
     },
    getters: {
        getUserData (state) { return state.logData.customerdetails},
        getOrderData (state){ return state.orderData},
        getUserDetails (state) { return state.userData },
        getproductData (state) { return state.productData },
        getrepeatinfo(state) {return state.repeatData}
    }
}
