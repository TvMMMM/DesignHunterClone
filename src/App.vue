<template>
  <div id="app">
    <NavBar />
    <Banner />
    <div class="container">
      <Social />
      <LatestPost />
      <hr class="hor" />
      <DesignSection />
      <hr class="hor" />
      <DesignLove />
      <hr class="hor" />
      <ShopSourcebook />
      <hr class="hor" />
      <TenofBest />
      <ExploreSection />
      <GuideSection />
    </div>
    <CollabSection />
    <ConnectSection />
    <SubcribeSection />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import Social from "@/components/Social.vue";
import LatestPost from "@/components/LatestPost.vue";
import DesignSection from "@/components/Design.vue";
import DesignLove from "@/components/DesignLove.vue";
import TenofBest from "@/components/TenofBest.vue";
import ShopSourcebook from "@/components/ShopSourebook.vue";
import ExploreSection from "@/components/Explore.vue";
import GuideSection from "@/components/Guide.vue";
import CollabSection from "@/components/Collab.vue";
import ConnectSection from "@/components/Connect.vue";
import SubcribeSection from "@/components/Subcribe.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    Banner,
    Social,
    DesignSection,
    DesignLove,
    LatestPost,
    TenofBest,
    ShopSourcebook,
    ExploreSection,
    GuideSection,
    CollabSection,
    ConnectSection,
    SubcribeSection,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.hor {
  margin-bottom: 3rem;
  margin-top: 3rem;
}
</style>
