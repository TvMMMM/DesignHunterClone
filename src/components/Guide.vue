<template>
  <div>
    <div class="row content mt-5">
      <div class="col-lg-6">
        <h6>HOME & DIY GUIDES</h6>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Guide1.png"
          />
          <p class="ms-3">Why we chose shutters for our 1930s bay windows</p>
        </div>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Guide2.png"
          />
          <p class="ms-3">
            Installing a wood burning stove - a step by step guide
          </p>
        </div>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Guide3.png"
          />
          <p class="ms-3">Sanding and refinishing our oak hardwood floors</p>
        </div>
      </div>
      <div class="col-lg-6">
        <h6>POPULAR POSTS</h6>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Popular1.png"
          />
          <p class="ms-3">What I learned about my home during lockdown</p>
        </div>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Popular2.png"
          />
          <p class="ms-3">How to choose the right vase for your flowers</p>
        </div>
        <div class="d-flex">
          <img
            class="mb-4 img-fluid"
            style="width: 200px"
            src="../assets/Popular3.png"
          />
          <p class="ms-3">A Scottish architectural road trip</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.content {
  text-align: left;
}

h6 {
  margin-bottom: 2rem;
}
</style>
