<template>
  <div id="toolbar">
    <div class="menus" v-for="(item, i) in menus" :key="i">
      <nuxt-link class="menu" :to="item.route">{{ item.title }}</nuxt-link>
      <img src="/dot-line.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      menus: [
        { title: 'Home', route: '#header' },
        { title: 'Gold', route: '#gold' },
        { title: 'Silver', route: '#silver' },
        { title: 'Diamond', route: '#diamond' },
        { title: 'About', route: '#about' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 255px;
  left: 72px;
  z-index: 999;
  .menus {
    position: relative;
    margin-bottom: 25px;
    .menu {
      color: #496679;
      font-size: 25px;
      text-transform: uppercase;
      font-weight: 500;
      line-height: 30px;
    }
    img {
      position: absolute;
      left: 0;
      bottom: -35px;
      height: 40px;
    }

    &:last-child {
      img {
        display: none;
      }
    }
  }
}
</style>
