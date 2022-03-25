<template>
  <div class="item social">
    <a href="#"><b-icon icon="twitter"></b-icon></a
    ><a href="#"><b-icon icon="facebook"></b-icon></a
    ><a href="#"><b-icon icon="google"></b-icon></a
    ><a href="#"><b-icon icon="mailbox"></b-icon></a>
    <a href="#"><b-icon icon="instagram"></b-icon></a>
  </div>
</template>

<script>
export default {
  name: "SocialSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.item.social {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

@media (max-width: 991px) {
  .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.item.social > a {
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

.item.social > a:hover {
  opacity: 1;
  transform: scale(1.2);
}
</style>
