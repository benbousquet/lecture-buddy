<template>
  <v-card>
    <v-card-title>Login</v-card-title>
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
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        alert("Login account");
        this.$router.push({ name: "index" });
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>