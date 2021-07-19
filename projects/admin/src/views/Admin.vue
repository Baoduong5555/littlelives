<template>
  <div>
    <h1> Admin Page </h1>
    <h3>Accademy count {{ adcademyCount }}</h3>
    <h3>Admin count {{ adminCount }}</h3>
    <button @click="increase">increase</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: mapGetters({
    adcademyCount: "academy/count",
    adminCount: "admin/count",
  }),
  methods: {
    ...mapMutations({
      increase: "admin/increase",
    }),
  },
};
</script>