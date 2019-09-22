<template>
  <div>
    <v-overlay :value="overlay">
      <v-btn icon @click="overlay = false">
        <v-card>
          <v-card-text>
            <h1>{{highlightedQuestion}}</h1>
          </v-card-text>
        </v-card>
      </v-btn>
    </v-overlay>
    <v-btn @click="createNewRoom()">create new room</v-btn>

    <Display :roomkey="roomkey" />
    <Questions
      :questions="questions"
      :deleteQuestions="deleteQuestion"
      :highlightQuestion="highlightQuestion"
    />
  </div>
</template>

<script>
let randomize = require("randomatic");
import Display from "~/components/host/Display";
import Questions from "~/components/host/Questions";
export default {
  data() {
    return {
      roomkey: "",
      questions: [],
      overlay: false,
      highlightedQuestion: "Why is the Earth flat?"
    };
  },
  components: {
    Display,
    Questions
  },
  methods: {
    deleteQuestion(index) {
      const lectureRoom = this.$fireStore
        .collection("lectures")
        .doc(this.roomkey);

      lectureRoom.get().then(doc => {
        console.log(doc.data());
        console.log(doc.data().questions);
        let questionsList = doc.data().questions;
        questionsList.splice(index, 1);
        lectureRoom.update({ questions: questionsList });
      });
    },
    createNewRoom() {
      let roomkey = randomize("aA0a0a");
      const lectureRef = this.$fireStore.collection("lectures");

      lectureRef
        .doc(roomkey)
        .set({})
        .then(() => {
          console.log("created");
          this.roomkey = roomkey;
        })
        .catch(() => {
          console.log("Error: ", error);
        });

      lectureRef.doc(roomkey).onSnapshot(doc => {
        this.questions = doc.data().questions;
      });
    },
    highlightQuestion(text) {
      this.highlightedQuestion = text;
      this.overlay = true;
    }
  },
  mounted() {
    this.createNewRoom();
  }
};
</script>