<template>
  <div class="page-content">
    <SideBar :pages="pages" />
    <div>
      <h1>Admin Project</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@shared/components/SideBar";
import { routes } from "@/router";

export default {
  name: "App",
  components: {
    SideBar,
  },
  data() {
    return {
      pages: routes
    }
  }
};
</script>
