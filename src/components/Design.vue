<template>
  <div>
    <div class="row mb-2">
      <div class="col-6 text span-6"><h6>DESIGN</h6></div>
      <div class="col-6 link span-6"><a href="#">See All in Design</a></div>
    </div>
    <div class="row content justify-content-sm-center">
      <div class="col-lg-6 col-md-6 col-sm-12 post">
        <div class="card">
          <img
            class="img-fluid"
            alt="100%x280"
            src="../assets/Design1.png"
            style="height: 700px"
          />
          <div class="card-body text-left">
            <h6 class="card-title">Better Basics: minimalist bedding</h6>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 post">
        <div class="card">
          <img
            class="img-fluid"
            alt="100%x280"
            src="../assets/Design2.png"
            style="height: 700px"
          />
          <div class="card-body text-left">
            <h6 class="card-title">
              New sustainable fabric collection from Kirkby Design
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@media (min-width: 1400px) {
  .post {
    width: 630px !important;
  }
}

@media (min-width: 1200px) {
  .content {
    justify-content: space-between !important;
  }

  .post {
    width: 550px;
  }
}
@media (min-width: 768px) {
  .content {
    justify-content: center;
  }
}
@media (min-width: 320px) {
  .content {
    justify-content: center;
  }
}

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

.card {
  border-width: 0px;
}

.card-body {
  padding: 16px 16px 16px 0;
}
</style>
