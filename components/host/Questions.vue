<template>
  <div>
    <div class="flexItem" v-for="(question, index) in questions" :key="index">
      <v-btn @click="deleteQuestions(index)" fab x-small color="red">
        <v-icon dark right>mdi-cancel</v-icon>
      </v-btn>
      <p>{{question}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions", "deleteQuestions"],
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
}
</style>