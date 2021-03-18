<template>
  <div id="testimonial">
    <div class="testi-wrapper">
      <div class="quotes">
        <img src="/quotes.svg" alt="" />
      </div>
      <!-- <transition-group tag="div" name="slide"> -->
      <div
        class="comment"
        v-for="(item, i) in testimonials"
        :key="item.name"
        v-show="currentIndex == i"
      >
        <p>{{ item.comment }}</p>
        <h4>{{ item.name }}</h4>
      </div>
      <!-- </transition-group> -->
      <div class="bottom">
        <img src="/quotes1.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  data() {
    return {
      testimonials: [
        {
          name: 'Mr. A B Shah',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eu vel elementum at. Dui neque, mollis in lectus elit. Pulvinar ut libero rhoncus odio id nibh vitae nec. Aenean leo placerat fringilla eget ornare vel.',
        },
        {
          name: 'Mr. c B Shah',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eu vel elementum at. Dui neque, mollis in lectus elit. Pulvinar ut libero rhoncus odio id nibh vitae nec. Aenean leo placerat fringilla eget ornare vel.',
        },
        {
          name: 'Mr. Z B Shah',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eu vel elementum at. Dui neque, mollis in lectus elit. Pulvinar ut libero rhoncus odio id nibh vitae nec. Aenean leo placerat fringilla eget ornare vel.',
        },
      ],
      slideInterval: null,
      currentIndex: 0,
      slideDuration: 4000,
    }
  },
  mounted() {
    this.autoSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoSlider)
  },
  methods: {
    autoSlider() {
      this.slideInterval = setInterval(() => {
        this.currentIndex < this.testimonials.length - 1
          ? this.currentIndex++
          : (this.currentIndex = 0)
      }, this.slideDuration)
    },
  },
}
</script>

<style lang="scss" scoped>
#testimonial {
  width: 100%;
  height: 305px;
  position: relative;
  background-image: url('/testi-bg1.png'), url('/testi-bg2.png');
  background-repeat: no-repeat;
  background-size: 485px, 665px;
  background-position: 0% 100%, 100% 0%;
  padding: 35px 72px;
  display: flex;
  justify-content: center;

  .testi-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    .quotes {
      img {
        width: 56px;
        height: 42px;
        object-fit: contain;
      }
    }
    .comment {
      text-align: center;
      padding: 30px 0;
      overflow: hidden;
      width: 665px;

      p {
        font-family: Open Sans;
        font-style: italic;
        font-weight: 300;
        font-size: 17px;
        line-height: 140.18%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #565656;
        padding-bottom: 8px;
      }
      h4 {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 140.18%;
        color: #7a7a7a;
      }
    }
    .bottom {
      img {
        width: 37px;
        height: 14px;
        object-fit: contain;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
