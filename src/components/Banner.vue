<template>
  <div class="bg-banner">
    <div class="overlay">
      <div class="banner row">
        <div class="col-lg-12"><h5>Interiors</h5></div>
        <div class="col-lg-12"><h2>CONCRETE PLINTH HOUSE</h2></div>
      </div>
      <div class="col-lg-12 btn">
        <router-link class="link" to="/concrete-plinth-house">
          <h6 class="read-btn">READ MORE</h6></router-link
        >
      </div>
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
h5 {
  font-weight: 300;
  font-size: 15px;
}

h2 {
  font-weight: bold;
}

.bg-banner {
  background-image: url("../assets/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
  margin-top: 5rem;
}
.overlay {
  height: 35rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.banner {
  gap: 1rem;
  color: white;
  margin-top: 10px;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: center;
}

.read-btn {
  border: 2px solid white;
  color: white;
  padding: 12px;
  margin-top: 1rem;
  width: 200px;
  height: 50px;
  transition-duration: 500ms;
}

.link {
  text-decoration: none;
}
.read-btn:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
