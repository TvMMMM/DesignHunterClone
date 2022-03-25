<template>
  <div>
    <div class="content-align">
      <div class="col-12"><h6>CONNECT WITH DESIGN HUNTER</h6></div>
      <div class="col-12 item social">
        <a href="#"><b-icon icon="twitter"></b-icon></a
        ><a href="#"><b-icon icon="facebook"></b-icon></a
        ><a href="#"><b-icon icon="google"></b-icon></a
        ><a href="#"><b-icon icon="mailbox"></b-icon></a>
        <a href="#"><b-icon icon="instagram"></b-icon></a>
      </div>
      <div class="col-12 flw-btn">
        <h6 class="follow-btn">FOLLOW ON BLOGLOVIN</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnectSection",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.item.social {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
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

.flw-btn {
  display: flex;
  justify-content: center;
}

.follow-btn {
  border: 2px solid black;
  border-radius: 4px;
  color: black;
  padding: 10px;
  margin-top: 1rem;
  width: 250px;
  height: 40px;
  transition-duration: 500ms;
  font-size: 12px;
  font-weight: bold;
}

.follow-btn:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.content-align {
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-top: 2rem;
}
</style>
