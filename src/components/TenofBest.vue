<template>
  <div>
    <div class="row mb-2">
      <div class="col-6 text span-6"><h6>10 OF THE BEST...</h6></div>
      <div class="col-6 link span-6">
        <router-link to="#">See All 10 of the best posts</router-link>
      </div>
    </div>
    <section class="pt-1 pb-2">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              class="img-fluid"
              alt="100%x280"
              src="../assets/1.png"
              style="height: 400px"
            />
            <div class="card-body">
              <h6 class="card-title">10 of the best</h6>
              <p class="card-text">10 of the best... modern minimalist rugs</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              class="img-fluid"
              alt="100%x280"
              src="../assets/10ofbest1.png"
              style="height: 400px"
            />
            <div class="card-body">
              <h6 class="card-title">Interiors, Architecture</h6>
              <p class="card-text">
                Zen Den | A 1960s ranch style bungalow updated
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              class="img-fluid"
              alt="100%x280"
              src="../assets/10ofbest2.png"
              style="height: 400px"
            />
            <div class="card-body">
              <h6 class="card-title">Design Hunter loves, Wellness & Beauty</h6>
              <p class="card-text">Verso: skincare simplified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TenofBest",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.row .text {
  text-align: left;
}

.row .link {
  text-align: right;
}

.link a {
  color: black;
  font-style: italic;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid black;
}

.card-title {
  font-weight: 300;
  font-size: 14px;
}

.card-text {
  font-size: 15px;
}

.card {
  border-width: 0px;
}

.card-body {
  padding: 16px 16px 16px 0;
  text-align: left;
}

.btn {
  outline: none !important;
  box-shadow: none !important;
}
</style>
