<template>
  <div class="interiors">
    <div class="container"><PostsInterior /></div>
  </div>
</template>

<script>
import PostsInterior from "@/components/Interiors/PostsInterior.vue";

export default {
  name: "InteriorsView",
  components: {
    PostsInterior,
  },
};
</script>
