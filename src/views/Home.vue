<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Aman be daa Vue.js App">aaa </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
