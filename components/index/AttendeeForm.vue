<template>
  <div>
    <h1>For Students & Attendees</h1>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="roomkey"
          :rules="[ rules.length(6)]"
          filled
          color="blue"
          counter="6"
          label="roomkey"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn>Join</v-btn>
      </v-card-actions>
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