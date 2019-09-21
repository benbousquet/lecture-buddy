<template>
  <div>
    <h1>For Students & Attendees</h1>
    <v-card>
      <v-card-text>
        <v-btn>Join</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomkey: "",
      rules: {
        length: len => v =>
          (v || "").length >= len || `Invalid character length, required ${len}`
      }
    };
  }
};
</script>