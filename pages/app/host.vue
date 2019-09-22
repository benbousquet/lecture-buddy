<template>
  <div>
    <v-overlay :value="overlay">
      <v-card class="flexContainer">
        <v-card-actions>
          <v-btn @click="overlay= false" fab x-small color="red">
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <h1 class="fixOverlay">{{highlightedQuestion}}</h1>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-btn @click="createNewRoom()" color="blue">create new room</v-btn>
    <div class="flexContainer">
      <Display class="flexItemOne" :roomkey="roomkey" />
      <Questions
        class="flexItemTwo"
        :questions="questions"
        :deleteQuestions="deleteQuestion"
        :highlightQuestion="highlightQuestion"
      />
    </div>
  </div>
</template>
<script>
// used for web browser native notifications
const push = require("push.js");
// used to generate random room codes
let randomize = require("randomatic");
import Display from "~/components/host/Display";
import Questions from "~/components/host/Questions";
export default {
  data() {
    return {
      roomkey: "",
      questions: [],
      overlay: false,
      highlightedQuestion: "",
      questionNumber: 0
    };
  },
  components: {
    Display,
    Questions
  },
  methods: {
    // lets hosts delete questions from their screen that they are done with
    deleteQuestion(index) {
      const lectureRoom = this.$fireStore
        .collection("lectures")
        .doc(this.roomkey);

      lectureRoom.get().then(doc => {
        // console.log(doc.data());
        // console.log(doc.data().questions);
        let questionsList = doc.data().questions;
        questionsList.splice(index, 1);
        lectureRoom.update({ questions: questionsList });
      });
    },
    createNewRoom() {
      // generate a random roomkey
      let roomkey = randomize("aA0a0a");
      const lectureRef = this.$fireStore.collection("lectures");
      // creates a document with the id as the roomkey
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
      // listen for new questions
      lectureRef.doc(roomkey).onSnapshot(doc => {
        // refresh the questions
        this.questions = doc.data().questions;
        // if question is not 0 then prompt the host
        if (this.questionNumber != 0) {
          push.create("Someone asked a question!");
        }

        this.questionNumber++;
      });
    },
    // highlights a question
    highlightQuestion(text) {
      this.highlightedQuestion = text;
      this.overlay = true;
    }
  },
  mounted() {
    // when the component is mounted on the page then create a new room
    this.createNewRoom();
  }
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: row;
}
.flexItemOne {
  display: flex;
  flex-direction: column;
  flex-grow: 0.25;
  flex-basis: auto;
  width: 25%;
}
.flexItemTwo {
  display: flex;
  flex-direction: column;
  flex-grow: 0.75;
  flex-basis: auto;
  flex-wrap: wrap;
  width: 75%;
}
.fixOverlay {
  margin-left: -15px;
  line-height: 125%;
}
</style>