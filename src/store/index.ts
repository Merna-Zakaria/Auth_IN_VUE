import Vuex, { StoreOptions } from "vuex";
import { user } from "./user/index";
import { shared } from "./shared/index";
import { State } from "./stateType";
import  auth from './Auth/auth'

// Vue.use(Vuex);

const store: StoreOptions<State> = {
  modules: {
    user,
    shared,
    auth
  },
};

export default new Vuex.Store(store);
