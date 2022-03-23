<template>
  <div>
    <div class="row mb-2">
      <div class="col-6 text span-6"><h6>LASTEST POST</h6></div>
      <div class="col-6 link span-6"><a href="#">View all post</a></div>
    </div>
    <section class="pt-1 pb-2">
      <div class="row">
        <div class="col-12 text-right">
          <a
            class="btn mb-1"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <b-icon icon="chevron-left"></b-icon>
          </a>
          <a
            class="btn mb-1"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <b-icon icon="chevron-right"></b-icon>
          </a>
        </div>
        <div class="col-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-touch="false"
            data-bs-interval="false"
            data-interval="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../assets/1.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
                        <h6 class="card-title">10 of the best</h6>
                        <p class="card-text">
                          10 of the best... modern minimalist rugs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../assets/2.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
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
                        src="../assets/3.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
                        <h6 class="card-title">
                          Design Hunter loves, Wellness & Beauty
                        </h6>
                        <p class="card-text">Verso: skincare simplified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../assets/4.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
                        <h6 class="card-title">Most wanted</h6>
                        <p class="card-text">
                          This month's most wanted: February
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../assets/5.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
                        <h6 class="card-title">Interiors</h6>
                        <p class="card-text">
                          Store decor | a Japandi style interior for shoe brand
                          Notabene
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../assets/6.png"
                        style="height: 500px"
                      />
                      <div class="card-body text-left">
                        <h6 class="card-title">Technology</h6>
                        <p class="card-text">
                          A new chapter in the history of Braun audio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
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
}

.btn {
  outline: none !important;
  box-shadow: none !important;
}
</style>
