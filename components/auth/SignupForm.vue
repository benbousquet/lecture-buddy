<template>
  <v-card>
    <v-card-title>Signup</v-card-title>
    <v-card-text>
      <v-text-field v-model="email" label="Email" outlined></v-text-field>
      <v-text-field v-model="password" label="Password" outlined></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="signup()">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signup() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        alert("Created account");
        this.$router.push({ name: "index" });
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>