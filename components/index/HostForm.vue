<template>
  <div>
    <h1>For Teachers, Speakers & Hosts</h1>
    <v-card>
      <v-card-actions>
        <v-btn @click="createRoom()">Create</v-btn>
        <p>{{test}}</p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: ""
    };
  },
  methods: {
    createRoom() {
      const lectureRef = this.$fireStore
        .collection("lectures")
        .doc(randomize("aA0a0a"))
        .set({})
        .then(() => {
          console.log("created");
        })
        .catch(() => {
          console.log("Error: ", error);
        });
    }
  }
};
</script>