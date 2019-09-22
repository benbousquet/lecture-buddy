<template>
  <div>
    <div class="flexItem" v-for="(question, index) in questions" :key="index">
      <v-btn @click="deleteQuestions(index)" fab x-small color="red" class="addMargin">
        <v-icon dark>mdi-cancel</v-icon>
      </v-btn>
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
/* aligns items in a row and centers them in their block */
.flexItem {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 5px;
  flex-wrap: wrap;
}
/* adds a margin to the right of the buttons to make spacing look nice */
.addMargin {
  margin-right: 4px;
}
/* adds padding to the text so v-card isn't right on the edge */
.textMargin {
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}
</style>