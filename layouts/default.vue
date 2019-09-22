<template>
  <v-app dark>
    <v-content>
      <v-container>
        <!-- header -->
        <Header />
        <!-- main content -->
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
