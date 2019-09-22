<template>
  <div>
    <div v-if="stage == 1">
      <RoomkeyForm :joinRoom="joinRoom" />
    </div>
    <div v-if="stage == 2">
      <AddQuestion :room="room" :createSnackbar="createSnackbar" />
    </div>
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
      // 1: roomkeyform 2: addquestion
      stage: 1,
      room: "",
      snackbar: false,
      text: "",
      top: true
    };
  },
  methods: {
    createSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    },
    joinRoom(room) {
      const lectureRef = this.$fireStore
        .collection("lectures")
        .doc(room)
        .get()
        .then(doc => {
          if (!doc.exists) {
            this.text = "The Roomkey is invalid!";
            this.snackbar = true;
          } else {
            this.text = "You joined a room!";
            this.snackbar = true;
            this.stage = 2;
            this.room = room;
          }
        });
    }
  }
};
</script>