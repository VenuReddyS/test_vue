import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AddProduct from "@/views/AddProduct.vue";
import ListOfProducts from "@/views/ListOfProducts.vue"
import UserIntro from "@/views/UserIntro.vue"
import getproducts from "@/views/getProducts"
import loginUser from "@/views/loginUser.vue"
import ChangePassWord from "@/views/resetPassword.vue"
import OrderNow from "@/views/orderProduct.vue"
import Userfile from "@/views/UserProfile.vue"
import OrderList from "@/views/orderPRofile.vue"
import productDetail from "@/views/newProductDetails.vue"
import logedDetails from "@/views/logedUser.vue"
import repeatDetails from "@/views/repeatPassword.vue"
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home
  },
  {
    path: "/product-profile",
    name: "ProductDetail",
    component: productDetail
  },
  {
    path: "/order-profile",
    name: "OrderList",
    component:OrderList
  },
  {
    path: "/getproducts",
    name: "getProducts",
    component: getproducts
  },
  {
    path: "/signup",
    name: "UserIntro",
    component: UserIntro
  },
  {
    path: "/addProduct",
    name: "AddProduct",
    component: AddProduct
  },
  {
    path: "/list",
    name: "ListOfProducts",
    component: ListOfProducts
  },
  {
    path: '/logeduser-profile',
    name: "logedDetails",
    component: logedDetails
  },
  {
    path: '/update-password',
    name: "repeatDetails",
    component: repeatDetails
  },
  {
    path: "/login",
    name: "LogUser",
    component:loginUser
  }, {
    path: "/updatePassword",
    name: "changePw",
    component:ChangePassWord
  },
  {
    path: "/order",
    name: "OrderNOw",
    component:OrderNow
  }, {
    path: "/user-details",
    name: "UserProfile",
    component:Userfile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;