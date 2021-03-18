<template>
  <div>
    <transition name="slide">
      <CategoryModal
        v-if="$store.state.collection"
        @dismiss="$store.commit('toggleCollection')"
      />
    </transition>
    <div class="logo">
      <img src="/logo.png" alt="" />
    </div>
    <Toolbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: 'Cormorant Infant', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.logo {
  position: fixed;
  top: 24px;
  left: 72px;
  z-index: 999;
}
.logo img {
  height: 82px;
  width: 128px;
  object-fit: contain;
}
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
