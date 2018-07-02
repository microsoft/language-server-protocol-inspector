<template>
  <div id="app">
    <!-- <h1>LSP Inspector</h1> -->
    <!-- <div id="nav">
      <router-link to="/language-server-protocol/inspector/">Usage</router-link> | 
      <router-link to="/language-server-protocol/inspector/app">App</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h1 {
  margin-top: 120px;
  margin-bottom: 40px;
}
</style>
