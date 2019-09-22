<template>
  <div>
    <h1>Roomkey: {{roomkey}}</h1>
    <qrcode :value="'https://localhost:3000/app/attendee/' + roomkey" :options="{ width: 200 }"></qrcode>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  components: {
    qrcode: VueQrcode
  },
  props: ["roomkey"]
};
</script>