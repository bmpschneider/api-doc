<template>
  <v-container>
    <p>{{ apiReq }}</p>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="apiReq.nome" :rules="nameRules" maxlength="15" :counter="15" outlined label="Name">
      </v-text-field>
      <v-textarea outlined v-model="apiReq.descricao" :rules="descricaoRules" label="Descrição"></v-textarea>

      <v-text-field outlined v-model="apiReq.path" label="Path"> </v-text-field>

      <v-combobox
        outlined
        v-model="apiReq.metodo"
        :items="metodos"
        :rules="[v => !!v || 'Selecione o método']"
        label="Método"
      ></v-combobox>

      <v-btn class="success mx-0 mr-4" @click="nextPage" :disabled="!valid"> nextPage </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_API_REQ } from "../store/mutationsType";

export default {
  data() {
    return {
      pathUsuario: "",
      apiReq: {
        nome: "",
        descricao: "",
        path: "",
        metodo: "",
      },
      valid: false,
      metodos: ["GET", "POST", "PUT", "DELETE"],
      nameRules: [
        v => !!v || 'nome é obrigatório',
        v => v.length <= 15 || 'o nome conter no máximo 15 caracteres'
      ],
      descricaoRules: [
        v => !!v ||'descrição é obrigatório',
        v => v.length <=200 || 'descrição deve conter 200 caracteres'
      ]
    };
  },
  methods: {
    ...mapMutations([SET_API_REQ]),
    nextPage() {
      this.arrumandoPath();
      this.$router.push('/secondPage');
      this[SET_API_REQ](this.apiReq);
    },
    arrumandoPath() {
      if (this.apiReq.path[0] !== "/")
        this.apiReq.path = `/${this.apiReq.path}`;
    }
  }
};
</script>
