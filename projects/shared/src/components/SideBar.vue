<template>
  <div class="side-bar">
    <ul>
      <!-- <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Admin' }">Admin</router-link>
      </li> -->
      <li v-for="page in pages" :key="page.name">
        <router-link :to="{ name: page.name }">{{page.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ['pages']
};
</script>

<style lang="scss" scoped>
.side-bar {
  widows: 90px;
}
</style>