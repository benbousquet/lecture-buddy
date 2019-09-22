<template>
  <div>
    <!-- first stage if param code is invalid then display roomkey input form -->
    <div v-if="stage == 1">
      <RoomkeyForm :joinRoom="joinRoom" />
    </div>
    <!-- second stage starts on this stage if param code is valid and display question input form -->
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
      stage: 2,
      room: "",
      snackbar: false,
      text: "",
      top: true
    };
  },
  mounted() {
    // run joinRoom method when component is mounted with the route params as function params
    this.joinRoom(this.$route.params.id);
  },
  methods: {
    // modify the snackbar text and enable it
    createSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    },
    // gets the info of the room for the user from Firestore
    joinRoom(room) {
      console.log("in join");
      // query firestore for room data
      const lectureRef = this.$fireStore
        .collection("lectures")
        .doc(room)
        .get()
        .then(doc => {
          // if a document with the roomkey does not exist the database then
          if (!doc.exists) {
            // set it back to the first stage
            this.stage = 1;
            // send user an alert
            this.text = "The Roomkey is invalid!";
            this.snackbar = true;
          } else {
            // send user an alert
            this.text = "You joined a room!";
            this.snackbar = true;
            // set room and stage
            this.stage = 2;
            this.room = room;
          }
        });
    }
  }
};
</script> 