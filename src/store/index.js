import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [
        { id: 1, text: "YT Intro remix", active: false },
        { id: 2, text: "Magic stuff", active: true },
      ],
    };
  },
  mutations: {
    changeActive: (state,id)=>
  },
});

export default store;
