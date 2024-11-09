<template>
  <header class="header">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="Music Store Logo" />
      <h1>Music Store</h1>
    </div>
    <nav class="nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/catalog" class="nav-link">Каталог</router-link>
      <router-link to="/about" class="nav-link">О нас</router-link>
    </nav>
    <div class="icons">
      <router-link to="/cart" class="icon-link">
        <img :src="require('@/assets/images/cart-icon.svg')" alt="Корзина" />
      </router-link>
      <router-link to="/profile" class="icon-link">
        <img :src="require('@/assets/images/user-icon.svg')" alt="Профиль" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
