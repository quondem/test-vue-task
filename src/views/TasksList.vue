<template>
  <div
    class="mx-auto my-10 w-full max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300"
  >
    <div class="flex flex-row items-center justify-between">
      <div>
        <h1 class="text-3xl font-medium">Tasks list</h1>
      </div>
    </div>
    <div class="mt-4 flex">
      <input
        v-model="stageTask"
        class="text-grey-darker mr-4 w-full appearance-none rounded-md border px-3 py-2 shadow"
        placeholder="Add Todo"
      />
      <button
        @click="addTask"
        class="rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
      >
        Add
      </button>
    </div>

    <div id="tasks" class="my-5">
      <div v-for="item in tasks" :key="item.id">
        <div
          id="task"
          class="flex cursor-pointer items-center justify-between border-b border-l-4 border-slate-200 border-l-transparent bg-gradient-to-r from-transparent to-transparent px-2 py-3 transition duration-150 ease-linear hover:from-slate-100"
        >
          <div class="inline-flex items-center space-x-2">
            <svg
              @click="changeActive(item.id)"
              v-if="!item.active"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <svg
              @click="changeActive(item.id)"
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-slate-500 hover:cursor-pointer hover:text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              @click="
                () => {
                  changeActiveInput(item.id);
                  console.log(activeInput);
                }
              "
              v-if="!(activeInput == item.id)"
              :class="{ 'text-slate-500 line-through': item.active }"
            >
              {{ item.text }}
            </div>
            <input class="inputText" v-model="item.text" v-else type="text" />
          </div>
          <div>
            <svg
              @click="deleteTask()"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 text-slate-500 hover:cursor-pointer hover:text-slate-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-xs text-slate-500">
      Last updated 12 minutes ago
    </p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    let store = useStore();
    let stageTask = ref();

    return {
      activeInput: computed(() => store.getters["getActiveInput"]),
      changeActiveInput: (id) => store.commit("changeActiveInput", id),
      stageTask,
      tasks: store.getters["getTasks"],
      changeActive: (id) => store.dispatch("changeActive", id),
      addTask: () => {
        store.dispatch("addTask", stageTask.value);
        stageTask.value = "";
      },
      deleteTask: (id) => store.dispatch("deleteTask", id),
    };
  },
};
</script>
