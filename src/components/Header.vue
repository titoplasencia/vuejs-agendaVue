<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Agenda Vue.js </router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/agenda" activeClass="active" tag="li"><a>Agenda</a></router-link>
                    <router-link to="/contactos" activeClass="active" tag="li"><a>Ver Contactos</a></router-link>
                </ul>
                
                <ul class="nav navbar-nav navbar-right">
                    <!--<li>
                        <form class="navbar-form">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Buscar contacto...">
                            </div>
                            <button type="submit" class="btn btn-default">Buscar</button>
                        </form>
                    </li>-->
                    <li 
                        class="dropdown" 
                        :class="{open: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen"
                        >
                        <a 
                            href="#" 
                            class="dropdown-toggle" 
                            data-toggle="dropdown" 
                            role="button" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            >Cargar & Guardar 
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Guardar Contactos</a></li>
                            <li><a href="#" @click="loadData">Cargar Contactos</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    
    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        methods: {
            ...mapActions({
                fetchData: 'loadData'
            }),
            saveData() {
                const data = {
                    contactoAgenda: this.$store.getters.contactoAgenda,
                    contactos: this.$store.getters.contactos
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>