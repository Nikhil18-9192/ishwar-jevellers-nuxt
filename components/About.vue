<template>
  <div id="about">
    <div class="footer-logo">
      <img src="/footer-logo.png" alt="" />
    </div>
    <div class="dual">
      <div class="left">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7643.34638557975!2d74.242018625952!3d16.693229453992245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003e8dd18f77%3A0x8145dfbd008c138d!2sRajarampuri%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1616060922093!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div class="right">
        <div class="cirtificates">
          <img src="/cirtificates.png" alt="" />
          <img src="/cirtificates1.png" alt="" />
        </div>
        <div class="address">
          <div class="contact">
            <img src="/location.svg" alt="" />
            <p>
              : 475, C – Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <div class="contact">
            <img src="/phone.svg" alt="" />

            <p>: 0231-861111, 00001111, +91 7777788888</p>
          </div>
          <div class="contact">
            <img src="/email.svg" alt="" />
            <p>: business@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
#about {
  width: 100%;
  height: 100vh;
  background: #335e73;
  background-image: url('/footer-bg1.png'), url('/footer-bg1.png');
  background-repeat: no-repeat;
  background-position: 20% 0%, 100% 0%;
  padding: 72px;
  .footer-logo {
    display: flex;
    justify-content: center;
    img {
      width: 201px;
      height: 109px;
      object-fit: contain;
    }
  }
  .dual {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 63px;
    .left {
      width: 60%;
      height: 100%;
      text-align: right;
      .map {
        margin: 0 0 0 auto;
        height: 300px;
        max-width: 530px;
      }
    }
    .right {
      width: 40%;
      position: relative;
      margin-left: 45px;
      .cirtificates {
        display: flex;

        align-items: center;
        img {
          width: 190px;
          height: 100%;
          object-fit: contain;
        }
      }
      .address {
        width: 100%;
        position: relative;
        margin-top: 45px;
        .contact {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          img {
            width: 14px;
            height: 19px;
            object-fit: contain;
            margin-right: 20px;
          }
          p {
            max-width: 380px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 17px;
            line-height: 23px;
            color: #99aeb9;
          }
        }
      }
    }
  }
}
</style>
