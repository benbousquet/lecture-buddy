<template>
  <!-- puts in the host and atendee components, allowing them to navigate the page -->
  <div class="flexContainer">
    <HostForm class="pad" />
    <AttendeeForm />
  </div>
</template>

<script>
// imports the components for use on webpage
import HostForm from "~/components/index/HostForm";
import AttendeeForm from "~/components/index/AttendeeForm";
// assigns components
export default {
  components: {
    HostForm,
    AttendeeForm
  }
};
</script>

<style scoped>
/* spaces out main objects, adds wrapping for mobile devices, adds a top margin to move elements down */
.flexContainer {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
  margin-top: 30px;
  flex-wrap: wrap;
}
/* adds padding to the bottom to fix display on mobile devices */
.pad {
  padding-bottom: 6px;
}
</style>