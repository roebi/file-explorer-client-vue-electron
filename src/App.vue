<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FileExplorer msg="File Explorer"/>
  </div>
</template>

<script>
import FileExplorer from './components/FileExplorer'

export default {
  name: 'app',
  components: {
    FileExplorer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
