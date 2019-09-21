<template>
  <div>
    <v-btn>create new room</v-btn>
    <Display :roomkey="roomkey" />
    <Questions :questions="questions" :deleteQuestions="deleteQuestion" />
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
      questions: []
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
    }
  },
  mounted() {
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
  }
};
</script>