<template>
  <div>
    <h1>Roomkey: {{roomkey}}</h1>
    <p v-for="(question, index) in questions" :key="index">{{question}}</p>
  </div>
</template>

<script>
let randomize = require("randomatic");

export default {
  data() {
    return {
      roomkey: "",
      questions: []
    };
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