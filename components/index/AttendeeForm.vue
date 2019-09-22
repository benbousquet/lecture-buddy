<template>
  <div>
    <v-card class="addPadding">
      <h1 class="text-center">For Students & Attendees</h1>
      <v-card-actions class="flexContainer">
        <v-btn color="blue" to="/app/attendee" x-large>Join</v-btn>
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