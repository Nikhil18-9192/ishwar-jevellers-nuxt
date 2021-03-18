<template>
  <div id="header">
    <div class="text">
      <h1>Redefining exclusivity!</h1>
      <p>
        We have opened this shop in 19 Nov 2003. We are completing 18 years of
        experience in this bussiness. We provide best service to our customers.
        It’s an hallmark showroom,
      </p>
      <hr />
    </div>
    <img class="bottom-line" src="/bottom-line.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  min-height: 660px;
  background: #dbecf2;
  padding: 0 72px;
  background-image: url('/header-bg1.png'), url('/header-bg2.png'),
    url('/locket.png');
  background-size: 210px, 269px, contain;
  background-repeat: no-repeat;
  background-position: 41% 22%, 90% 60%, 20% 0%;

  .text {
    max-width: 625px;
    float: right;
    padding-right: 70px;
    padding-top: 138px;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 89px;
      line-height: 93.18%;
      text-transform: uppercase;
      color: #335e73;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 35px;
      color: #565656;
      margin-top: 13px;
    }
    hr {
      width: 135.5px;
      height: 3px;
      background: #335e73;
    }
  }
  .bottom-line {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
    max-width: 715px;
    width: 100%;
  }
}
</style>
