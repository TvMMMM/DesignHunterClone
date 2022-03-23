<template>
  <div class="col item social">
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
}
.item.social > a:hover {
  opacity: 0.9;
}
</style>
