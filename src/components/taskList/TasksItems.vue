<template>
    <div v-for="item in tasks" :key="item.id">
        <div
        @click="changeActive(item.id)"
          id="task"
          class="flex cursor-pointer items-center justify-between border-b border-l-4 border-slate-200 border-l-transparent bg-gradient-to-r from-transparent to-transparent px-2 py-3 transition duration-150 ease-linear hover:from-slate-100"
        >
          <div class="inline-flex items-center space-x-2">
              <ActiveImg v-if="!item.active"/>
              <DisableImg v-else/>
            <div
              @click.stop="
                () => {
                  changeActiveInput(item.id);
                }
              "
              v-if="!(activeInput == item.id)"
              id="inputText"
              class="select-none"
              :class="{ 'text-slate-500 line-through': item.active }"
            >
              {{ item.text }}
            </div>
            <input @click.stop id="inputText" v-model="item.text" v-else type="text" />
          </div>
          <div>
            <div @click.stop="deleteTask(item.id)">
              <DeleteImg/>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onUpdated } from "vue";
import ActiveImg from "@/components/taskList/ActiveImg.vue";
import DisableImg from "@/components/taskList/DisableImg.vue";
import DeleteImg from "@/components/taskList/DeleteImg.vue";

    let store = useStore();
    let tasks = computed(()=> store.getters["getSortTasks"])
    console.log(tasks);

    let activeInput = computed(() => store.getters["getActiveInput"])
    let changeActiveInput = (id) => store.commit("changeActiveInput", id)
    let changeActive = (id) => store.dispatch("changeActive", id)
    let deleteTask = (id) => store.dispatch("deleteTask", id)

    onUpdated(()=>{
      store.dispatch('setTasks')
    })
</script>