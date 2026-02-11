<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  min-height: 100vh;
  background: #f5f5f5;
}
.nav {
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  gap: 1.5rem;
}
.nav a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}
.nav a.router-link-active {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
}
.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
