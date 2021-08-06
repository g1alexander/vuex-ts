<template>
  <div class="hello">
    <div
      class="bg-gray-300 h-64 w-4/6 mx-auto shadow-md flex flex-col justify-center items-center"
    >
      <h1>{{ message }}</h1>
      <h3 class="text-xl font-semibold">Increment Counter</h3>
      <button
        class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl font-bold focus:outline-none"
        @click="inc"
      >
        Press Me
      </button>
      <h5 class="text-3xl">Counter:{{ count.counter }}</h5>
      <h3>Double Counter: {{ countDouble }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/hooks/useStore";
import { COUNTER_STORE } from "@/store/constants";

export default defineComponent({
  setup() {
    const store = useStore();

    const count = ref(store.state.counterModule);
    const countDouble = computed(() => store.getters.DOUBLED_COUNTER);

    const message = ref(process.env.VUE_APP_TITLE);

    const inc = () => {
      store.dispatch(COUNTER_STORE.ACTIONS.GET_COUNTER, 2);
    };

    return { count, countDouble, inc, message };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
