<template>
  <div class="bg-sub">
    <div class="overlay">
      <div class="bg-form">
        <div class="sub row">
          <div class="col-lg-12"><h4>SUBSCRIBE TO OUR NEWSLETTER</h4></div>
          <div class="col-lg-12">
            <h6>
              Sign up to our newsletter for exclusive content and a monthly
              round up of the most popular posts delivered direct to your inbox.
            </h6>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn signup-btn" type="button">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubcribeSection",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h5 {
  font-style: italic;
  font-weight: 300;
}

.input-group {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.form {
  max-width: 250px;
  font-weight: 200;
}
.bg-form {
  background-color: white;
  width: 75%;
  padding: 1rem;
}

.bg-sub {
  background-image: url("../assets/subcribe.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
  margin-top: 2rem;
}
.overlay {
  height: 30rem;
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

.sub {
  gap: 1rem;
  color: black;
  margin-top: 10px;
  width: 100%;
}

.signup-btn {
  border: 2px solid black;
  color: black;
  transition-duration: 300ms;
  margin-left: 10px;
}

.signup-btn:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
