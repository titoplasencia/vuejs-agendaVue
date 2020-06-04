import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const contactos = data.contactos;
                const contactoAgenda = data.contactoAgenda;

                const agenda = {
                    contactoAgenda,
                };

                commit('SET_CONTACTOS', contactos);
                commit('SET_AGENDA', agenda);
            }
        });
}