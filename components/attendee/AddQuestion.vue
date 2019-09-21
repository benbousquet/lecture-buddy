<template>
  <div>
    <h1>Current Room: {{room}}</h1>
    <v-card>
      <v-card-title>Got a 🔥burning🔥 question?</v-card-title>
      <v-card-text>
        <v-textarea v-model="input" outlined name="input-7-4" label="Solo textarea"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addQuestion()">Ask!</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["room", "createSnackbar"],
  data() {
    return {
      input: ""
    };
  },
  methods: {
    addQuestion() {
      if (this.input.length === 0) {
        this.createSnackbar("Please enter something to ask!");
      }

      const lectureRoom = this.$fireStore.collection("lectures").doc(this.room);

      lectureRoom.get().then(doc => {
        if (Object.keys(doc.data()).length === 0) {
          lectureRoom.update({ questions: [this.input] });
        }
        let currentQuestions = doc.data().questions;
        currentQuestions.push(this.input);
        lectureRoom.update({ questions: currentQuestions });
        this.createSnackbar("Your question has been sent!");
      });
    }
  }
};
</script>