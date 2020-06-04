import Home from './components/Home.vue';
import Agenda from './components/agenda/Agenda.vue';
import Contactos from './components/contactos/Contactos.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/agenda', component: Agenda },
    { path: '/contactos', component: Contactos }
];