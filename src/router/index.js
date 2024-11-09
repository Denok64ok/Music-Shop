import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/catalog", name: "Catalog", component: Catalog },
  { path: "/product/:id", name: "Product", component: Product },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/about", name: "About", component: About },
  { path: "/profile", name: "Profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
