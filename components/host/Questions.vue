<template>
  <div>
    <div class="flexItem" v-for="(question, index) in questions" :key="index">
      <v-btn @click="deleteQuestions(index)" fab x-small color="red" class="addMargin">
        <v-icon dark>mdi-cancel</v-icon>
      </v-btn>
      <v-btn @click="highlightQuestion(question)" fab x-small color="blue" class="addMargin">
        <v-icon dark>mdi-magnify</v-icon>
      </v-btn>
      <v-card>{{question}}</v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions", "deleteQuestions", "highlightQuestion"],
  created() {
    console.log("questions created");
  }
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: column;
}
.flexItem {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 5px;
}
.addMargin {
  margin-right: 4px;
}
</style>