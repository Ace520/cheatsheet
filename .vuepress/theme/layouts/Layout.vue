<template>
  <div class="theme-container container mx-auto">
    <div class="header">Cheat Sheet</div>
    <div class="list">
      <router-link
        :to="item.path"
        class="item"
        v-if="item.frontmatter.layout === 'MasonryLayout'"
        v-for="(item, index) in $site.pages"
        :key="index"
      >
        <img
          :src="staticUrl(item.frontmatter.icon)"
        />
        <div class="title">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    staticUrl(val) {
      return (
        "https://raw.githubusercontent.com/" +
        this.$themeConfig.gh.owner +
        "/" +
        this.$themeConfig.gh.repo +
        "/" +
        this.$themeConfig.gh.branch +
        "/static/" +
        val
      );
    },
  },
};
</script>
<style>
body {
  background-color: #2c3e50;
}
.header {
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 3rem;
}
.container {
  width: 100%;
}
.mx-auto {
  margin: 0 auto;
}
.list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
.list .item {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
}
.list .item img {
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  background-color: #f0ecec;
}
.list .item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 1.3rem;
  width: 100%;
}
/* Small (sm) */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  .list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
  .list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
  .list {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
  .list {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
}
</style>