<template>
  <div class="flexContainer">
    <div class="flexItem">
      <h3>Why use us?</h3>
      <v-timeline>
        <v-timeline-item>timeline item</v-timeline-item>
        <v-timeline-item class="text-right">timeline item</v-timeline-item>
        <v-timeline-item>timeline item</v-timeline-item>
      </v-timeline>
    </div>
    <div class="flexItem">
      <HostForm />
      <AttendeeForm />
    </div>
  </div>
</template>

<script>
import HostForm from "~/components/index/HostForm";
import AttendeeForm from "~/components/index/AttendeeForm";
export default {
  components: {
    HostForm,
    AttendeeForm
  }
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: row;
  padding: 30px;
}
.flexItem {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.flexItem > v-timeline-item {
  align-items: flex-start;
}
</style>