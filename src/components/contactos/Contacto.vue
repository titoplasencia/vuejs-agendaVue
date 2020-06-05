<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <strong>{{ contacto.name}} {{ contacto.lastName }}</strong>
                    
                </h3>
            </div>
            <div class="panel-body">
                <br>
                <p>
                    Nombre: {{ contacto.name}} {{ contacto.lastName }}
                    <br>
                    Teléfono: {{ contacto.numtel }}
                    <br>
                    email: {{ contacto.email }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['contacto'],
        data() {
            return {

            }
        },
        methods: {
            editContacto() {
                const order = {
                    contactoId: this.contacto.id,
                    contactoName: this.contacto.name,
                    contactoLastname: this.contacto.lastName,
                    contactoNickname: this.contacto.nickname,
                    contactoNumtel: this.contacto.numtel,
                    contactoEmail: this.contacto.email
                };
                this.$store.dispatch('addContacto', order);
            }
        }
    }
</script>