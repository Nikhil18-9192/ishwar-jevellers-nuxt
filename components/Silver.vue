<template>
  <div id="silver">
    <div class="dual">
      <div class="left">
        <img class="image" src="/silver.png" alt="" />
      </div>
      <div class="right">
        <p class="category" @click="category = true">category</p>
        <div class="text">
          <h4>Silver</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            ultrices aliquet bibendum dictum hendrerit diam neque. Leo at nisl,
            pellentesque lacus vitae tellus. Diam elementum lorem bibendum
            tortor aliquet mauris, tortor, fringilla congue. Ac lacus non at
            pulvinar sit. Curabitur ante lectus pharetra leo. Feugiat tristique
            ultrices imperdiet proin viverra est aliquam. Eros, gravida id proin
            convallis non aliquet id id.
          </p>
          <div class="brows" @click="$store.commit('toggleCollection')">
            <p>Browse Collection</p>
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <img class="bottom-line" src="/bottom-line.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'silver',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#silver {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 72px;
  background: #f9f3ff;
  background-image: url('/silver-bg1.png'), url('/silver-bg2.png'),
    url('/silver-bg3.png'), url('/silver-bg4.png');
  background-repeat: no-repeat;
  background-position: 20% 10%, 75% 100%, 35% 85%, 55% 20%;
  background-size: 151px, 124px, 140px, 140px;
  .dual {
    display: flex;
    width: 100%;
    height: 100%;
    .left {
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .image {
        max-width: 515px;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .right {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      padding-right: 35px;
      .category {
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        text-transform: uppercase;
        color: #877698;
        position: absolute;
        right: 0;
        top: 35px;
        cursor: pointer;
        opacity: 0.8;
      }
      .text {
        max-width: 285px;
        text-align: right;
        h4 {
          font-style: normal;
          font-weight: 500;
          font-size: 89px;
          line-height: 108px;
          text-transform: uppercase;
          color: #877698;
        }
        p {
          font-style: normal;
          font-weight: 300;
          font-size: 17px;
          line-height: 23px;
          color: #565656;
        }
        .brows {
          display: flex;
          margin-top: 25px;
          align-items: center;
          justify-content: flex-end;
          cursor: pointer;
          p {
            font-style: normal;
            font-weight: 300;
            font-size: 17px;
            line-height: 23px;
            color: #000;
          }
          img {
            margin-left: 15px;
            width: 47px;
            object-fit: contain;
          }
        }
      }
    }
  }
  #category-modal {
    position: absolute;
    right: 0px;
    transition: 0.3s ease all;
  }
}
</style>
