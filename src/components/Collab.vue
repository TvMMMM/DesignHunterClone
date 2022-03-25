<template>
  <div class="bg-collab">
    <div class="overlay">
      <div class="collab row">
        <div class="col-lg-12"><h5>Collaborate</h5></div>
        <div class="col-lg-12"><h2>WORK WITH DESIGN HUNTER</h2></div>
      </div>
      <div class="col-lg-12 btn">
        <h6 class="learn-btn">LEARN MORE</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollabSection",
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

.bg-collab {
  background-image: url("../assets/Collab.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
  margin-top: 5rem;
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

.collab {
  gap: 1rem;
  color: white;
  margin-top: 10px;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: center;
}

.learn-btn {
  border: 2px solid white;
  color: white;
  padding: 10px;
  margin-top: 1rem;
  width: 200px;
  height: 50px;
  transition-duration: 500ms;
}

.learn-btn:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
