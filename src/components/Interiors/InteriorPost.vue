<template>
  <div class="mt-5 post">
    <div class="sub-title">Interiors</div>
    <div class="title">Concrete Plinth House</div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete1.png" />
    </div>
    <div class="content">
      <p>
        Recently shortlisted as a finalist in the 2022 edition of New London
        Architecture’s Don’t Move, Improve! competition, Concrete Plinth House
        by DGN Studio is a Victorian end terrace in Hackney with a contemporary
        light filled extension grounded by a sunken concrete base.
      </p>
      <p>
        Embedding a series of concrete plinths into the ground to support an oak
        frame and steel structure, the architects have created a brutalist
        inspired living space at the rear of the house, removing the constraints
        of the typical Victorian layout by extending and opening up the ground
        floor. The house is connected to the outside via long views through the
        kitchen and dining area out into the garden.
      </p>
      <br />
    </div>
    <div class="mt-3">
      <img src="../../assets/InteriorPost/concrete2.png" class="img-fluid" />
    </div>
    <div class="row mt-3">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <img class="img-fluid" src="../../assets/InteriorPost/concrete3.png" />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <img class="img-fluid" src="../../assets/InteriorPost/concrete4.png" />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <img class="img-fluid" src="../../assets/InteriorPost/concrete5.png" />
      </div>
    </div>
    <div class="content">
      <p>
        “The sunken concrete base grounds the house with an atmosphere of
        permanence”
      </p>
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete6.png" />
    </div>
    <div class="content">
      <p>
        Concrete benches provide a seating nook and a large skylight allows
        light to enter between the exposed timber beams.
      </p>
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete7.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete8.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete9.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete10.png" />
    </div>
    <div class="content">
      <p>
        The glazed oak panelled frame of the rear extension filters light into
        the house, creating a calm, serene dining area with views out onto the
        garden.
      </p>
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete11.png" />
    </div>
    <div class="row mt-3">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <img class="img-fluid" src="../../assets/InteriorPost/concrete12.png" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <img class="img-fluid" src="../../assets/InteriorPost/concrete13.png" />
      </div>
    </div>

    <div class="content">
      <p>
        In contrast to the light filled ground floor a darker palette has been
        used upstairs.
      </p>
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete14.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete15.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete16.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete17.png" />
    </div>
    <div class="mt-3">
      <img class="img-fluid" src="../../assets/InteriorPost/concrete18.png" />
    </div>
    <div class="content">
      <p>
        <a class="link" href="https://dontmoveimprove.london/" target="_blank"
          >Don’t Move Improve!</a
        >
        celebrates the most innovative home improvement projects across London.
        Over 200 home extensions were submitted for the 2022 edition. The
        winners will be announced in May.
      </p>
    </div>
    <div class="afterword">
      <p>Project Credit: Concrete Plinth House, Hackney 2022 by DGN Studio</p>
    </div>
    <hr />
    <div class="bg-explore">
      <div class="row explore">
        <div class="col-12 mt-3 mb-auto">
          <img
            class="animate_animated animate__bounceInDown"
            src="https://images.opumo.com/ws/brand/opumo-noo-ma-i-brand-page-logo.png"
          />
        </div>
        <div class="col-12">
          <p class="animate__animated animate__backInLeft animate__slow">
            A better night's sleep await
          </p>
        </div>
        <div
          class="d-flex btn mt-auto mb-3 justify-content-md-center justify-content-sm-center"
        >
          <button class="slide_from_left">
            DISCOVER
            <b-icon class="ms-2" font-scale="0.9" icon="arrow-right"></b-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="row comment">
      <div class="col-6 span-6"><h6>COMMENTS (0)</h6></div>
      <div class="col-6 span-6">
        <router-link class="newest" to="#"><h6>Newest First</h6></router-link>
      </div>
    </div>
    <div class="text">
      <router-link to="#" class="next-post"
        ><div class="next-link">Next</div>
        <div class="post-title">
          10 of the best... modern minimalist rugs
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "InteriorPost",
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

.next-post {
  text-decoration: none;
  color: black;
}

.comment {
  margin-top: 4rem;
}

.next-link {
  font-weight: 300;
  font-size: 15px;
}

.post-title {
  font-size: 20px;
  font-weight: bold;
}

.text {
  text-align: right;
  line-height: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.newest {
  text-decoration: none;
  color: black;
}

.bg-explore {
  background-image: url("../../assets/explore2.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
}

.explore {
  display: flex;
  align-items: center;
  height: 400px;
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
  transition: all 0.85s;
}
button[class^="slide"]:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.85s;
}
button.slide_from_left::after {
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
}

.post {
  line-height: 2.5rem;
}

.afterword {
  font-weight: 500;
  font-style: italic;
  text-align: left;
}

.link {
  color: black;
  transition: 300ms;
}

.link:hover {
  color: rgba(0, 0, 0, 0.401);
}

.content {
  text-align: left;
  margin-top: 2rem;
}

.sub-title {
  font-weight: 300;
  font-size: 15px;
}

.title {
  margin-top: 2rem;
  font-size: 40px;
  margin-bottom: 3rem;
}
</style>
