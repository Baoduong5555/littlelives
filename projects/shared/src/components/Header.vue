<template>
  <div class="Header">
    <h1>Logo</h1>
    <div>User</div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.Header {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.Header li {
  margin-right: 10px;
}
</style>