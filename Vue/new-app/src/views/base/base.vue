<template>
  <section>
    <h2>hello {{ version }}</h2>
  </section>
</template>

<script>
export default {
  name: "base",
  data: () => ({
      version: '2.1',
  }),
};
//   data: () => {
//       return{version: '2.1'}
//   },
//};
</script>

<style scoped>
</style>