<template>
  <div class="footer-light">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 item text link">
            <a href="#">CONTACT</a>
            <a href="#">AFFILIATES</a>
            <a href="#">TERMS & CONDITIONS</a>
            <a href="#">SUBSCRIBE</a>
          </div>
          <div class="col item social">
            <a href="#"><b-icon icon="twitter"></b-icon></a
            ><a href="#"><b-icon icon="facebook"></b-icon></a
            ><a href="#"><b-icon icon="google"></b-icon></a
            ><a href="#"><b-icon icon="mailbox"></b-icon></a>
            <a href="#"><b-icon icon="instagram"></b-icon></a>
          </div>
        </div>
        <div class="vertical">
          <p class="copyright">Copyright © 2022 Design Hunter</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.footer-light {
  padding: 50px 0;
  color: #000000;
  background-color: #fdfdfd;
}

.footer-light h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-light ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-light a {
  color: black;
  text-decoration: none;
  opacity: 0.6;
}

.link a {
  padding: 0.5rem;
}

.link a:hover {
  font-weight: bolder;
}

.footer-light ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-light .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-light .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-light .item.text {
    margin-bottom: 0;
  }
}

.footer-light .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-light .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-light .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-light .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  margin: 0 6px;
  color: rgb(0, 0, 0);
  opacity: 0.75;
  transition: 0.5s;
}

.footer-light .item.social > a:hover {
  opacity: 0.9;
  transform: scale(1.2);
}

.footer-light .copyright {
  text-align: left;
  opacity: 0.3;
  font-size: 20px;
  margin-bottom: 0;
  margin-left: 2rem;
}

.vertical {
  border-left: 2px solid rgb(192, 192, 192);
  margin-top: 25px;
}
</style>
