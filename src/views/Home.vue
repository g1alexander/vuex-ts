<template>
  <div class="home">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const msg: string = process.env.VUE_APP_TITLE;
    return { msg };
  },
});
</script>
