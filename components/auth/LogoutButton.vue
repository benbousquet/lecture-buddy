<template>
  <v-btn @click="logout()" v-if="loggedIn" color=" blue">Logout</v-btn>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
      }
    });
  },
  methods: {
    logout() {
      this.$fireAuth.signOut().then(() => {
        alert("logged out");
        this.$router.push({ name: "index" });
      });
    }
  }
};
</script>