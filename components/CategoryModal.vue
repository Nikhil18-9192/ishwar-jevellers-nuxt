<template>
  <div id="category-modal">
    <div class="close" @click="$emit('dismiss')">
      <img src="/close.svg" alt="" />
    </div>
    <div class="categories-wrapper">
      <div class="categories" v-for="(item, i) in categories" :key="i">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryModal',
  props: ['categories'],
}
</script>

<style lang="scss" scoped>
#category-modal {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  background: linear-gradient(
    140.27deg,
    rgba(255, 255, 255, 0.87) 15.39%,
    rgba(255, 255, 255, 0.1131) 90.86%
  );
  backdrop-filter: blur(10px);
  z-index: 1;

  .close {
    position: absolute;
    right: 72px;
    top: 32px;
    z-index: 10;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  .categories-wrapper {
    position: relative;
    padding: 25px 125px;
    display: grid;
    grid-template-columns: auto auto;

    .categories {
      margin-top: 84px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        text-transform: capitalize;
        color: #565656;
      }
    }
  }
}
</style>
