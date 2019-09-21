<template>
  <div>
    <v-card>
      <v-card-title>Join a room</v-card-title>
      <v-card-text>
        <v-textarea label="Eg. 1n0dLe" v-model="room" rows="1" outlined></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="joinRoom(room)">Join</v-btn>
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