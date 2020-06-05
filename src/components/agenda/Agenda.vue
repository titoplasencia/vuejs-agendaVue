<template>
    <div class="container"> 
        <div class="col-sm-6">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4>Añadir un contacto</h4>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <input class="form-control" placeholder="Nombre" v-model="contacto.name">
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Apellidos" v-model="contacto.lastName">
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="e-mail" v-model="contacto.email">
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Teléfono" v-model="contacto.numtel">
                    </div>
                    <div class="pull-right">
                        <button class="btn btn-info" @click="addContacto">Agregar</button>
                    </div>
                </div>
            </div>
            <pre>{{ contactos }}</pre>
        </div>
        <div class="col-sm-6">
            <a href="#" class="list-group-item" style="border:none !important" v-for="(contacto, index) in contactos">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4 class="list-group-item-heading">
                            <i class="glyphicon glyphicon-user"></i> {{ contacto.name }} {{ contacto.lastName }}
                        </h4>
                    </div>
                    <div class="panel-body">
                        <h5>
                            <i class="glyphicon glyphicon-user" v-if="contacto.name"></i> 
                            {{ contacto.name}} {{ contacto.lastName }}
                        </h5>
                        <h5>
                            <i class="glyphicon glyphicon-earphone" v-if="contacto.numtel"></i> 
                            {{ contacto.numtel }}
                        </h5>   
                        <h5>
                            <i class="glyphicon glyphicon-envelope" v-if="contacto.email"></i> 
                            {{ contacto.email }}
                        </h5>
                        <hr>
                        <div class="pull-right">
                            <button class="btn btn-sm btn-danger" @click="borrarContacto(index)">Eliminar</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Contacto from './Contacto.vue';

    export default {
        data() {
            return {
                contacto: {},
                agenda: [],
                contador: 0
            }
        },
        methods: {
            cargarAgenda() {
                var agendaDatos = [
                
                ];

                this.agenda = agendaDatos;
                this.contador=agendaDatos.length;
            },

            addContacto() {
                if(this.contacto.name) {
                    this.contador++;
                    this.contacto.id=this.contador;
                    this.contactos.push(this.contacto);
                    this.contacto = { name: '', lastName: '', email: '', numtel: '' };
                }
            },

            borrarContacto(index) {
                if(confirm("¿Estás seguro de que quieres borrar este contacto?")) {
                    this.contactos.splice(index, 1);        
                }
            }
        },
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