<template>
  <div>
    <v-card class="addPadding">
      <h1 class="text-center">For Teachers, Speakers & Hosts</h1>
      <v-card-actions class="flexContainer">
        <v-btn color="blue" to="/app/host" x-large>Create</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template> 

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.addPadding {
  padding: 10px;
}
</style>
