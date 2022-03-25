<template>
  <div>
    <div class="text"><h6>Posts in Design</h6></div>
    <div class="row content justify-content-sm-center">
      <div class="col-lg-6 col-md-12 col-sm-12 post">
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design1.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">Concrete Plinth House</p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design3.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">
                Store decor | a Japandi style interior for shoe brand Notabene
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design5.png"
            />
            <div class="article-body">
              <h6 class="article-title">DestinationsDesign</h6>
              <p class="article-text">Inside Seville's newest design hotel</p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design7.png"
            />
            <div class="article-body">
              <h6 class="article-title">Renovation Diaries, Design</h6>
              <p class="article-text">
                Our contemporary minimalist kitchen extension - the reveal
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design9.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">Using quartz surfaces in the kitchen</p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design11.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">
                A Buenos Aires interior by Carbono Atelier
              </p>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 post">
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design2.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design, Architecture</h6>
              <p class="article-text">
                Zen Den | A 1960s ranch style bungalow updated
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design4.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design, Destinations</h6>
              <p class="article-text">
                A former gardener's residence offers an escape to nature
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design6.png"
            />
            <div class="article-body">
              <h6 class="article-title">Destinations, Lifestyle, Design</h6>
              <p class="article-text">
                The Meadows - a modern rustic hideaway in Cornwall
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design8.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">
                Poetic Minimalism: a serene Parisian apartment by Guillaume Alan
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design10.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">
                Cereal Abode | A concept apartment on London's Greenwich
                Peninsula
              </p>
            </div>
          </div>
        </article>
        <article class="article">
          <div>
            <img
              class="img-fluid"
              style="height: 700px"
              alt="100%x280"
              src="../../assets/Design/Design12.png"
            />
            <div class="article-body">
              <h6 class="article-title">Design</h6>
              <p class="article-text">
                Function + Form at the Dean Street Café
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsInterior",
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
    width: 500px;
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

.text {
  text-align: left;
  margin-bottom: 3rem;
  margin-top: 2rem;
}

.link a {
  color: black;
  font-style: italic;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid black;
}

.article {
  border-width: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: -8px;
}

.article-body {
  margin-top: 5px;
  text-align: left;
  margin-bottom: 0;
}

.article-title {
  font-weight: 300;
  font-size: 13px;
}

.article-text {
  font-size: 14px;
}
</style>
