<template>
  <div>
    This is the console! here is the
    <p>{{ content }}</p>
    <input type="text" v-model="inValue" />
    <p>This is directly imported from my lib {{ content2 }}</p>
  </div>
</template>
<script>
import vuCore from "vualto-test-vu-core";
export default {
  name: "Console",
  props: {
    content: {
      type: String
    }
  },
  data() {
    return {
      inValue: "This is data store in the model",
      content2: vuCore()
    };
  }
};
</script>
<style scoped>
div {
  background-color: white;
}
</style>
