<template>
  <div class="flexContainer">
    <h1>Lecture Buddy</h1>
    <!-- home button -->
    <v-btn color="green" class="addMargin" to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <!-- For future implementation of authentication. <LogoutButton class="addMargin" /> -->
  </div>
</template>

<script>
import LogoutButton from "~/components/auth/LogoutButton";
export default {
  components: {
    LogoutButton
  }
};
</script>

<style scoped>
/* adds margins to home button to clean up spacing */
.addMargin {
  margin-left: 10px;
  margin-top: 6px;
}
/* aligns items and adds padding to space out components */
.flexContainer {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
</style>