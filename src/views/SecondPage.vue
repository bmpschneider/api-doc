<template>
  <v-container>
    <!-- <v-row>
      <v-col cols="8" align-self="center">
        <v-row justify="center">Body</v-row>
      </v-col>
      <v-col cols="2">
        <v-row justify="center">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row> -->
    <HeaderForm titulo="Header" :items="headers" @addItem="addHeader" @removeItem="removeHeader" />
    <ParamForm
      titulo="Parametros"
      :items="params"
      @addItem="addParametros"
      @removeItem="removeParametros"
    />
    <QueryForm titulo="Query" :items="querys" @addItem="addQuery" @removeItem="removeQuery" />
    <BodyForm titulo="Body" :items="bodys" @addItem="addBody" @removeItem="removeBody" />
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import HeaderForm from '@/componentes/ChaveValor.vue'
import ParamForm from '@/componentes/ChaveValor.vue'
import QueryForm from '@/componentes/ChaveValor.vue'
import BodyForm from '@/componentes/CompBody.vue'

export default {
  name: 'SecondPage',
  computed: {
    ...mapState({
      pageOne: (state) => state.pageOne.ApiReq,
    }),
  },
  components: {
    HeaderForm,
    ParamForm,
    QueryForm,
    BodyForm,
  },
  data() {
    return {
      chave: '',
      valor: '',
      headers: [],
      params: [],
      querys: [],
      bodys: [],
      addChave: false,
      addParam: false,
    }
  },
  methods: {
    addHeader(header) {
      this.headers.push(header)
    },
    removeHeader(index) {
      this.headers.splice(index, 1)
    },
    addParametros(param) {
      this.params.push(param)
    },
    removeParametros(index) {
      this.params.splice(index, 1)
    },
    addQuery(query) {
      this.querys.push(query)
    },
    removeQuery(index) {
      this.querys.splice(index, 1)
    },
    addBody(body) {
      this.bodys.push(body)
    },
    removeBody(index) {
      this.bodys.splice(index, 1)
    },
  },
}
</script>
