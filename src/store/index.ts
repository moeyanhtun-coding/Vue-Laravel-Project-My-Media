import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    token: "",
  },
  getters: {
    storageToken: (state) => state.token,
    storageUserData: (state) => state.userData,
  },
  mutations: {},
  actions: {
    setToken: ({ state }, value) => (state.token = value),
    setUserData: ({ state }, value) => (state.userData = value),
  },
  modules: {},
});
