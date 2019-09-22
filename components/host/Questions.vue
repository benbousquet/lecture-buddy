<template>
  <div>
    <!-- display all questions passed from parent -->
    <div class="flexItem" v-for="(question, index) in questions" :key="index">
      <!-- uses deleteQuestions method from parent to delete question -->
      <v-btn @click="deleteQuestions(index)" fab x-small color="red" class="addMargin">
        <v-icon dark>mdi-cancel</v-icon>
      </v-btn>
      <!-- uses highlightQuestion method from parent to highlight question -->
      <v-btn @click="highlightQuestion(question)" fab x-small color="blue" class="addMargin">
        <v-icon dark>mdi-magnify</v-icon>
      </v-btn>
      <v-card class="textMargin">{{question}}</v-card>
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
.flexItem {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 5px;
  flex-wrap: wrap;
}
.addMargin {
  margin-right: 4px;
}
.textMargin {
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}
</style>