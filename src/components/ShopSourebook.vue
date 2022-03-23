<template>
  <div>
    <div class="text mb-4"><h6>SHOP THE SOURCEBOOK</h6></div>
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="card">
          <img
            src="../assets/Sourcebook1.png"
            class="card-img"
            alt=""
            style="height: 300px"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="card">
          <img
            src="../assets/Sourcebook2.png"
            class="card-img"
            alt="..."
            style="height: 300px"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="card">
          <img
            src="../assets/Sourcebook3.png"
            class="card-img"
            alt=""
            style="height: 300px"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="card">
          <img
            src="../assets/Sourcebook4.png"
            class="card-img"
            alt="..."
            style="height: 300px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopSourcebook",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.text {
  text-align: left;
}
.card {
  border-width: 0px;
}
</style>
