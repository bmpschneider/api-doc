<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="3" align-self="center">
        <v-row justify="center">{{ titulo }}</v-row>
      </v-col>
      <v-col cols="3">
        <v-row justify="center">
          <v-btn class="mx-2" fab dark small color="primary" @click="addChave = !addChave">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-show="addChave" justify="center">
      <v-col cols="5">
        <v-text-field v-model="toAdd.chave" label="Chave" outlined></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field v-model="toAdd.valor" label="Valor" outlined></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-row justify="space-between">
          <v-btn icon @click="addItem">
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn icon @click="addChave = !addChave">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-for="(item, index) in items" v-show="addChave" :key="index" justify="center">
      <v-col cols="4">Chave: {{ item.chave }}</v-col>
      <v-col cols="4">Valor: {{ item.valor }}</v-col>
      <v-col cols="2">
        <v-btn icon @click="removeItem(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row></v-container
  >
</template>

<script>
export default {
  name: 'SecondPage',
  props: {
    titulo: {
      type: String,
      default: 'coloque um titulo',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      toAdd: {
        chave: '',
        valor: '',
      },
      addChave: false,
      addParam: false,
    }
  },
  methods: {
    addItem() {
      this.$emit('addItem', this.toAdd)
      this.toAdd = {
        chave: '',
        valor: '',
      }
    },
    removeItem(index) {
      this.$emit('removeItem', index)
    },
  },
}
</script>
