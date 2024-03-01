<template>
  <div
    @click="
      (e) => {
        console.log(e.target.closest('.inputText'));
        !e.target.closest('.inputText') ? changeActiveInput() : null;
      }
    "
  >
    <header>
      <NavBar />
    </header>
    <div class="flex flex-col px-2 text-slate-700 antialiased">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";

let store = useStore();
let changeActiveInput = () => store.commit("changeActiveInput", -1);
</script>

<style>
.active {
  @apply rounded-md bg-gray-900 px-3 py-2 font-medium text-white;
}
body,
#app {
  @apply min-h-screen bg-slate-200;
}
#app {
  @apply flex flex-col;
}
</style>
