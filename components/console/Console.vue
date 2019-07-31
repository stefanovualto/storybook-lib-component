<template>
  <div>
    This is the console! here is the content
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  name: "Console",
  props: {
    content: {
      type: String
    }
  }
};
</script>
<style scoped>
div {
  background-color: white;
}
</style>
