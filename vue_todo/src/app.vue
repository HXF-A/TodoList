<template>
  <div>
    <MainHeader></MainHeader>
    <MainTodo></MainTodo>
  </div>
</template>

<script>

import "./assets/style/gloal.css";
import MainHeader from "./components/MainHeader.vue";
import MainTodo from "./components/Maintodo/Maintodo.vue"
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MainHeader,
    MainTodo
  },
  methods: {}
};
</script>
<style  scoped>
</style>