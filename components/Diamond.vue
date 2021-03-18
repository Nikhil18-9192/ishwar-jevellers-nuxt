<template>
  <div id="diamond">
    <div class="dual">
      <div class="left">
        <div class="text">
          <h4>diamond</h4>
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
      <div class="right">
        <p class="category" @click="category = true">category</p>
        <img class="image" src="/diamond.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'diamondComponent',
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
#diamond {
  background: #f2feff;
  width: 100%;
  position: relative;
  height: 660px;
  padding: 0 72px;
  background-image: url('/diamond-bg3.png'), url('/diamond-bg1.png'),
    url('/diamond-bg2.png');
  background-repeat: no-repeat;
  background-position: 50% 100%, 92% 20%, 95% 85%;
  background-size: 92px, 520px, 265px;
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
          color: #679499;
        }
        p {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 300;
          font-size: 17px;
          line-height: 23px;
          color: #565656;
        }
        .brows {
          display: flex;
          margin-top: 25px;
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
    .right {
      width: 50%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .category {
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        text-transform: uppercase;
        color: #679499;
        position: absolute;
        right: 0;
        top: 35px;
        cursor: pointer;
        opacity: 0.8;
      }
      #category-modal {
        position: absolute;
        right: 0px;
        transition: 0.3s ease all;
      }
      .image {
        max-width: 515px;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
