<template>
    <div>
        <app-contacto v-for="contacto in contactos" :contacto="contacto"></app-contacto>
    </div>
</template>

<script>
    import Contacto from './Contacto.vue';

    export default {
        components: {
            appContacto: Contacto
        },
        computed: {
            contactos() {
                return this.$store.getters.contactos;
            }
        }
    }
</script>