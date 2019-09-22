<template>
  <div>
    <v-card>
      <v-card-title>Join a room</v-card-title>
      <v-card-text>
        <v-textarea label="Eg. 1n0dLe" v-model="room" rows="1" outlined></v-textarea>
      </v-card-text>
      <v-card-actions class="flexContainer">
        <!-- calls join room method from parent -->
        <v-btn @click="joinRoom(room)" color="blue" x-large>Join</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room: ""
    };
  },
  props: ["joinRoom"]
};
</script>

<style scoped>
/* puts items in a row and moves the button to the right side */
/* decreases from top margin to make button closer */
.flexContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: -45px;
}
</style>