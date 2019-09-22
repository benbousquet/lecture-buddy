<template>
  <div>
    <div class="flexContainer">
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
  flex: 1;
  justify-content: space-evenly;
  margin-top: 30px;
}
</style>