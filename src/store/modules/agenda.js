const state = {
    contactos: []
}

const mutations = {
    'EDIT_CONTACTO'(state, {contactoId, contactoName, contactoLastname, contactoNickname, contactoNumtel, contactoEmail}) {
        const record = state.contactos.find(element => element.id == contactoId);
        if (record) {
            
        } else {
            state.contactos.push({
                id: contactoId,
            })
        }
    },
    'ERASE_CONTACTO' (state, {contactoId, contactoName, contactoLastname, contactoNickname, contactoNumtel, contactoEmail}) {
        const record = state.contactos.find(element => element.id == contactoId);
    },
    'ADD_CONTACTO' (state, {contactoId, contactoName, contactoLastname, contactoNickname, contactoNumtel, contactoEmail}) {
        const record = state.contactos.find(element => element.id == contactoId);
    },
    'SET_AGENDA' (state, agenda) {
        state.contactos = agenda.contactoAgenda ? agenda.contactoAgenda : [];
    }
};

const actions = {
    eraseContacto({commit}, order) {
        commit('ERASE_CONTACTO', order);
    }
};

const getters = {
    contactoAgenda (state, getters) {
        return state.contactos.map(contacto => {
            const record = getters.contactos.find(element => element.id == contacto.id);
            return {
                id: contacto.id,
                name: record.name,
                lastname: record.lastName,
                nickname: record.nickname,
                numtel: record.numtel,
                email: record.email
            }
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};