import Vue from 'vue';
import Vuex from 'vuex';

import contactos from './modules/contactos';
import agenda from './modules/agenda';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        contactos,
        agenda
    }
});