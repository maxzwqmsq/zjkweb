<template>
  <div class="container">
    <img src="../assets/logo.png">

    <ul>
      <li>
        <nav-link href="/">Home</nav-link>
        <nav-link href="/foo">Foo</nav-link>
        <nav-link href="/about">About</nav-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>


<script>
  import NavLink from '../components/NavLink.vue'

  export default {
    components: {
      NavLink
    }
  }
</script>

<style>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
