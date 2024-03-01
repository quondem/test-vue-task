import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [
        { id: 1, text: "YT Intro remix", active: false },
        { id: 2, text: "Magic stuff", active: false },
        { id: 3, text: "Magic2 stuff", active: false },
      ],
      activeInput: 0,
    };
  },
  getters: {
    getTasks(state) {
      return state.tasks;
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
    addTask: (state, item) => state.tasks.push(item),
    deleteTask: (state, index) => state.tasks.splice(index, 1),
    changeActive: (state, index) =>
      (state.tasks[index].active = !state.tasks[index].active),
    changeActiveInput(state, id) {
      state.activeInput = id;
      console.log(state.activeInput);
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
      text
        ? commit("addTask", {
            id: getters["getLastId"] + 1,
            text,
            active: false,
          })
        : null;
    },
    deleteTask({ commit, getters }, id) {
      commit("deleteTask", getters["getIndex"](id));
    },
  },
});

export default store;
