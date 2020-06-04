<template>
    <div> 
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
                        <button class="btn btn-info" v-on:click="addContacto">Guardar</button>
                    </div>
                    
                </div>
            </div>

            <pre>{{ $data }}</pre>

        </div>

        <div class="col-sm-6">
            <div class="list-group">

                <a href="#" class="list-group-item" v-for="(contacto, index) in agenda">
                        
                    <h4 class="list-group-item-heading">
                        <i class="glyphicon glyphicon-user"></i> {{ contacto.name }} {{ contacto.lastName }}
                    </h4>

                    <h5>
                        <i class="glyphicon glyphicon-earphone" v-if="contacto.numtel"></i> 
                        {{ contacto.numtel }}
                    </h5>   

                    <h5>
                        <i class="glyphicon glyphicon-envelope" v-if="contacto.email"></i> 
                        {{ contacto.email }}
                    </h5>

                    <button class="btn btn-sm btn-danger" v-on:click="borrarContacto(index)">Borrar</button>

                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                contacto: {id: '', name: '', lastName: '', nickname: '', numtel: '', email: '' },
                agenda: [],
                contador: 0
            }
        },
        mounted: function() {
            this.cargarAgenda();
        },
        methods: {
            cargarAgenda: function() {
                var agendaDatos = [
                
                ];

                this.agenda = agendaDatos;
                this.contador=agendaDatos.length;
            },

            addContacto: function() {
                if(this.contacto.name) {
                    this.contador++;
                    this.contacto.id=this.contador;
                    this.agenda.push(this.contacto);
                    this.contacto = { name: '', lastName: '', email: '', numtel: '' };
                }
            },

            borrarContacto: function(index) {
                if(confirm("¿Estás seguro de que quieres borrar este contacto?")) {
                    this.agenda.splice(index, 1);        
                }
            }
        }
    }
</script>