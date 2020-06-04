import contactos from '../../data/contactos';

const state = {
    contactos: []
};

const mutations = {
    'SET_CONTACTOS' (state, contactos) {
        state.contactos = contactos;
    }
};

const actions = {
    addContacto: ({commit}, order) => {
        commit('ADD_CONTACTO', order);
    },
    initContactos: ({commit}) => {
        commit('SET_CONTACTOS', contactos);
    }
};

const getters = {
    contactos: state => {
        return state.contactos;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};