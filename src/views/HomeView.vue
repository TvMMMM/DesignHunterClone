<template>
  <div class="home">
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
  </div>
</template>

<script>
// @ is an alias to /src
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

export default {
  name: "HomeView",
  components: {
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
  },
};
</script>
