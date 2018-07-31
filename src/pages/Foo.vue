<template>
  <main-layout>
    <div class="foo">
      <h1>{{ msg }}</h1>
      <h2>This is Foo page</h2>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layout/Main.vue'

  export default {
    name: 'foo',
    data () {
      return {
        msg: 'Welcome to foo page'
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
