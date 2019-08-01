<template>
  <div>
    This is the console! here is the
    <p>{{ content }}</p>
    <input type="text" v-model="inValue" />
  </div>
</template>
<script>
export default {
  name: "Console",
  props: {
    content: {
      type: String
    }
  },
  data() {
    return {
      inValue: "This is data store in the model"
    };
  }
};
</script>
<style scoped>
div {
  background-color: white;
}
</style>
