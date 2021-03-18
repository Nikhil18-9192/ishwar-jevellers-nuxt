<template>
  <div id="footer">
    <div class="copyright">
      <p>COPYRIGHT 2021 | Ishwar | ALL RIGHTS RESERVED</p>
    </div>
    <div class="social">
      <a href="#" rel="noreferrer"><img src="/fb.svg" alt="" /></a>
      <a href="#" rel="noreferrer"><img src="/insta.svg" alt="" /></a>
    </div>
    <div class="brand">
      <a href="https://www.formecmedia.com/" rel="noreferrer"
        >MADE WITH 💛 BY FORMEC MEDIA</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 73px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 72px;
  align-items: center;
  p {
    color: #fff;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
  }
  .brand {
    a {
      color: #fff;
    }
  }
  .social {
    a {
      margin-right: 35px;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
