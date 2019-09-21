<template>
  <v-app dark>
    <v-content>
      <v-container>
        <Header />
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: {
    Header
  }
};
</script>
