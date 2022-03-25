<template>
  <div>
    <div class="bg-explore">
      <div class="row explore">
        <div class="col-12 mt-3 mb-auto">
          <img src="https://images.opumo.com/ws/brand/mela.png" />
        </div>
        <div class="col-12">A better night's sleep await</div>
        <div
          class="d-flex btn mt-auto mb-3 justify-content-md-center justify-content-sm-center"
        >
          <!-- <h6 class="discover-btn">
            DISCOVER <b-icon class="ms-2" icon="arrow-right"></b-icon>
          </h6> -->
          <button class="slide_from_left">
            DISCOVER
            <b-icon class="ms-2" font-scale="0.9" icon="arrow-right"></b-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@media (min-width: 320px) {
  .btn {
    justify-content: center;
  }
}

.bg-explore {
  background-image: url("../assets/explore.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
}

.explore {
  display: flex;
  align-items: center;
  height: 300px;
  color: white;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  width: 100%;
  margin-left: 2px;
  padding: 0.5rem;
}

button {
  font-size: 15px;
  background: transparent;
  color: white;
  border: 0.01rem solid white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 200px;
  height: 40px;
}

button:hover {
  color: black;
}
button::after {
  content: "";
  background: white;
  position: absolute;
  z-index: -1;
  padding: 0.85em 0.75em;
  display: block;
}
button[class^="slide"]::after {
  transition: all 0.35s;
}
button[class^="slide"]:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
button.slide_from_left::after {
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
}
</style>
