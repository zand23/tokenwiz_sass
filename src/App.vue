
<template>
  <div id="app">
  <HelloWorld/>
  <Form/>
  <FormLayouts />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
import FormLayouts from './components/FormLayouts.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Form,
    FormLayouts
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
