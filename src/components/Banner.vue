<template>
  <div class="bg-banner">
    <div class="banner row">
      <div class="col-12"><h5>Interiors</h5></div>
      <div class="col-12"><h2>CONCRETE PLINTH HOUSE</h2></div>
    </div>
    <div class="d-flex justify-content-md-center justify-content-sm-center">
      <h6 class="read-btn">READ MORE</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.bg-banner {
  background-image: url("https://picsum.photos/seed/picsum/200/300");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  padding: 8rem;
}

.banner {
  gap: 1.25rem;
  color: white;
}

.read-btn {
  border: 2px solid white;
  color: white;
  padding: 20px;
  margin-top: 1rem;
  width: 150px;
  transition-duration: 500ms;
}

.read-btn:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
