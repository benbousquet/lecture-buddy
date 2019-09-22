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
const push = require("push.js");
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
        if (this.questionNumber != 0) {
          push.create("Someone asked a question!");
        }

        this.questionNumber++;
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

<style scoped>
/* puts items in rows */
.flexContainer {
  display: flex;
  flex-direction: row;
}
/* assigns the smaller collumn its width and grow values */
.flexItemOne {
  display: flex;
  flex-direction: column;
  flex-grow: 0.25;
  flex-basis: auto;
  width: 25%;
}
/* assigns bigger collumn its width and grow values */
.flexItemTwo {
  display: flex;
  flex-direction: column;
  flex-grow: 0.75;
  flex-basis: auto;
  flex-wrap: wrap;
  width: 75%;
}
/* keeps overlay text from overlapping tops and adds a margin to move text closer to button */
.fixOverlay {
  margin-left: -15px;
  line-height: 125%;
}
</style>