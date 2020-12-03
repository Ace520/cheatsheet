<template>
  <div class="theme-container">
    <Content/>
  </div>
</template>
<script>
import Masonry from "masonry-layout";
export default {
  mounted() {
    new Masonry(".content__default", {
      columnWidth: 0,
    });
  },
}
</script>
<style>
body{
    background-color: #2c3e50;
}
.masonry-card-box{
  padding: 0.3rem;
}
.masonry-card-content{
      background-color: #2c3e50;
    border-radius: 6px;
    border: 1px solid #708090;
}
.masonry-card-content .title{
    padding: .8rem 1rem;
    color: #fff;
    border-bottom: 1px solid #708090;
}
.masonry-card {
  width: 100%;
}
/* Small (sm) */
@media (min-width: 640px) {
  .masonry-card {
    width: 50%;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .masonry-card {
    width: 50%;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  .masonry-card {
    width: 33.33333%;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  .masonry-card {
    width: 33.33333%;
  }
}
</style>