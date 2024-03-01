import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
      activeInput: 0,
    };
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getSortTasks(state){
      return [...state.tasks]?.sort((a, b) => {
        if (a.active && !b.active) {
          return 1;
        }else{
          return -1;
        }
      })
    },
    getIndex(state) {
      return (id) => state.tasks.findIndex((item) => item.id == id);
    },
    getLastId(state) {
      return state.tasks?.length > 0
        ? state.tasks[state.tasks?.length - 1].id
        : 0;
    },
    getActiveInput(state) {
      return state.activeInput;
    },
  },
  mutations: {
    loadTasks: (state,tasks) => tasks?.forEach(item=>state.tasks.push(item)),
    addTask: (state, item) => state.tasks.push(item),
    deleteTask: (state, index) => state.tasks.splice(index, 1),
    changeActive: (state, index) =>
      (state.tasks[index].active = !state.tasks[index].active),
    changeActiveInput(state, id) {
      state.activeInput = id;
    },
  },
  actions: {
    changeActive({ commit, getters }, id) {
      commit("changeActive", getters["getIndex"](id));
    },
    changeText({ commit, getters }, id, text) {
      commit("changeText", getters["getIndex"](id), text);
    },
    addTask({ commit, getters }, text) {
      if(text){
        commit("addTask", {
          id: getters["getLastId"] + 1,
          text,
          active: false,
        })
      }
    },
    deleteTask({ commit, getters }, id) {
      commit("deleteTask", getters["getIndex"](id));
    },
    loadTasks({commit}){
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      commit('loadTasks',tasks)
    },
    setTasks({state}){
      localStorage.clear()
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    }
  },
});

export default store;
