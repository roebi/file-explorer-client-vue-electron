<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is about page</h1>
    <p>File Explorer - Lorem ipsum dolor sit amet, elit, sed do tempor</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }  
  }
}
</script>

