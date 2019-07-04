import Vue from "vue";
import Vuex from "vuex";
import card from "./modules/cards";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    card,
    user
  }
});
