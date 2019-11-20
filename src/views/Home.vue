<template>
  <v-container>
    <p>{{ nome + path + descricao + metodo}}</p>
    <v-form ref="form">
      <v-text-field
      v-model="nome"
      :counter="15"
      :rules="nameRules"
      outlined
      label="Name">
      </v-text-field>

      <v-textarea
      outlined
      v-model="descricao"
      :rules="descricaoRules"
      label="Descrição">
      </v-textarea>

      <v-text-field
      outlined
      v-model="path"
      :rules="pathRules"
      label="Path">
      </v-text-field>

      <v-combobox
      outlined
      v-model="metodo"
      :items="metodos"
      :rules="[v => !!v || 'Selecione o método']"
      label="Método">
      </v-combobox>      

      <v-btn
      flat class="success mx-0 mr-4"
      @click="validate">Validar</v-btn>

      <v-btn
      flat class="error mx-0 mr-4"
      @click="reset">Resetar</v-btn>

    </v-form>    
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      nome: "Bruno",
      descricao: "",
      path: "",
      metodo: "",
      metodos: [
        'get',
        'post',
        'put',
        'delete'
      ]
    }      
  },
  methods:{
    validate() {
      alert(this.nome)
    },
    reset() {
      alert (this.nome)
    }
  }  
};
</script>
