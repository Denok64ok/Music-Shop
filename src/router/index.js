import { createRouter, createWebHistory } from "vue-router";
import Cart from "../views/Cart.vue";
import Catalog from "../views/Catalog.vue";
import Product from "../views/Product.vue";

const routes = [
  { path: "/catalog", name: "Catalog", component: Catalog },
  { path: "/product/:id", name: "Product", component: Product },
  { path: "/cart", name: "Cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
