<template>
  <div id="app">
    <Header id="header" />
    <section class="page-content">
      <SideBar :pages="pages" />
      <router-view />
    </section>
  </div>
</template>

<script>
import Header from "@shared/components/Header";
import SideBar from "@shared/components/SideBar";
import { routes } from "@/router";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
  },
  data() {
    return {
      pages: routes,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
