import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;