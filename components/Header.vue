<template>
  <div class="flexContainer">
    <h1>Lecture Buddy</h1>
    <v-btn color="green" class="addMargin" to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <!-- <LogoutButton class="addMargin" /> -->
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
.addMargin {
  margin-left: 10px;
  margin-top: 6px;
}
.flexContainer {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
</style>