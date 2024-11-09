<template>
  <div class="product">
    <div class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }} руб.</p>
      <button class="add-to-cart">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: {
        name: "Наушники",
        description: "Наслаждайтесь захватывающим звуком высокого качества.",
        price: "1523",
        image: require("@/assets/product/Headphones.png"),
      },
    };
  },
};
</script>

<style scoped>
.product-card {
  width: 500px;
  padding: 30px;
  background-color: #1a1a1a;
  color: #ffffff;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
}
</style>
