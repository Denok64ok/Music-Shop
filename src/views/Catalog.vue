<template>
  <div class="catalog">
    <h1>Каталог музыкального оборудования</h1>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <button class="view-details">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Наушники",
          description: "Высококачественный звук",
          image: require("@/assets/product/Headphones.png"),
        },
        {
          id: 2,
          name: "Микрофон",
          description: "Четкий захват голоса",
          image: require("@/assets/product/Microphone.png"),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
