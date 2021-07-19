<template>
  <div>
    Academy
    <Header/>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  components: { Header },
  name: "Header",
};
</script>

<style>
.Header {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.Header li {
  margin-right: 10px;
}
</style>