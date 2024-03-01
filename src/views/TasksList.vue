<template>
  <div @keyup.enter="addTask"
    class="mx-auto my-10 w-full max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300"
  >
    <div class="flex flex-row items-center justify-between">
      <div>
        <h1 class="text-3xl font-medium">Tasks list</h1>
      </div>
    </div>
    <div class="mt-4 flex">
      <AddInput v-model="stageTask"/>
      <AddButton @click="addTask"/>
    </div>

    <div id="tasks" class="my-5">
      <TasksItems />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onUpdated } from "vue";
import AddInput from "@/components/taskList/AddInput.vue"
import AddButton from "@/components/taskList/AddButton.vue"
import TasksItems from "@/components/taskList/TasksItems.vue"


    let store = useStore();
    let stageTask = ref();

    let addTask = () => {
      store.dispatch("addTask", stageTask.value);
      stageTask.value = "";
    }
    onUpdated(()=>{
      store.dispatch('setTasks')
    })
</script>
