<template>
  <div id="gold">
    <div class="dual">
      <div class="left">
        <div class="text">
          <h4>Gold</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            ultrices aliquet bibendum dictum hendrerit diam neque. Leo at nisl,
            pellentesque lacus vitae tellus. Diam elementum lorem bibendum
            tortor aliquet mauris, tortor, fringilla congue. Ac lacus non at
            pulvinar sit. Curabitur ante lectus pharetra leo. Feugiat tristique
            ultrices imperdiet proin viverra est aliquam. Eros, gravida id proin
            convallis non aliquet id id.
          </p>
          <a class="link" href="#"
            ><p>Browse Collection</p>
            <img src="/arrow.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="right">
        <transition name="slide">
          <CategoryModal
            v-if="category"
            @dismiss="category = false"
            :categories="categories"
          />
        </transition>
        <p class="category" @click="category = true">category</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldComponent',
  data() {
    return {
      category: false,
      categories: [
        'Kolhapuri Thushi',
        'Kolhapuri Saaj',
        'Necklace',
        'Manglsutra',
        'Ring',
        'Tops',
        'Long Necklace',
        'Temple Jewellery',
        'Chain/Braslet',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#gold {
  background: #fffbf4;
  width: 100%;
  position: relative;
  height: 660px;
  padding: 0 72px;
  background-image: url('/gold-bg1.png');
  background-repeat: no-repeat;
  background-position: 50% 100%;
  .dual {
    display: flex;
    width: 100%;
    height: 100%;
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .text {
        max-width: 285px;
        h4 {
          font-style: normal;
          font-weight: 500;
          font-size: 89px;
          line-height: 108px;
          text-transform: uppercase;
          color: #98766c;
        }
        p {
          font-style: normal;
          font-weight: 300;
          font-size: 17px;
          line-height: 23px;
          color: #565656;
        }
        .link {
          display: flex;
          margin-top: 25px;
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
    .right {
      width: 50%;
      height: 100%;
      position: relative;
      .category {
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        text-transform: uppercase;
        color: #98766c;
        position: absolute;
        right: 0;
        top: 35px;
        cursor: pointer;
      }
      #category-modal {
        position: absolute;
        right: 0px;
        transition: 0.3s ease all;
      }
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
