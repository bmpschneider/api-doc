<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/bmpschneider/api-doc"
        target="_blank"
        text
      >
        <span class="d-flex align-center">API DO BRUNO</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
