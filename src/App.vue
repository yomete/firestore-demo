<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          ContactsApp
        </router-link>
        </div>

        <div class="navbar-end">
          <router-link to="/add" class="navbar-item">Add New Contact</router-link>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
  }
  .navbar {
    background: #4285f4;
    color: white;
  }
  a {
    color: white;
  }
</style>
