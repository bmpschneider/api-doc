<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="apiReq.nome"
        :rules="nameRules"
        maxlength="15"
        :counter="15"
        outlined
        label="Name"
      ></v-text-field>
      <v-textarea
        v-model="apiReq.descricao"
        outlined
        :rules="descricaoRules"
        label="Descrição"
      ></v-textarea>

      <v-text-field v-model="apiReq.path" outlined label="Path"></v-text-field>

      <v-combobox
        v-model="apiReq.metodo"
        outlined
        :items="metodos"
        :rules="[(v) => !!v || 'Selecione o método']"
        label="Método"
      ></v-combobox>

      <v-btn class="success mx-0 mr-4" :disabled="!valid" @click="nextPage">nextPage</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_API_REQ } from '../store/mutationsType'

export default {
  data() {
    return {
      pathUsuario: '',
      apiReq: {
        nome: '',
        descricao: '',
        path: '',
        metodo: '',
      },
      valid: false,
      metodos: ['GET', 'POST', 'PUT', 'DELETE'],
      nameRules: [
        (v) => !!v || 'nome é obrigatório',
        (v) => v.length <= 15 || 'o nome conter no máximo 15 caracteres',
      ],
      descricaoRules: [
        (v) => !!v || 'descrição é obrigatório',
        (v) => v.length <= 200 || 'descrição deve conter 200 caracteres',
      ],
    }
  },
  methods: {
    ...mapMutations([SET_API_REQ]),
    nextPage() {
      this.handlingPath()
      this.$router.push('/secondPage')
      this[SET_API_REQ](this.apiReq)
    },
    handlingPath() {
      this.apiReq.path[0] !== '/' && (this.apiReq.path = `/${this.apiReq.path}`)
    },
  },
}
</script>
