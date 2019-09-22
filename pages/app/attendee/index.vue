<template>
  <div>
    <!-- first stage allows users to add a roomkey -->
    <div v-if="stage == 1">
      <RoomkeyForm :joinRoom="joinRoom" />
    </div>
    <!-- second stage allows users to ask questions -->
    <div v-if="stage == 2">
      <AddQuestion :room="room" :createSnackbar="createSnackbar" />
    </div>
    <!-- top alert -->
    <v-snackbar :top="top" v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import AddQuestion from "~/components/attendee/AddQuestion";
import RoomkeyForm from "~/components/attendee/RoomkeyForm";
export default {
  components: {
    AddQuestion,
    RoomkeyForm
  },
  data() {
    return {
      // stage key
      // 1: roomkeyform 2: addquestion
      stage: 1,
      room: "",
      snackbar: false,
      text: "",
      top: true
    };
  },
  methods: {
    // modify the snackbar text and enable it
    createSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    },
    // gets the info of the room for the user from Firestore
    joinRoom(room) {
      // query firestore for room data
      const lectureRef = this.$fireStore
        .collection("lectures")
        .doc(room)
        .get()
        .then(doc => {
          // if a document with the roomkey does not exist the database then
          if (!doc.exists) {
            // send user an alert
            this.text = "The Roomkey is invalid!";
            this.snackbar = true;
          } else {
            // send user an alert
            this.text = "You joined a room!";
            this.snackbar = true;
            // set stage and room
            this.stage = 2;
            this.room = room;
          }
        });
    }
  }
};
</script>